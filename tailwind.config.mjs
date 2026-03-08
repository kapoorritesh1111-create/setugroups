/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A0F1F',
        electric: '#3A7BFF',
        soft: '#F5F7FA'
      },
      boxShadow: {
        soft: '0 10px 40px rgba(10, 15, 31, 0.08)'
      },
      backgroundImage: {
        'setu-gradient': 'linear-gradient(135deg, #3A7BFF 0%, #7C3AED 100%)'
      }
    },
  },
  plugins: [],
};
