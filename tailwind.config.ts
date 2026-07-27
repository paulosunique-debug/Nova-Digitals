import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — Nova Digitals
        base: {
          950: "#08090A", // page background
          900: "#0D0F10", // section background (slightly lifted)
          800: "#141618", // card background
          700: "#1C1F21", // card border / hover surface
        },
        lime: {
          400: "#B6FF3C", // primary accent — signature neon
          500: "#9FE62E",
          600: "#7FBF1E",
          glow: "#B6FF3C",
        },
        ink: {
          100: "#F5F6F5", // primary text
          300: "#C7CBC8", // secondary text
          500: "#8A908C", // muted text
          700: "#4C514E", // faint text / dividers
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(182, 255, 60, 0.35)",
        "glow-sm": "0 0 24px -4px rgba(182, 255, 60, 0.45)",
        card: "0 4px 24px -8px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(182,255,60,0.12), transparent)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
