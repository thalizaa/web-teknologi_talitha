import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Mengaktifkan fitur Dark Mode berbasis class selector
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#60a5fa",
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
        },
        accent: "#f59e0b",
      },
    },
  },
  plugins: [],
};

export default config;