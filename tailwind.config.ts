import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F8FAFC",
          ink: "#0F172A",
          primary: "#111827",
          accent: "#22C55E",
        },
      },
    },
  },
  plugins: [],
};

export default config;
