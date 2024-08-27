/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColour: "#dbd5cd",
        accent: "#c5beb5",
        placeholder: "#f0f0f0",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".placeholder-color": {
          "::placeholder": {
            color: "#ffffff",
          },
        },
      });
    },
  ],
};
