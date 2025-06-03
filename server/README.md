# Portfolio Contact Form Backend

This is a simple Express.js server that handles contact form submissions from your portfolio website and sends emails using Nodemailer.

## Setup Instructions

1. Install dependencies:
   ```
   cd server
   npm install
   ```

2. Configure environment variables:
   - Rename `.env.example` to `.env`
   - Update the values in the `.env` file with your email credentials:
     ```
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     EMAIL_RECIPIENT=your-email@gmail.com
     ```

   **Note for Gmail users:** You'll need to use an "App Password" instead of your regular password. 
   To generate an App Password:
   1. Enable 2-Step Verification on your Google account
   2. Go to your Google Account > Security > App passwords
   3. Generate a new app password for "Mail" and use it in the .env file

3. Start the server:
   ```
   npm start
   ```
   
   For development with auto-restart:
   ```
   npm run dev
   ```

## API Endpoints

- `GET /`: Test endpoint to verify the server is running
- `POST /api/contact`: Endpoint to handle contact form submissions

### POST /api/contact

**Request Body:**
```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Integration with Frontend

The frontend React component is already configured to send requests to this backend. Make sure the server is running on port 5000 when testing the contact form.

If you deploy this server to a different URL, update the fetch URL in the `Contact.jsx` component.