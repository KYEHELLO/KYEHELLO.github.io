---
name: 8-Bit Portfolio
colors:
  surface: '#fef9f1'
  surface-dim: '#ded9d2'
  surface-bright: '#fef9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3eb'
  surface-container: '#f2ede5'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e7e2da'
  on-surface: '#1d1c17'
  on-surface-variant: '#494550'
  inverse-surface: '#32302b'
  inverse-on-surface: '#f5f0e8'
  outline: '#7b7581'
  outline-variant: '#cbc4d2'
  surface-tint: '#6a4f9f'
  primary: '#250259'
  on-primary: '#ffffff'
  primary-container: '#3b1f6e'
  on-primary-container: '#a68adf'
  inverse-primary: '#d3bbff'
  secondary: '#2a6a47'
  on-secondary: '#ffffff'
  secondary-container: '#aff2c4'
  on-secondary-container: '#31704c'
  tertiary: '#022200'
  on-tertiary: '#ffffff'
  tertiary-container: '#053a00'
  on-tertiary-container: '#1fb100'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d3bbff'
  on-primary-fixed: '#250158'
  on-primary-fixed-variant: '#523786'
  secondary-fixed: '#aff2c4'
  secondary-fixed-dim: '#93d5aa'
  on-secondary-fixed: '#002110'
  on-secondary-fixed-variant: '#0b5131'
  tertiary-fixed: '#79ff5b'
  tertiary-fixed-dim: '#2ae500'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#095300'
  background: '#fef9f1'
  on-background: '#1d1c17'
  surface-variant: '#e7e2da'
  text-dark: '#0D3320'
  shadow-pixel: '#2A1454'
typography:
  display-xl:
    fontFamily: Press Start 2P
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -2px
  headline-lg:
    fontFamily: Press Start 2P
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Press Start 2P
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Press Start 2P
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 128px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The brand personality is nostalgic, playful, and high-energy, drawing inspiration from the golden age of 8-bit arcade machines and early home consoles. It targets a creative audience that appreciates a blend of retro-tech aesthetics and modern layout principles. 

The design style is **Brutalism mixed with Retro-Pixel**. It utilizes heavy 4px solid borders, intentional lack of smoothing (aliasing), and a rigid grid structure. The UI is chunky and tactile, using solid offset shadows to create depth without relying on gradients or blurs. The aesthetic should feel like a premium version of a GameBoy Color or NES interface—refined, but unapologetically pixelated.

## Colors

The palette centers on a high-contrast relationship between the warm, off-white background and deep, saturated jewel tones. 

- **Primary (Deep Purple):** Used for structural elements, headers, and primary UI backgrounds.
- **Secondary (Forest Green):** Used for supporting decorative elements and distinct content blocks.
- **Tertiary (Neon Green):** The high-visibility accent color. Used strictly for interactive states, call-to-actions, and active navigation indicators.
- **Neutral (Off-White):** The canvas color. Provides a warm, paper-like feel that prevents the dark colors from feeling too sterile.
- **Text Gradient:** Headlines should utilize a vertical linear gradient transitioning from `text-dark` at the top to `tertiary` at the bottom to simulate a "glowing" arcade CRT effect.

## Typography

This system uses a dual-font strategy to balance character with readability.

- **Headlines:** Use a bitmap-inspired font (represented here by the scale of 'Press Start 2P'). These are always treated as display elements. Large sizes should be used sparingly to maintain the "chunky" aesthetic.
- **Body & Labels:** Use a clean, monospaced font like **JetBrains Mono**. This preserves the technical, "code-like" feel of the 8-bit era while ensuring that longer bio texts and project descriptions are legible. 
- **Character:** All text should be rendered with `font-smooth: never` or `antialiased: false` where possible to maintain crisp pixel edges. Avoid italics; use bold weights or color shifts for emphasis.

## Layout & Spacing

The layout is built on a **strict 4px grid**, which aligns with the border widths. All spacing (padding, margins, gutters) must be a multiple of 4px to ensure "pixel-perfect" alignment.

- **Grid Model:** A 12-column fixed grid for desktop (centered), collapsing to a 4-column fluid grid for mobile.
- **Hero Section:** Full-viewport height (100vh) with content centered both vertically and horizontally. 
- **Margins:** Page margins are generous (64px on desktop) to allow the "object-heavy" UI elements room to breathe.
- **Responsiveness:** On mobile, spacing units scale down by one tier (e.g., `lg` becomes `md`) to accommodate smaller screens while maintaining the chunky feel.

## Elevation & Depth

Depth is conveyed through **Solid Pixel Shadows**. Unlike traditional soft shadows, this design system uses 100% opaque, offset blocks of color (typically the `shadow-pixel` or `primary` color).

- **Standard Elevation:** Elements feature a 4px offset to the bottom-right.
- **High Elevation / Hover:** Elements increase the offset to 8px, creating the illusion of the component lifting off the page.
- **Tonal Layering:** Use the `primary` (purple) as a container background for "inset" areas, with text in `neutral` or `tertiary`.
- **Zero-Blur:** No Gaussian blurs or transparency should be used for elevation. All depth must be represented by hard-edged geometric shapes.

## Shapes

The shape language is strictly **rectangular and sharp**. 

- **Corners:** Absolutely no border-radius. Every corner must be a 90-degree angle to reinforce the 8-bit grid aesthetic.
- **Borders:** Every container and interactive element must have a solid border (2px for small elements, 4px for large containers). 
- **Connectors:** Use 4px wide horizontal and vertical lines as "wiring" to connect related pieces of information, reinforcing the circuit-board or grid-map feel.

## Components

- **Buttons:** 4px solid black/purple borders. Default state has a 4px solid shadow. Hover state moves the button -2px up and left while increasing the shadow to 8px. Use `tertiary` (neon green) for button text or background on active states.
- **Project Cards:** Large 4px borders with a solid `primary` color block for the image placeholder. Tags inside cards should be small rectangular boxes with `tertiary` borders.
- **Navigation:** A fixed horizontal bar. Links use the `headline_font` at a small size. The active link is underlined with a 4px thick `tertiary` line.
- **Input Fields:** Inset look created by swapping the shadow to the top-left (inner shadow style) using a slightly darker version of the background color.
- **Chips/Badges:** Small rectangular boxes, no padding on the sides, using monospace font.
- **Loading Indicator:** A centered container where a pixel-character moves across a 4px grid. Text "LOADING..." must blink (on/off visibility) at a 500ms interval.