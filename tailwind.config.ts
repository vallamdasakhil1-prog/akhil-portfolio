import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F4ED",
        tint: "#EFEAE0",
        ink: "#252525",
        muted: "#5E5A52",
        rule: "#DDD6C8",
        accent: "#2B4A73",
        accenthover: "#1B3354",
      },
      fontFamily: {
        display: ['"Fraunces Variable"', "Georgia", "Cambria", "serif"],
        sans: ['"Instrument Sans Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "80rem" },
      boxShadow: { card: "0 1px 2px rgba(37,37,37,0.04), 0 8px 24px -12px rgba(37,37,37,0.10)" },
    },
  },
  plugins: [],
};
export default config;
