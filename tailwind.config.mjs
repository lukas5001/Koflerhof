/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'forest': {
          50:  '#f2f7ee',
          100: '#e0edd5',
          200: '#c2dbb0',
          300: '#9ac382',
          400: '#72a855',
          500: '#528f36',
          600: '#3e7228',
          700: '#2C4A1E',
          800: '#243e19',
          900: '#1e3415',
        },
        'earth': {
          50:  '#fdf7f4',
          100: '#faeee6',
          200: '#f4d9c8',
          300: '#ebbea1',
          400: '#de9a72',
          500: '#d27a4d',
          600: '#c46038',
          700: '#6B3D2E',
          800: '#5a3226',
          900: '#4a291f',
        },
        'cream': '#F5F0E8',
        'linen': '#FAF7F2',
        'gold': '#C8A95B',
        'sage': '#8FAF7B',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Lato', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.4) 100%)',
      },
    },
  },
  plugins: [],
};
