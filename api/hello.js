// Simple API endpoint for testing Vercel serverless functions
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the API!' });
}