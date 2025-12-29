/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
  "./App.{js,jsx,ts,tsx}", 
  "./app/**/*.{js,jsx,ts,tsx}", // Add this if using Expo Router
  "./src/**/*.{js,jsx,ts,tsx}", // Add this if you have a src folder
  "./components/**/*.{js,jsx,ts,tsx}"
],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}