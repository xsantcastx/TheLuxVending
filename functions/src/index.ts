import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";
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

      // For now, we'll just save to database
      // TODO: Add email sending functionality
      
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