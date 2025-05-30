/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeIn: 'fadeIn 1.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      safelist: [
        'text-blue-500',
        'text-cyan-400',
        'text-green-500',
        'text-purple-500',
        'text-yellow-500',
        'text-red-500',
        'bg-blue-500',
        'bg-cyan-400',
        'bg-green-500',
        'bg-purple-500',
        'bg-yellow-500',
        'bg-red-500',
      ],
    },
  },
  plugins: [],
}