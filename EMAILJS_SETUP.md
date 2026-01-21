# EmailJS Setup Guide

Your contact form is now ready to send emails! Follow these steps to activate it:

## 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com)
- Sign up for a free account
- Verify your email

## 2. Get Your Public Key
- Log in to EmailJS dashboard
- Go to **Account** settings
- Copy your **Public Key**
- Replace `"YOUR_PUBLIC_KEY_HERE"` in [pages/Contact.tsx](pages/Contact.tsx#L18) with your public key

## 3. Set Up Email Service
- In the EmailJS dashboard, click **Add Service**
- Choose **Gmail** (or your preferred email provider)
- Follow the setup instructions to connect your email
- Copy your **Service ID** (e.g., `service_xxxxx`)
- Replace `"YOUR_SERVICE_ID_HERE"` in [pages/Contact.tsx](pages/Contact.tsx#L37) with your service ID

## 4. Create Email Template
- In EmailJS dashboard, go to **Email Templates**
- Click **Create New Template**
- Use these template variables in your email body:
  - `{{from_name}}` - Customer's name
  - `{{from_email}}` - Customer's email
  - `{{subject}}` - Message subject
  - `{{message}}` - Message content
  - `{{reply_to}}` - Reply-to address

Example template:
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

- Copy your **Template ID** (e.g., `template_xxxxx`)
- Replace `"YOUR_TEMPLATE_ID_HERE"` in [pages/Contact.tsx](pages/Contact.tsx#L38) with your template ID

## 5. Test the Form
- Start your dev server: `npm run dev`
- Visit the contact page
- Fill out the form and submit
- Check that emails arrive at your inbox
- Verify that form resets on success and shows confirmation message

## 6. Customize the Recipient Email
- The form currently sends to `frontdesk@zephyrs24.com`
- You can change this in [pages/Contact.tsx](pages/Contact.tsx#L39) to any email address

## Troubleshooting
- **Emails not sending**: Check your EmailJS dashboard for error logs
- **Template variables not working**: Make sure variable names match exactly (case-sensitive)
- **Rate limit errors**: EmailJS free tier has limits; consider upgrading if needed

## Production Deployment
- Keep your Public Key public (it's safe)
- Never expose your Private Key
- Ensure your email service is properly configured for production
