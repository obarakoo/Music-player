/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0f',
        surface: '#12121e',
        'surface-light': '#1e1e2d',
        primary: '#7c3aed',
        secondary: '#f43f5e',
        accent: '#06b6d4',
        glass: 'rgba(255, 255, 255, 0.05)',
        'glass-highlight': 'rgba(255, 255, 255, 0.1)',
        black: '#191624',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.5)',
        glow: '0 0 20px rgba(124, 58, 237, 0.3)',
      },
      backdropBlur: {
        glass: '16px',
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .7 },
        },
      },
    },
  },
};
