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
        soft: '#F5F7FA',
        violet: '#6C63FF',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Satoshi', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(58,123,255,0.14), transparent 34%), linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%)',
        'brand-gradient': 'linear-gradient(135deg, #3A7BFF 0%, #6C63FF 100%)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(10, 15, 31, 0.08)',
        card: '0 18px 48px rgba(10, 15, 31, 0.08)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
