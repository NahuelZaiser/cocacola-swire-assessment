/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coca: {
          red: '#E61B2B',
          'red-dark': '#B80D1A',
          'red-soft': '#FEE2E5',
          'red-bg': '#FEF2F2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.03)',
        'card-hover': '0 1px 3px rgba(0,0,0,0.05), 0 20px 25px -5px rgba(0,0,0,0.06)',
        coca: '0 10px 20px rgba(230,27,43,0.18)',
      },
    },
  },
  plugins: [],
};
