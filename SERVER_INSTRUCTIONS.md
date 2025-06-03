# Contact Form Server Instructions

This document explains how to set up and run the backend server for your portfolio contact form.

## First-time Setup

1. Install server dependencies:
   ```
   npm run server:install
   ```

2. Configure your email settings:
   - Open `server/.env` file
   - Update the email settings if needed:
     ```
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     EMAIL_RECIPIENT=your-email@gmail.com
     ```

## Running the Server

You can run the server using the following command from the root directory:

```
npm run server
```

The server will start on port 5000 and display a message confirming it's running.

## Testing the Server

To verify the server is running correctly:

```
npm run server:test
```

This will make a test request to the server and display the response.

## Development Mode

If you want to run the server with auto-restart on file changes:

```
npm run server:dev
```

## Using with Your Portfolio

When your server is running, your contact form will automatically send emails when submitted. Make sure the server is running whenever you want to receive contact form submissions.

## Stopping the Server

To stop the server, press `Ctrl+C` in the terminal where the server is running.

## Troubleshooting

If you encounter issues:

1. Make sure you've installed the server dependencies with `npm run server:install`
2. Check that your `.env` file has the correct email credentials
3. For Gmail users, you need to use an App Password (see server/README.md for details)
4. Ensure port 5000 is not being used by another application