import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        brand: {
          DEFAULT: 'var(--brand)',
          soft: 'var(--brand-soft)',
          deep: 'var(--brand-deep)',
          glow: 'var(--brand-glow)',
        },
      },
      boxShadow: {
        card: '0 20px 60px rgba(15, 23, 42, 0.08)',
        glow: '0 25px 80px rgba(59, 130, 246, 0.18)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      borderRadius: {
        xl2: '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
