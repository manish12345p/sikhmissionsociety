/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6600',
          'orange-light': '#FF8533',
          'orange-dark': '#CC5200',
          'orange-50': '#FFF3EB',
          'orange-100': '#FFD9B3',
          black: '#0A0A0A',
          'black-soft': '#111111',
          'black-card': '#1A1A1A',
          'black-border': '#2A2A2A',
          white: '#FFFFFF',
          'white-muted': '#B3B3B3',
          'white-soft': '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'orange-glow': '0 0 30px rgba(255, 102, 0, 0.3)',
        'orange-glow-sm': '0 0 15px rgba(255, 102, 0, 0.2)',
        'card-dark': '0 4px 30px rgba(0,0,0,0.5)',
        'premium': '0 10px 40px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6600 0%, #CC5200 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top left, #1A0A00 0%, #0A0A0A 60%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-orange': 'pulseOrange 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'gradient-x': 'gradient-x 3s ease infinite',
        'blob': 'blob 7s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,102,0,0)' },
          '50%': { boxShadow: '0 0 0 8px rgba(255,102,0,0.1)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        }
      },
    },
  },
  plugins: [],
}
