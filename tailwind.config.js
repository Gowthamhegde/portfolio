/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        comic: ['Bangers', 'cursive'],
      },
      colors: {
        bg: "#0d0d0d",
        card: "#1a1a1a",
        yellow: "#f5c518",
        "yellow-dark": "#e6b800",
        aws: "#f5c518",
        k8s: "#f5c518",
        terminal: "#f5c518",
        subtext: "#888888",
        border: "#2a2a2a",
      },
    }
  },
  plugins: []
}
