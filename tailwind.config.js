
/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
  daisyui: {
    themes: ["light", "dark"]
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage : {
      'login-bg' : 'url("src/assets/slider/slide 2.png")'
    },
    fontFamily : {
      'exo-2' : ['"Exo 2", sans-serif'],
    }
  },
  plugins: [
    require('daisyui'),
  ]
}

