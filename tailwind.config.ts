import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0B1A",
        surface: "#171325",
        surface2: "#1F1A33",
        line: "rgba(245,241,255,0.09)",
        muted: "#A99FC2",
        violet: "#7C3AED",
        magenta: "#EC4899",
        orange: "#F97316",
        cyan: "#22D3EE",
        teal: "#2DD4BF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
