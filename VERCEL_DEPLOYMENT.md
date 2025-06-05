# Vercel Deployment Guide

This guide explains how to deploy your portfolio with the contact form backend on Vercel.

## What I've Added

1. **vercel.json** - Configuration file that tells Vercel how to build and route both your frontend and backend
2. **Updated API configuration** - Modified to use relative URLs in production

## Deployment Steps

### 1. Push the Latest Changes to GitHub

Make sure all the latest changes are pushed to your GitHub repository:

```
git add .
git commit -m "Add Vercel deployment configuration"
git push
```

### 2. Set Up Environment Variables on Vercel

You need to add your email configuration as environment variables in Vercel:

1. Go to your project on the Vercel dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables"
4. Add the following variables:
   - `EMAIL_SERVICE`: gmail
   - `EMAIL_USER`: your-email@gmail.com
   - `EMAIL_PASS`: your-app-password
   - `EMAIL_RECIPIENT`: your-email@gmail.com

### 3. Redeploy Your Project

1. Go to your project on the Vercel dashboard
2. Click on "Deployments" tab
3. Click on "Redeploy" for the latest deployment

## Testing Your Deployed Contact Form

After deployment:

1. Visit your Vercel-deployed site
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email to verify that you received the message

## Troubleshooting

If your contact form isn't working in production:

1. Check the browser console for any errors
2. Verify that your environment variables are set correctly in Vercel
3. Check the Vercel deployment logs for any backend errors

## Important Notes

1. **Email Security**: Vercel securely handles your environment variables, but never commit your email password to GitHub.

2. **Serverless Functions**: On Vercel, your backend runs as serverless functions, which may have cold starts. The first form submission might take slightly longer.

3. **Usage Limits**: Be aware of Vercel's free tier limits for serverless functions.

4. **Alternative Backend Hosting**: If you prefer, you can host your backend separately on platforms like Heroku, Railway, or Render, and update the `VITE_API_URL` in your frontend to point to that backend.