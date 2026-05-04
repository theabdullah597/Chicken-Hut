# EmailJS Setup Guide for Chicken Hurt Restaurant Website

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, or custom SMTP)
4. Follow the provider-specific setup:
   - **Gmail**: Enable 2FA and create an [App Password](https://myaccount.google.com/apppasswords)
   - **Other providers**: Provide your email and password
5. Copy the **Service ID** (e.g., `service_abc123xyz`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Name it: `chicken_hurt_order_form`
4. Use this HTML template:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: #d3a574;
        color: white;
        padding: 20px;
        text-align: center;
        border-radius: 5px;
      }
      .section {
        margin: 15px 0;
      }
      .label {
        font-weight: bold;
        color: #555;
      }
      .value {
        color: #000;
        margin: 5px 0 10px;
      }
      .footer {
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px solid #ddd;
        font-size: 12px;
        color: #666;
      }
      pre {
        white-space: pre-wrap;
        word-break: break-word;
        background: #f5f5f5;
        padding: 12px;
        border-radius: 6px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🍗 Chicken Hurt Order</h1>
      </div>

      <div class="section">
        <p>Hello {{from_name}},</p>
        <p>Thank you for placing an order with Chicken Hurt! Here are your details:</p>
      </div>

      <div class="section">
        <h3>Customer Information</h3>
        <p>
          <span class="label">Name:</span>
          <span class="value">{{from_name}}</span>
        </p>
        <p>
          <span class="label">Email:</span>
          <span class="value">{{from_email}}</span>
        </p>
        <p>
          <span class="label">Phone:</span>
          <span class="value">{{phone}}</span>
        </p>
      </div>

      <div class="section">
        <h3>Order</h3>
        <p>
          <span class="label">Subject:</span>
          <span class="value">{{subject}}</span>
        </p>
        <p class="label">Message:</p>
        <pre>{{message}}</pre>
      </div>

      <div class="section">
        <h3>Pickup Information</h3>
        <p><strong>Chicken Hurt</strong></p>
        <p>10 Finkle St, Kendal LA9 4AB</p>
        <p>📞 01539 732111</p>
        <p>⏱️ Delivery: 45 mins | Collection: 15 mins</p>
      </div>

      <div class="footer">
        <p>We'll prepare your order and contact you soon!</p>
        <p>© 2024 Chicken Hurt. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
```

5. In the template editor:
   - Set **To Email**: your restaurant inbox (example: `info@chickenhutkendal.com`)
   - Set **Reply To**: `{{from_email}}`
   - Set **From Name**: `Chicken Hurt Order System`
   - Set **Subject**: `New Order: {{subject}}`
   - Paste the HTML above into the **HTML** tab
6. Click **Save**
7. Copy the **Template ID** (e.g., `template_abc123xyz`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `abc123xyz_public_key`)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_abc123xyz
VITE_EMAILJS_PUBLIC_KEY=abc123xyz_public_key
VITE_RESTAURANT_EMAIL=info@chickenhutkendal.com
```

2. Replace the values with your actual IDs from EmailJS

## Step 6: Test the Form

1. Run the development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form and click **Send Order**
4. Check your email inbox for the test order

## Troubleshooting

| Issue                   | Solution                                                               |
| ----------------------- | ---------------------------------------------------------------------- |
| "Failed to send"        | Check environment variables are set correctly in `.env` file           |
| Email not received      | Check spam folder, verify email service is active in EmailJS dashboard |
| Template not formatting | Use `{{variable_name}}` syntax exactly as shown; avoid typos           |
| CORS error              | Ensure your domain is whitelisted in EmailJS dashboard settings        |

## Template Variables Reference

These variables MUST match the `name="..."` attributes in `src\\pages\\Contact.jsx`.

- `{{from_name}}` - Customer full name
- `{{from_email}}` - Customer email
- `{{phone}}` - Customer phone
- `{{subject}}` - Order subject (auto-filled from Menu when you click Add)
- `{{message}}` - Full order text (items + address + notes)

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- Contact: support@emailjs.com
