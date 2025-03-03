/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8",  // Example blue color
          secondary: "#9333EA", // Example purple color
        },
        fontFamily:{
          poppins: ['var(--font-poppins)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  