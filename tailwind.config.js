/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0B12',
          card: '#130F26',
          glass: '#16152B',
        },
        purple: {
          brand: '#7E22CE',
          electric: '#5B13B9',
          deep: '#4A0082',
          glow: 'rgba(126, 34, 206, 0.4)',
        },
        gold: {
          brand: '#D4AF37',
          amber: '#B8860B',
          champagne: '#E5B842',
          honey: '#F59E0B',
          glow: 'rgba(212, 175, 55, 0.4)',
        },
        slate: {
          muted: '#94A3B8',
          light: '#CBD5E1',
          dark: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'purple-gold-gradient': 'linear-gradient(135deg, #7E22CE 0%, #D4AF37 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D4AF37 50%, #B8860B 100%)',
        'purple-gradient': 'linear-gradient(135deg, #7E22CE 0%, #5B13B9 50%, #4A0082 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'border-purple-gold': 'linear-gradient(135deg, rgba(126, 34, 206, 0.4), rgba(212, 175, 55, 0.4))',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.4)',
        'purple-glow': '0 0 25px -5px rgba(126, 34, 206, 0.4)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
