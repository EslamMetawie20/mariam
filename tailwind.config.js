/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ── Brand palette: deep navy, sea blue, sand, beige, white, soft gold ──
      colors: {
        navy: {
          DEFAULT: '#0a2540',
          deep: '#06182b',
          900: '#06182b',
          800: '#0a2540',
          700: '#103352',
        },
        sea: {
          DEFAULT: '#1d7a9c',
          light: '#3fb0c9',
          deep: '#0f5a78',
          mist: '#cfe9f1',
        },
        sand: {
          DEFAULT: '#e8d9bf',
          light: '#f6efe2',
          deep: '#d8c39c',
        },
        beige: '#f3ecdf',
        gold: {
          DEFAULT: '#c9a14a',
          light: '#e3c578',
          deep: '#a9842f',
        },
      },
      fontFamily: {
        // Elegant display serif for headings, clean sans for body
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(6, 24, 43, 0.18)',
        soft: '0 20px 60px -20px rgba(6, 24, 43, 0.35)',
        gold: '0 10px 40px -10px rgba(201, 161, 74, 0.45)',
      },
      backgroundImage: {
        'sea-sand': 'linear-gradient(160deg, #06182b 0%, #0f5a78 45%, #1d7a9c 70%, #e8d9bf 100%)',
        'navy-deep': 'linear-gradient(160deg, #06182b 0%, #0a2540 60%, #103352 100%)',
        'sand-soft': 'linear-gradient(160deg, #f6efe2 0%, #f3ecdf 50%, #e8d9bf 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
