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
        light: {
          background: "#ffffff",
          foreground: "#171717",
        },
        dark: {
          background: "#0a0a0a",
          foreground: "#ededed",
        },
      },
    },
  },
  darkMode: "media",
  plugins: [],
};

export default config;
