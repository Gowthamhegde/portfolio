/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{rs,tsx,ts}", "./legacy-react/**/*.{tsx,ts}"],
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
        // Design system tokens
        "text-primary": "#ffffff",
        "text-secondary": "#cccccc",
        "accent-blue": "#3b82f6",
        success: "#10b981",
        error: "#ef4444",
      },
      spacing: {
        // Custom section spacing scale (2xl through 5xl)
        '2xl': '3rem',     // 48px - Between related elements within sections
        '3xl': '4rem',     // 64px
        '4xl': '6rem',     // 96px - Between major sections
        '5xl': '8rem',     // 128px
      },
      fontSize: {
        // Typography scale matching design system (Major Third scale, ratio 1.5)
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px - Body
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px - Large
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px - H6
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px - H5
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px - H4
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px - H3
        '5xl': ['3rem', { lineHeight: '1.2' }],         // 48px - H2
        '6xl': ['4rem', { lineHeight: '1.2' }],         // 64px - H1
        '7xl': ['5rem', { lineHeight: '1.2' }],         // 80px - Display/Hero
      },
      lineHeight: {
        'tight': '1.2',
        'normal': '1.5',
        'relaxed': '1.75',
      },
      transitionDuration: {
        // Custom animation durations based on design requirements
        '150': '150ms',   // Hover effects (min)
        '200': '200ms',   // Navigation indicators (min)
        '300': '300ms',   // Entrance animations (min)
        '400': '400ms',   // Hover effects (max)
        '500': '500ms',   // Navigation indicators (max)
        '600': '600ms',   // Scroll transitions (max), Entrance animations
        '800': '800ms',   // Entrance animations (max)
        '1500': '1500ms', // Background movement (max)
      },
      transitionTimingFunction: {
        // Custom easing functions
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',     // Entrance animations
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // Hover effects
        'ease': 'cubic-bezier(0.4, 0, 1, 1)',         // General transitions
      },
    }
  },
  plugins: []
}
