/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: "#060b14",
        card: "rgba(10, 18, 35, 0.8)",
        aws: "#ff9900",
        k8s: "#326ce5",
        terminal: "#00d084",
        subtext: "#64748b",
        border: "rgba(255, 255, 255, 0.06)",
      },
    }
  },
  plugins: []
}
