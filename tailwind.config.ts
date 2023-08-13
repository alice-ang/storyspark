import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          page: "#fefcef",
          pink: "#fef4f0",
          green: "#30b591",
          yellow: "#e5df81",
          red: "#f8795b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
