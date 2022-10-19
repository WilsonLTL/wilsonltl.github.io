/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  mode: 'jit',
  important: true,
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    }
  },
  plugins: [],
}
