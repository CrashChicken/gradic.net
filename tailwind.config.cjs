/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(40px)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.2s ease-out",
        "fade-out-down": "fade-out-down 0.2s ease-in",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
