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
        // Wamiti Foundation palette
        primary: {
          DEFAULT: "#7C9E7E", // Soft sage green
          light: "#A8C5AA",
          dark: "#5A7A5C",
        },
        amber: {
          wamiti: "#D4913A", // Warm amber CTA
          light: "#E8B06A",
          dark: "#B5742A",
        },
        forest: {
          DEFAULT: "#2D4A2D", // Deep forest headings
          light: "#3D6B3D",
        },
        cream: {
          DEFAULT: "#F5F0E8", // Section backgrounds
          dark: "#EDE6D6",
        },
        warm: {
          white: "#FAFAF8", // Main background
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-peaceful":
          "linear-gradient(135deg, #F5F0E8 0%, #FAFAF8 50%, #E8F0E8 100%)",
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
