/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#f0f4f9",
        "btn-background": "#e2e6eb",
        'card-bg': "#dfe4ea"
      },
    },
    textColor: {
      "light-gray": "#c4c7c5",
    },
  },
  plugins: [],
};
