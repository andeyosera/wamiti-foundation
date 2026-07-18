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
        primary: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
          dark: "#1D4ED8",
        },
        purple: {
          wamiti: "#7C3AED",
          light: "#A78BFA",
          dark: "#5B21B6",
        },
        navy: {
          DEFAULT: "#1E1B4B",
          light: "#312E81",
        },
        lavender: {
          DEFAULT: "#EEF2FF",
          dark: "#E0E7FF",
        },
        sky: {
          wamiti: "#DBEAFE",
          dark: "#BFDBFE",
        },
        gold: {
          DEFAULT: "#F59E0B",
          light: "#FCD34D",
          dark: "#D97706",
        },
        warm: {
          white: "#FFFFFF",
        },
      },
      fontFamily: {
  display: ["var(--font-playfair)", "Georgia", "serif"],
  body: ["var(--font-inter)", "system-ui", "sans-serif"],
},
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #1E1B4B 0%, #2563EB 50%, #7C3AED 100%)",
        "gradient-section":
          "linear-gradient(135deg, #EEF2FF 0%, #DBEAFE 100%)",
        "gradient-card":
          "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;