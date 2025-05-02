/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          // University of Minnesota colors
          'umn-maroon': '#7A0019',
          'umn-gold': '#FFCC33',
          'umn-light-maroon': '#900021',
          'umn-light-gold': '#FFDE7A',
          'umn-off-white': '#F9F7F6',
          'umn-dark-gray': '#333333',
          'umn-medium-gray': '#777677',
          'umn-light-gray': '#D5D6D2',
          'umn-lighter-gray': '#F0EFEE',
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease forwards',
          'slide-up': 'slideUp 0.8s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(30px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }
  