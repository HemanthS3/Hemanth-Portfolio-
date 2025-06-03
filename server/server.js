const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
// In production (Vercel), environment variables are automatically loaded
// In development, we need to load them from .env file
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Configure CORS to allow requests from your frontend domain
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://hemanth-portfolio.vercel.app', 
        'https://hemanth-portfolio-.vercel.app',
        /\.vercel\.app$/  // Allow all vercel.app subdomains
      ] 
    : 'http://localhost:5173', // Development frontend URL
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Contact form backend is running');
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
  }

  try {
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || 'hemanths072@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h3>New message from your portfolio contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message', error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`
========================================
✅ Server running successfully!
----------------------------------------
🌐 Server URL: http://localhost:${PORT}
📧 Email service: ${process.env.EMAIL_SERVICE || 'gmail'}
📮 Recipient: ${process.env.EMAIL_RECIPIENT || 'hemanths072@gmail.com'}
----------------------------------------
Available endpoints:
- GET / : Test if server is running
- POST /api/contact : Submit contact form
========================================
Press Ctrl+C to stop the server
  `);
});