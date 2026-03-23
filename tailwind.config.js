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
          bg: '#0B0F14',
          'bg-secondary': '#111827',
          blue: '#1C6ED5',
          teal: '#1CC5B8',
          heading: '#FFFFFF',
          body: '#BFC7D5',
          muted: '#7A8599',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1C6ED5 0%, #1CC5B8 100%)',
        'gradient-brand-r': 'linear-gradient(to right, #1C6ED5, #1CC5B8)',
      },
    },
  },
  plugins: [],
}
