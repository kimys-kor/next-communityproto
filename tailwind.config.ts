import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      height: {
        "calc-100": "calc(100vh - 4rem)",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        // blue: "#1fb6ff",
        // pink: "#ff49db",
        // orange: "#ff7849",
        // green: "#13ce66",
        // yellow: "#ffc82c",
        // "gray-dark": "#273444",
        // gray: "#8492a6",
        // "gray-light": "#d3dce6",
        footer: "#F7F9FA",
        "gradient-start": "#00daef",
        "gradient-end": "#bc67ff",
      },
      animation: {
        moveGrad: "MoveGrad 5s ease infinite",
      },
      keyframes: {
        MoveGrad: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
export default config;
