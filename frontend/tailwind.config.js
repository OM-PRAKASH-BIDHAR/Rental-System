// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all relevant files in the src folder
  ],
  theme: {
    extend: {
      // You can add your custom theme configurations here
      // For example:
      // colors: {
      //   'primary': '#1DA1F2',
      // },
    },
  },
  plugins: [
    // You can add Tailwind plugins here if you need them
  ],
}