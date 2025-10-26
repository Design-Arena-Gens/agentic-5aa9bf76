import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fefbf7",
          100: "#f9efe2",
          200: "#f1dabc",
          300: "#e9c596",
          400: "#d8a35d",
          500: "#b7813c",
          600: "#946232",
          700: "#704629",
          800: "#50321f",
          900: "#311f15"
        },
        ebony: "#1a1a1a"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-cormorant)", "serif"]
      },
      boxShadow: {
        glow: "0 24px 60px -20px rgba(215, 163, 93, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
