import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        navy: {
          950: "#000814",
          900: "#001D3D",
          800: "#003566",
        },
        gold: {
          400: "#FFC300",
          300: "#FFD60A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(0, 53, 102, 0.18)",
        glow: "0 0 0 1px rgba(255, 195, 0, 0.18), 0 12px 48px -8px rgba(255, 195, 0, 0.20)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(0,53,102,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,53,102,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,214,10,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,214,10,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
