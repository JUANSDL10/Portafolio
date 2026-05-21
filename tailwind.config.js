export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 45px rgba(96, 165, 250, 0.16)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 30%), radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.18), transparent 20%)',
      },
      colors: {
        surface: '#0a1224',
        surface2: '#111827',
        accent: '#38bdf8',
        accent2: '#7c3aed',
      },
    },
  },
  plugins: [],
}
