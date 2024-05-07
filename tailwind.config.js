/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f1fcf3',
          '100': '#dff9e6',
          '200': '#c0f2ce',
          '300': '#9feab5',
          '400': '#56d27a',
          '500': '#2fb859',
          '600': '#229745',
          '700': '#1e7739',
          '800': '#1c5f31',
          '900': '#194e2a',
          '950': '#082b15',
        },
        'secondary': {
          '50': '#f6f8f9',
          '100': '#ecf0f2',
          '200': '#d6dee1',
          '300': '#bac9ce',
          '400': '#87a1a9',
          '500': '#68868f',
          '600': '#536d76',
          '700': '#445860',
          '800': '#3b4b51',
          '900': '#344046',
          '950': '#232b2e',
        },
      }
    },
  },
  plugins: [],
}

