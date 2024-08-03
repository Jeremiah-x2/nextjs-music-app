import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#57B660",
        white: "#D9D9D9",
        black: "#181414",
        "mellow-yellow": "#F6C874",
        "red-wine": "#EB5640",
        "blue-monday": "#649AED",
        "pink-moon": "#E57BA1",
        evergreen: "#D5F479",
        "yellow-submarine": "#F4E357",
        "pretty-in-pink": "#F7CFD4",
        sidefill: "#090707",
        "text-white": "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
