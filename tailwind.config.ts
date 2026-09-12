import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1B2A4A', deep: '#12203A', soft: '#33405A' },
        gold: { DEFAULT: '#C9A227', deep: '#8F7115', soft: '#EBDFB3', pale: '#F7F1DC' },
        cream: '#F5F2EC',
        charcoal: '#2A2A2A',
        ink: '#1F2937',
        // WhatsApp brand greens: the darker one keeps white text readable.
        wa: { DEFAULT: '#0E6F64', bright: '#25D366', deep: '#0A5C53' },
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-body)', 'Arial', 'Helvetica', 'sans-serif'],
      },
      maxWidth: { site: '72rem' },
    },
  },
  plugins: [],
};
export default config;
