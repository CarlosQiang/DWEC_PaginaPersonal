/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        'primary': '#3498db',
        'danger': '#e74c3c',
        'warning': '#f1c40f',
       'success': '#2ecc71',
      }
    },
  },
  plugins: [],
}

