/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#2947a9",
        primary: "#000000",
        "purple-bright": "#711DB0",
        "primary-bright": "#4C40F7",
        // "neutral-white": "#fff",
        // "neutral-500": "#66729",
        // secondary: "#f9995d",
        // "neutral-800": "#292e3d",
        // "neutral-600": "#525b7a",
        "border-purple-400": "#8460E8",
        "grid-border": "#BEC3E0",
      },

      boxShadow: {
        "2xl": "0px 2px 10px 0px rgba(0,0,0,0.3)",
      },
      screens: {
        md: "960px",
        lg: "1380px",
      },
    },
  },
  plugins: [],
};
