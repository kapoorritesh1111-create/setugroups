'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle({ label = 'Theme' }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  return (
    <button className="btn btnSecondary" onClick={toggle} aria-label={label} type="button">
      {theme === 'light' ? '☀️' : '🌙'} {label}
    </button>
  );
}
