import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1B2A4A', deep: '#12203A', mid: '#2C3F6B', light: '#3B4F7D', soft: '#33405A' },
        gold: { DEFAULT: '#C9A227', deep: '#8F7115', soft: '#EBDFB3', pale: '#F7F1DC' },
        cream: '#F5F2EC',
        charcoal: '#2A2A2A',
        ink: '#1F2937',
        cross: '#D42B2B',
        // WhatsApp brand greens: the darker one keeps white text readable.
        wa: { DEFAULT: '#0E6F64', bright: '#25D366', deep: '#0A5C53' },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Arial', 'Helvetica', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
      },
      borderRadius: {
        card: '1.75rem',
        'card-lg': '2.25rem',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(160deg, #1B2A4A 0%, #2C3F6B 55%, #3B4F7D 100%)',
        'hero-veil': 'linear-gradient(180deg, rgba(27,42,74,0.6) 0%, rgba(27,42,74,0.42) 40%, rgba(27,42,74,0.55) 70%, rgba(27,42,74,0.9) 100%)',
      },
      maxWidth: { site: '76rem' },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
