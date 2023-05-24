/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    screens: {
      'min_phone': '320px',
      // => @media (min-width: 640px) { ... }
      'max_phone': '640px',
      // => @media (min-width: 768px) { ... }
      'pad': '768px',
      // => @media (min-width: 1024px) { ... }
      'min_pc': '1024px',
      // => @media (min-width: 1024px) { ... }

      'md_pc': '1280px',
      // => @media (min-width: 1280px) { ... }

      'lg_pc': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      light_bgc: '#F5F5F5',
      dark_bgc: '#1F1F1F',
      light_text: '#FFFFFF',
      dark_text: '#000000',
    },
  },
  plugins: [],
}