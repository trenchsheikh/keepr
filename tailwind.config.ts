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
        'keepr-dark-green': '#1a4d2e',
        'keepr-lime-green': '#84cc16',
        'keepr-light-beige': '#f5f5dc',
        'keepr-gold': '#fbbf24',
      },
      fontFamily: {
        'stadio': ['Stadio Now Display', 'sans-serif'],
        'handmade': ['HandMade', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
