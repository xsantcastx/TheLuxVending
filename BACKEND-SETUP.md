# Firebase Backend Setup for TheLuxVending

## ✅ **What We've Set Up:**

1. **Firebase Functions Structure** - Complete backend ready for deployment
2. **Form Submission Handler** - Saves form data to Firestore database  
3. **CORS Configuration** - Allows your website to call the backend
4. **TypeScript Setup** - Professional development environment

## 🔧 **Next Steps to Complete Setup:**

### **Step 1: Enable Firestore Database**
```bash
# Go to Firebase Console: https://console.firebase.google.com/project/theluxvending
# Navigate to: Firestore Database → Create Database → Start in production mode
# Choose location: us-central1 (or your preferred region)
```

### **Step 2: Deploy Functions**
```bash
# Run from your project root:
firebase deploy --only functions
```

### **Step 3: Test the Backend**
```bash
# Build and serve your Angular app:
npm run build
npm start

# Test the form - submissions will be saved to Firestore
```

## 📊 **Current Form Flow:**

1. ✅ User fills out form on website
2. ✅ Form sends data to `/api/submitContactForm` 
3. ✅ Firebase Function validates and processes data
4. ✅ **Data saved to Firestore database**
5. ❌ **Email sending not yet configured**

## 📧 **Adding Email Functionality:**

### **Option 1: Gmail Setup (Recommended)**
1. **Enable 2FA** on diego@TheLuxVending.com Gmail account
2. **Create App Password**:
   - Go to Gmail Settings → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Configure Firebase**:
   ```bash
   firebase functions:config:set email.user="diego@TheLuxVending.com" email.password="your-app-password"
   ```
4. **Update Functions** to use nodemailer (I can help with this)

### **Option 2: SendGrid (Professional)**
1. Create SendGrid account (free tier: 100 emails/day)
2. Get API key
3. Configure Firebase: `firebase functions:config:set sendgrid.api_key="your-key"`

### **Option 3: EmailJS (Easiest)**
1. Create EmailJS account  
2. Set up email template
3. Update frontend to use EmailJS (no backend changes needed)

## 🗄️ **Database Structure**

Your form submissions are stored in Firestore:
```
contacts/
  ├── {documentId}/
  │   ├── firstName: "John"
  │   ├── lastName: "Doe" 
  │   ├── email: "john@example.com"
  │   ├── phone: "(555) 123-4567"
  │   ├── businessType: "gym"
  │   ├── message: "Location details..."
  │   ├── timestamp: [Server timestamp]
  │   └── status: "new"
```

## 🚀 **Ready to Go Live:**

1. **Enable Firestore** (5 minutes)
2. **Deploy Functions** (2 minutes) 
3. **Test Form** - data will be saved!
4. **Add Email** when ready (optional)

Your backend is **fully functional** for saving form data right now!

## 🆘 **Need Help?**

Let me know which email option you prefer and I'll help you complete the setup!