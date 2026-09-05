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
          DEFAULT: '#050505',
          dark: '#08070A',
          card: '#0D0C12',
          border: 'rgba(215, 166, 42, 0.28)',
          'border-strong': 'rgba(215, 166, 42, 0.45)',
        },
        purple: {
          brand: '#7B00FF',
          electric: '#7B00FF',
          violet: '#A100FF',
          deep: '#4A0082',
          glow: 'rgba(123, 0, 255, 0.35)',
        },
        gold: {
          brand: '#D7A62A',
          warm: '#E5B93F',
          amber: '#B8860B',
          glow: 'rgba(215, 166, 42, 0.35)',
        },
        offwhite: '#F4F0E8',
        mutedwhite: '#B8B3AE',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Cormorant Garamond', 'Cinzel', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'purple-gold-gradient': 'linear-gradient(135deg, #7B00FF 0%, #A100FF 40%, #E5B93F 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E5B93F 0%, #D7A62A 60%, #B8860B 100%)',
        'purple-gradient': 'linear-gradient(135deg, #7B00FF 0%, #A100FF 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(13, 12, 18, 0.95) 0%, rgba(8, 7, 10, 0.98) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(215, 166, 42, 0.35)',
        'purple-glow': '0 0 25px -5px rgba(123, 0, 255, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
