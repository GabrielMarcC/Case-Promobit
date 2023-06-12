/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smp: { min: "500px", max: "640px" },
        lgp: { min: "1220px" },
      },
    },
  },
  plugins: [],
};
