/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        greenGradient: "linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        green: "#30C88F",
        blue: "#2D314D",
        gray: "#9597A5",
        whiteSmoke: "#f2F2F2",
      },
      fontSize: {
        small: "10px",
        regular: "13px",
        titleArticle: "16px",
      },
    },
  },
  plugins: [],
};
