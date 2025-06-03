# Hemanth's Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Node.js.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Interactive UI components
- Contact form with email functionality
- Project showcase
- Skills and experience sections

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Vite
- React Icons
- Lottie Animations

### Backend
- Node.js
- Express
- Nodemailer

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/HemanthS3/Hemanth-Portfolio.git
   cd Hemanth-Portfolio
   ```

2. Install frontend dependencies:
   ```
   npm install
   ```

3. Install backend dependencies:
   ```
   cd server
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the root directory for frontend configuration
   - Create a `.env` file in the server directory for backend configuration
   - Use the `.env.example` files as templates

## Running the Application

### Development Mode

1. Start the backend server:
   ```
   cd server
   npm start
   ```

2. In a new terminal, start the frontend development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5173)

### Production Build

1. Build the frontend:
   ```
   npm run build
   ```

2. The build files will be in the `dist` directory and can be served by any static file server

## Contact Form Setup

The contact form requires a running backend server to send emails. See the `FULL_STACK_SETUP.md` file for detailed instructions on setting up the contact form functionality.

## License

[MIT](LICENSE)

## Author

Hemanth S - [GitHub](https://github.com/HemanthS3) | [LinkedIn](https://www.linkedin.com/in/hemanth-s-b8233624a/)