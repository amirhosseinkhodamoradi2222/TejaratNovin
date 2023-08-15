/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '4rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '9rem',
      },
    },
    colors: {
      primaryColor: "#ddaf27",
      secondaryColor1: "#320033",
      secondaryColor2: "#1D2241",
      secondaryColor3: "#FEBF1A",
      green: "#33cc66",
      whate: "#ffffff",
      yelloe: "#f2bf32",
      backgroundColor: "#f2f3f5",
      gray: '#8395a7',
      purple : '#5246a0'
    },
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
