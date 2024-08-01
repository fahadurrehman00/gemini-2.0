/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        white: "#FFFFFF",
        background: "#F0F4F9",
        buttonBg: "#E5EAF1",
        hoverBg: "#DDE3EA",
        black: "#131314",
        darkBackground: "#1E1F20",
        darkHoverBg: "#333537",
      },
    },
    textColor: {
      white: "#ffffff",
      lightGray: "#c4c7c5",
      darkGray: "#444746",
      darkTextColor: "#666667",
      grayText: "#5F6368",
      grayColor: "#9A9DA1",
      yellow: "#FFD600",
      blue: "#2167FE"
    },
  },
  plugins: [],
};
