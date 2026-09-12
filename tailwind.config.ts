import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#162751', deep: '#0F1B3A', mid: '#23396F', light: '#33497F', soft: '#2F3D5E' },
        gold: { DEFAULT: '#C09220', deep: '#8A6816', soft: '#EADFB5', pale: '#F7F1DC' },
        cream: '#F5F2EC',
        charcoal: '#2A2A2A',
        ink: '#1F2937',
        cross: '#D41C22',
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
        'navy-gradient': 'linear-gradient(160deg, #162751 0%, #23396F 55%, #33497F 100%)',
        'hero-veil': 'linear-gradient(180deg, rgba(22,39,81,0.72) 0%, rgba(22,39,81,0.62) 45%, rgba(22,39,81,0.78) 75%, rgba(22,39,81,0.95) 100%)',
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
