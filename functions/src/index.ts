import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";
import * as sendgrid from '@sendgrid/mail';
import { Request, Response } from "express";

// Initialize Firebase Admin
admin.initializeApp();

// Configure CORS
const corsHandler = cors({origin: true});

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  businessType?: string;
  message?: string;
}

export const submitContactForm = functions.https.onRequest((request: Request, response: Response) => {
  corsHandler(request, response, async () => {
    // Only allow POST requests
    if (request.method !== 'POST') {
      response.status(405).send('Method Not Allowed');
      return;
    }

    try {
      const formData: ContactFormData = request.body;
      
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email) {
        response.status(400).json({
          success: false,
          error: 'Missing required fields: firstName, lastName, email'
        });
        return;
      }

      // Save to Firestore for now (you can set up email later)
      const contactRef = await admin.firestore().collection('contacts').add({
        ...formData,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        status: 'new'
      });

      functions.logger.info('Contact form submitted:', formData);

      // Attempt to send notification email using SendGrid if configured
      try {
        const cfg = functions.config();
        const sgKey = cfg.sendgrid?.api_key;
        const emailFrom = cfg.email?.from || cfg.sendgrid?.from;
        const emailTo = cfg.email?.to || cfg.sendgrid?.to;

        if (sgKey && emailFrom && emailTo) {
          sendgrid.setApiKey(sgKey);

          const subject = `New contact from ${formData.firstName} ${formData.lastName}`;
          const html = `
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || '—'}</p>
            <p><strong>Business:</strong> ${formData.businessType || '—'}</p>
            <p><strong>Message:</strong><br/>${formData.message || '—'}</p>
            <p>Contact ID: ${contactRef.id}</p>
          `;

          await sendgrid.send({
            to: emailTo,
            from: emailFrom,
            subject,
            html
          });

          // mark contact as notified
          await admin.firestore().collection('contacts').doc(contactRef.id).update({ status: 'notified' });
        } else {
          functions.logger.info('SendGrid not configured; skipping email. Set functions config sendgrid.api_key, email.from, email.to');
        }
      } catch (mailErr) {
        functions.logger.error('Error sending email:', mailErr);
        // mark contact with email_failed but still return success to frontend
        await admin.firestore().collection('contacts').doc(contactRef.id).update({ status: 'email_failed' });
      }

      response.json({
        success: true,
        message: 'Form submitted successfully',
        id: contactRef.id
      });

    } catch (error) {
      functions.logger.error('Error processing contact form:', error);
      response.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  });
});