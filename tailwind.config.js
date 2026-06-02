export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // Base
        'dark-navy': '#0A0F1D',
        'charcoal-black': '#111827',
        // Accents
        'electric-blue': '#00C2FF',
        'neon-cyan': '#00E5FF',
        'bright-cyan': '#00D4FF',
        // Text
        'pure-white': '#FFFFFF',
        'gray-muted': '#9CA3AF',
        // Additional
        surface: '#0a0f1d',
        surface2: '#111827',
      },
      boxShadow: {
        glow: '0 0 45px rgba(0, 194, 255, 0.2)',
        'glow-sm': '0 0 20px rgba(0, 194, 255, 0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        'glass-strong': '0 8px 32px 0 rgba(31, 38, 135, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(0, 194, 255, 0.15), transparent 40%), radial-gradient(circle at 80% 20%, rgba(0, 228, 255, 0.1), transparent 30%)',
        'glass-effect': 'rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'line-draw': 'line-draw 2s ease-in-out forwards',
        'shine': 'shine 3s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 194, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 194, 255, 0.8)' },
        },
        'line-draw': {
          'from': { strokeDashoffset: '1000' },
          'to': { strokeDashoffset: '0' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}
