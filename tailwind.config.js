/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 15s linear infinite',
        'fade-in': 'fade-in-up 0.6s ease-out forwards',
        'title-slide-up': 'title-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shine': 'shine 1.5s linear infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'scroll': 'scroll 1.5s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};