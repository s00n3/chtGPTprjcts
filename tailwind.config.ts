import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          primary: '#323FA6',
          deep: '#21108E',
          dark: '#0E4D99',
          light: '#7A85DE',
          hover: '#5D6FFF',
          active: '#0E4E99'
        },
        surface: {
          base: '#FFFFFF',
          section: '#CDD8FF',
          card: '#DDE5FF',
          accent: '#5E70FF',
          muted: '#F0F1F2'
        },
        border: {
          soft: 'rgba(14,77,153,0.16)',
          subtle: 'rgba(0,0,0,0.08)'
        },
        text: {
          base: '#000000',
          body: '#222222'
        }
      },
      boxShadow: {
        soft: '0 8px 24px rgba(14, 77, 153, 0.08)'
      },
      borderRadius: {
        ui: '14px'
      },
      maxWidth: {
        container: '1240px'
      }
    }
  },
  plugins: []
};

export default config;
