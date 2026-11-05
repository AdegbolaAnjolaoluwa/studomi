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
        paper: "#F4F1EA",
        bg: "#F4F1EA",
        ink: "#10231C",
        "ink-soft": "#4B5A53",
        accent: "#22C55E",
        "accent-ink": "#0B2E1C",
        panel: "#0C2A20",
        line: "rgba(16,35,28,0.1)",
        card: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      backgroundImage: {
        dots: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "22px 22px",
      },
    },
  },
  plugins: [],
};
export default config;
