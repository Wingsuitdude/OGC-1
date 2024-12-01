/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#60a5fa',
          dark: '#3b82f6',
        },
        dark: {
          DEFAULT: '#18181b',
          light: '#27272a',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            opacity: 0.3,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.5,
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  plugins: [],
};