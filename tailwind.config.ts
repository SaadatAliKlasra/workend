import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "chestnut": {
        extend: "light", // <- inherit default values from dark theme
        colors: {
          background: "#ffffff",
          foreground: "#0D001A",
          primary: {
            50: '#fcf6f4',
            100: '#faeae9',
            200: '#f4dad7',
            300: '#ebbbb6',
            400: '#e0918c',
            500: '#d06663',
            600: '#bc4749',
            700: '#9c3438',
            800: '#832e34',
            900: '#712a32',
            DEFAULT: "#d06663",
            foreground: "#ffffff",
          },
          focus: "#9c3438",
        },
        // layout: {
        //   disabledOpacity: "0.3",
        //   radius: {
        //     small: "4px",
        //     medium: "6px",
        //     large: "8px",
        //   },
        //   borderWidth: {
        //     small: "1px",
        //     medium: "2px",
        //     large: "3px",
        //   },
        // },
      },
    },
  }),]
};
export default config;
