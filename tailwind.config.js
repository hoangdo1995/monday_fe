/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dashboard-header-pattern': "url('/images/svg_images/background_pattern.svg')",
      }
    },
  },
  plugins: [],
};
