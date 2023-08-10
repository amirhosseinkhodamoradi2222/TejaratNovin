/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Hireline: ["Hireline", "sans-serif"],
      Thin: ["Thin", "sans-serif"],
      uktralight: ["uktralight", "sans-serif"],
      light: ["light", "sans-serif"],
      Regular: ["Regular", "sans-serif"],
      Medium: ["Medium", "sans-serif"],
      demiBold: ["demiBold", "sans-serif"],
      bold: ["bold", "sans-serif"],
      ExtraBold: ["ExtraBold", "sans-serif"],
      Black: ["Black", "sans-serif"],
      ExBlack: ["ExBlack", "sans-serif"],
      Heavy: ["Heavy", "sans-serif"],
      Fat: ["Fat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  direction: {
    rtl: "rtl",
  },
  plugins: [],
};
