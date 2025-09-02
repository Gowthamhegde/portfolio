/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1220",
        card: "rgba(255,255,255,0.05)",
        primary: "#3B82F6",
        accent: "#10B981",
        text: "#E5E7EB",
        subtext: "#94A3B8"
      },
      boxShadow: {
        glow: "0 0 30px rgba(59,130,246,0.25)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
}