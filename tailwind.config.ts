/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
  colors: {
    current: "currentColor",
    transparent: "transparent",
    white: "#FFFFFF",
    black: "#1E2D2F", // Updated for deeper text black
    dark: "#1D2430",  // Keep as is for dark backgrounds

    // 💧 Reedy River Inspired Theme
    primary: "#2A6F74", // Deep Teal (main brand)
    secondary: "#4A4E52", // Clay Gray
    accent: "#A3B18A", // Moss Green
    rust: "#DA6A00", // Optional earth accent
    sky: "#82B4B9", // Optional blueprint accent

    // ✅ Text and background support
    "body-color": "#47585E",
    "body-color-dark": "#8A939B",
    "gray-dark": "#2F363D",
    "gray-light": "#F2F4F3",
    stroke: "#D9E0E3",
    "stroke-dark": "#35414B",
    "bg-color-dark": "#171C28",
  },

  boxShadow: {
    signUp: "0px 5px 10px rgba(10, 20, 30, 0.15)",
    one: "0px 2px 3px rgba(42, 111, 116, 0.1)", // primary shadow
    two: "0px 5px 10px rgba(42, 111, 116, 0.12)",
    three: "0px 5px 15px rgba(42, 111, 116, 0.05)",
    sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.06)",
    "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.08)",
    "feature-2": "0px 10px 40px rgba(42, 111, 116, 0.15)",

    submit: "0px 5px 20px rgba(42, 111, 116, 0.12)",
    "submit-dark": "0px 5px 20px rgba(42, 111, 116, 0.08)",

    btn: "0px 1px 2px rgba(42, 111, 116, 0.1)",
    "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
    "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.08)",
  },

  dropShadow: {
    three: "0px 5px 15px rgba(42, 111, 116, 0.06)",
  },
  fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
},
  },
  plugins: [],
};




// extend: {
//       colors: {
//         current: "currentColor",
//         transparent: "transparent",
//         white: "#FFFFFF",
//         black: "#121723",
//         dark: "#1D2430",
//         primary: "#4A6CF7",
//         yellow: "#FBB040",
//         "body-color": "#788293",
//         "body-color-dark": "#959CB1",
//         "gray-dark": "#1E232E",
//         "gray-light": "#F0F2F9",
//         stroke: "#E3E8EF",
//         "stroke-dark": "#353943",
//         "bg-color-dark": "#171C28",
//       },

//       boxShadow: {
//         signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
//         one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
//         two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
//         three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
//         sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
//         "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
//         "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
//         submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
//         "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
//         btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
//         "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
//         "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
//       },
//       dropShadow: {
//         three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
//       },