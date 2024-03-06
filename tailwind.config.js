/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          "0%": { transform: "translateY(150%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        reveal: "reveal 0.4s ease",
      },
    },
  },
  plugins: [],
};

