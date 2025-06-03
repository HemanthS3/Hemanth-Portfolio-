# Full Stack Portfolio Setup Guide

This guide explains how to run both the frontend and backend of your portfolio application.

## Project Structure

- `src/` - Frontend React application
- `server/` - Backend Express server for the contact form

## Setup Steps

### 1. Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure email settings:
   - Open `.env` file in the server directory
   - Update the email settings:
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

### 2. Frontend Setup

1. Return to the root directory:
   ```
   cd ..
   ```

2. Install frontend dependencies (if not already done):
   ```
   npm install
   ```

3. Configure API URL (already set up):
   - The `.env` file is already configured to connect to the local backend

## Running the Application

### Option 1: Run Frontend and Backend Separately

#### Terminal 1 - Backend:
```
cd server
npm start
```

#### Terminal 2 - Frontend:
```
npm run dev
```

### Option 2: Run Both with Concurrently (Advanced)

If you want to run both frontend and backend with a single command, you can install concurrently:

```
npm install --save-dev concurrently
```

Then add this script to your package.json:

```json
"scripts": {
  "dev:full": "concurrently \"npm run dev\" \"cd server && npm start\""
}
```

And run:
```
npm run dev:full
```

## Accessing the Application

- Frontend: http://localhost:5173 (or the port shown in your terminal)
- Backend API: http://localhost:5000

## Testing the Contact Form

1. Make sure both frontend and backend are running
2. Fill out the contact form on your portfolio site
3. Submit the form
4. Check your email to verify that you received the message

## Deployment Considerations

When deploying your application:

1. Deploy the frontend and backend separately
2. Update the `.env` file in the frontend with your deployed backend URL
3. Configure environment variables on your hosting platform for the backend email settings

## Troubleshooting

If the contact form isn't working:

1. Check that both frontend and backend servers are running
2. Verify that the backend URL in the frontend's `.env` file is correct
3. Check the browser console for any errors
4. Check the server terminal for any error messages
5. Verify your email credentials in the server's `.env` file