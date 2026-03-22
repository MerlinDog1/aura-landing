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
        obsidian: {
          950: "#030303",
          900: "#0a0a0a",
          800: "#121212",
          700: "#1a1a1a",
          600: "#262626",
        },
        lime: {
          glow: "#b8ff57",
          "glow-dim": "rgba(184, 255, 87, 0.15)",
          "glow-mid": "rgba(184, 255, 87, 0.4)",
        },
        surface: {
          glass: "rgba(255, 255, 255, 0.03)",
          "glass-border": "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        widestHero: "0.35em",
      },
      animation: {
        "breathe-glow": "breathe-glow 4s ease-in-out infinite",
        "pulse-stream": "pulse-stream 2s ease-in-out infinite",
      },
      keyframes: {
        "breathe-glow": {
          "0%, 100%": {
            boxShadow: "0 0 30px rgba(184, 255, 87, 0.2), 0 0 60px rgba(184, 255, 87, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 50px rgba(184, 255, 87, 0.35), 0 0 100px rgba(184, 255, 87, 0.15)",
          },
        },
        "pulse-stream": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 50% 0%, rgba(184, 255, 87, 0.08) 0%, transparent 50%), radial-gradient(at 80% 50%, rgba(184, 255, 87, 0.04) 0%, transparent 40%), radial-gradient(at 20% 80%, rgba(184, 255, 87, 0.03) 0%, transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
