/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zolasixx: ["zolasixx", "sans-serif"],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        apple: {
          bg: "rgb(var(--apple-bg-rgb) / <alpha-value>)",
          surface: "rgb(var(--apple-surface-rgb) / <alpha-value>)",
          surface2: "rgb(var(--apple-surface2-rgb) / <alpha-value>)",
          elev: "rgb(var(--apple-elev-rgb) / <alpha-value>)",
          text: "rgb(var(--apple-text-rgb) / <alpha-value>)",
          dim: "rgb(var(--apple-dim-rgb) / <alpha-value>)",
          blue: "rgb(var(--apple-blue-rgb) / <alpha-value>)",
          "blue-hover": "rgb(var(--apple-blue-hover-rgb) / <alpha-value>)",
          line: "var(--apple-line)",
          "line-strong": "var(--apple-line-strong)",
          "tint-a": "var(--apple-tint-a)",
          "tint-b": "var(--apple-tint-b)",
        },
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
