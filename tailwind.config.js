/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      gridTemplateColumns: {
        footer: "400px auto auto auto auto",
        footerlg: "auto auto auto",
      },
      colors: {
        primary: "#F76E11",
        secondary: "#FFF2E5",
        button: "#FC4F4F",
        hitam: "#1B1919",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(50px)" },
          "50%": { transform: "translateX(0px)" },
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
        header: {
          "0%": { transform: "translateX(-500px)" },
          "100%": { transform: "translateX(0px)" },
        },
        nav: {
          "0%": { transform: "translateY(-100px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        header: "header 1s ease 1",
        nav: "nav 1s ease 1",
        opacity: "opacity 1s ease 1",
        "bounce-prakerja": "bounce 1.5s linear infinite",
        "bounce-tokopedia": "bounce 1.7s linear infinite",
        "bounce-gojek": "bounce 1.3s linear infinite",
        "bounce-shopee": "bounce 1.9s linear infinite",
      },
    },
  },
  plugins: [],
};
