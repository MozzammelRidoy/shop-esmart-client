/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  daisyui: {
    themes: ["light", "dark"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60a5fa',
          600: '#3b82f6',
        },
        
      },
    },
    backgroundImage: {
      'login-bg': 'url("src/assets/login/login.jpg")',
      'signup-bg': 'url("src/assets/login/login2.jpg")',
    },
    fontFamily: {
      'exo-2': ['"Exo 2", sans-serif'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
