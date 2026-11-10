import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#FFFFFF', secondary: '#F3F9EE' },
        forest: { DEFAULT: '#16852B', ink: '#18351F', light: '#647568', navy: '#8ED34F' },
        brand: { DEFAULT: '#16852B', black: '#18351F', hover: '#0B6B22', soft: '#F3F9EE', navy: '#8ED34F', text: '#18351F', secondaryText: '#647568', border: '#E1E5E8' },
        lime: '#FFFFFF', greenAccent: '#16852B', orangeAccent: '#0B6B22', gold: '#0B6B22', mist: '#E1E5E8', softBlue: '#F3F9EE', redAccent: '#8ED34F', royalBlueAccent: '#0B6B22', silverAccent: '#D5E8CC', metallicGrey: '#8ED34F', deepSection: '#18351F',
        navy: { DEFAULT: '#8ED34F', dark: '#18351F' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '13': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        '15': ['0.9375rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '17': ['1.0625rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        '21': ['1.3125rem', { lineHeight: '1.35', letterSpacing: '-0.015em' }],
        '26': ['1.625rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '33': ['2.0625rem', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
        '41': ['2.5625rem', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        '52': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        '65': ['4.0625rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '81': ['5.0625rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        site: '1360px',
      },
      borderRadius: {
        none: '0px',
        input: '8px',
        pill: '9999px',
      },
      spacing: {
        'section-sm': 'clamp(64px, 8vh, 96px)',
        'section': 'clamp(96px, 12vh, 180px)',
      },
      transitionTimingFunction: {
        'nova-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;


