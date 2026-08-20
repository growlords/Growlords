import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        secondary: '#0A0A0C',
        surface: '#111114',
        'surface-border': 'rgba(255, 255, 255, 0.08)',
        'surface-border-hover': 'rgba(183, 255, 60, 0.25)',
        lime: {
          DEFAULT: '#B7FF3C',
          light: '#D7FF7A',
          dark: '#96db1f',
        },
        body: 'rgba(255, 255, 255, 0.65)',
        muted: 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
