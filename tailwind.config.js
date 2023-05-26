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
    extend: {
      colors: {
        light_bgc: '#FFFFFF',
        shallow_bgc: '#f2f3f5',
        dark_bgc: '#292d3e',
        light_text: '#292d3e',
        dark_text: '#FFFFFF',
        text_active: '#1e80ff',
        text_gray: '#515767',
        bgc_shallow_active: '#eaf2ff',
      },
    }

  },
  plugins: [],
}