/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F1F',
        electric: '#3A7BFF',
        soft: '#F5F7FA',
        violet: '#7A5CFF',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(10, 15, 31, 0.08)',
      },
      backgroundImage: {
        'setu-gradient': 'linear-gradient(135deg, #3A7BFF 0%, #7A5CFF 100%)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};
