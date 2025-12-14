# 3D Effects Guide

Your portfolio now has interactive 3D effects! Here's what was added:

## What's New

### 1. **Animated Particle Background**
- Floating particles that rotate slowly in 3D space
- Creates depth and movement throughout the site
- Located in `src/components/ParticlesBackground.tsx`

### 2. **Interactive 3D Hero Model**
- Animated distorting sphere in the hero section
- Auto-rotates and responds to mouse interaction
- Hover to see color changes
- Located in `src/components/Hero3DModel.tsx`

### 3. **3D Floating Cards**
- Cards that tilt in 3D based on mouse position
- Already applied to your Projects section
- Located in `src/components/FloatingCard3D.tsx`

## How to Add 3D Effects to Other Components

### Add Floating 3D Effect to Any Card

Wrap any component with `FloatingCard3D`:

```tsx
import FloatingCard3D from './FloatingCard3D';

function MyComponent() {
  return (
    <FloatingCard3D>
      <div className="card">
        Your content here
      </div>
    </FloatingCard3D>
  );
}
```

### Examples for Your Other Sections

**Skills Section:**
```tsx
import FloatingCard3D from './FloatingCard3D';

// Wrap each skill card
<FloatingCard3D>
  <div className="skill-card">
    {/* skill content */}
  </div>
</FloatingCard3D>
```

**Experience/Education Cards:**
```tsx
<FloatingCard3D>
  <motion.div className="card">
    {/* experience/education content */}
  </motion.div>
</FloatingCard3D>
```

## Customization Options

### Change Particle Color
In `ParticlesBackground.tsx`, line 32:
```tsx
color="#8b5cf6"  // Change to any hex color
```

### Change 3D Model Color
In `Hero3DModel.tsx`, line 26:
```tsx
color={hovered ? "#a78bfa" : "#8b5cf6"}  // Customize colors
```

### Adjust 3D Tilt Sensitivity
In `FloatingCard3D.tsx`, lines 18-19:
```tsx
const rotateX = (y - centerY) / 10;  // Increase divisor for less tilt
const rotateY = (centerX - x) / 10;  // Decrease for more tilt
```

## Run Your Portfolio

```bash
npm run dev
```

Then open http://localhost:5173 to see your 3D portfolio!

## Performance Tips

- The 3D effects use GPU acceleration for smooth performance
- Particle count can be adjusted in `ParticlesBackground.tsx` (line 11)
- Reduce `particlesCount` if performance is slow on older devices

Enjoy your new 3D portfolio! 🚀
