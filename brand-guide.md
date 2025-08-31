# LeavingCertK Brand Guide

## Color Palette

### Primary Colors
```css
/* Main Teal - Primary accent, buttons, highlights */
#26c6da

/* Light Teal - Secondary accents, hover states */
#4dd0e1

/* Bright Teal - Tertiary accent, gradients */
#00bcd4
```

### Supporting Colors
```css
/* Deep Teal - Dark accents, borders */
#00acc1

/* Darker Teal - Alternative accent */
#0097a7
```

### Background Colors
```css
/* Main Background - Page backgrounds */
#2a2c36

/* Card Background - Component backgrounds */
#3d3f4d

/* Light Card Background - Elevated components */
#525461
```

### Text Colors
```css
/* Primary Text */
#ffffff

/* Secondary Text */
rgba(255,255,255,0.8)
```

## Common Gradients

### Hero Title Gradient
```css
background: linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Button Gradient
```css
background: linear-gradient(135deg, #26c6da, #4dd0e1, #00bcd4);
```

### Background Gradient
```css
background: linear-gradient(135deg, rgba(42, 44, 54, 0.9) 0%, rgba(61, 63, 77, 0.8) 100%);
```

### Card Hover Effects
```css
border: 1px solid rgba(38, 198, 218, 0.4);
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(38, 198, 218, 0.3);
```

## Usage Rules

### DO ✅
- Use `#26c6da` for primary buttons and call-to-action elements
- Use `#4dd0e1` for secondary accents and lighter highlights  
- Use `#00bcd4` in gradients with the other teal colors
- Use `#3d3f4d` for card backgrounds and elevated surfaces
- Use `#2a2c36` for main page backgrounds
- Apply teal colors to icons, borders, and interactive elements

### DON'T ❌
- Don't use the old orange colors (`#f39c12`, `#e94560`, `#ff6b35`)
- Don't use the old navy backgrounds (`#0f0f23`, `#1a1a2e`)
- Don't mix purple colors with the teal palette
- Don't use pure black backgrounds - always use the charcoal tones

## Quick Copy-Paste for AI

**Replace these old colors:**
```css
/* OLD - Replace these */
#f39c12 → #26c6da
#e94560 → #00acc1  
#ff6b35 → #4dd0e1
#0f0f23 → #3d3f4d
#1a1a2e → #525461
#0a0a0f → #2a2c36

/* OLD gradients - Replace these */
linear-gradient(45deg, #e94560, #f39c12, #ff6b35) 
→ linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4)

rgba(15, 15, 35, 0.9) → rgba(42, 44, 54, 0.9)
rgba(26, 26, 46, 0.8) → rgba(61, 63, 77, 0.8)
```

## Color Variations by Component

### Cards
- **Green border cards**: Use `#4dd0e1` (lighter teal)
- **Blue border cards**: Use `#0097a7` (deep teal) 
- **Red border cards**: Use `#00acc1` (darker teal)

### Stats Cards
- **Record Volume**: `#26c6da` (main teal)
- **Capacity Gap**: `#4dd0e1` (light teal)
- **Results Drift**: `#00acc1` (darker teal)

### Interactive Elements
- **Arrows**: Various teal shades (`#4dd0e1`, `#00acc1`, `#0097a7`)
- **Buttons**: Always use the main teal gradient
- **Hover states**: `rgba(38, 198, 218, 0.4)` for borders

---
*This brand guide ensures consistent teal theming across all components, matching the professional aesthetic of the logo.*