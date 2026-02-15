import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- A MÁGICA ESTÁ AQUI! Isso diz ao Tailwind para obedecer o botão.
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A", 
        foreground: "#F8FAFC",
        primary: {
          DEFAULT: "#F97316",
          hover: "#EA580C",
        },
      },
    },
  },
  plugins: [],
};
export default config;