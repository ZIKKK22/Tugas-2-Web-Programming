/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        medieval: {
          "primary": "#d4af37", // emas
          "secondary": "#8b5e3c", // coklat kayu
          "accent": "#f4e1c1", // krem
          "neutral": "#2e1f12", // coklat tua
          "base-100": "#1b130b", // dasar gelap
          "info": "#bca98a",
          "success": "#a1d490",
          "warning": "#f3c969",
          "error": "#b34b3a",
        },
      },
    ],
  },
}
