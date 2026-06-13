/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAFDF0',
        'dark-green': '#1A3A2A',
        'forest-green': '#2D6A4F',
        'mid-green': '#3A7D5A',
        'neon-green': '#39FF14',
        'off-cream': '#F0F4E8',
        purple: {
          DEFAULT: '#7B3FE4',
          light: '#A78BFA',
          dark: '#4C1D95',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        vt: ['"VT323"', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        pixel: '4px 4px 0px 0px #1A3A2A',
        'pixel-neon': '4px 4px 0px 0px #39FF14',
        'pixel-purple': '4px 4px 0px 0px #7B3FE4',
        'pixel-sm': '2px 2px 0px 0px #1A3A2A',
        'pixel-sm-neon': '2px 2px 0px 0px #39FF14',
        'pixel-lg': '6px 6px 0px 0px #1A3A2A',
        'neon-glow': '0 0 8px #39FF14, 0 0 16px #39FF14',
        'neon-glow-sm': '0 0 4px #39FF14, 0 0 8px #39FF14',
        'purple-glow': '0 0 8px #7B3FE4, 0 0 16px #7B3FE4',
      },
      animation: {
        'pixel-blink': 'pixelBlink 1s step-end infinite',
        'float-y': 'floatY 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'neon-pulse': 'neonPulse 2.5s ease-in-out infinite',
        'bounce-pixel': 'bouncePixel 0.5s steps(2) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pikachu-run': 'pikachuRun 2.5s linear forwards',
        'pokeball-spin': 'pokeballSpin 0.3s steps(4) infinite',
        'scanline-move': 'scanlineMove 6s linear infinite',
        'cursor-blink': 'pixelBlink 0.8s step-end infinite',
      },
      keyframes: {
        pixelBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        neonPulse: {
          '0%, 100%': {
            textShadow: '0 0 4px #39FF14, 0 0 8px #39FF14',
          },
          '50%': {
            textShadow: '0 0 12px #39FF14, 0 0 24px #39FF14, 0 0 40px #39FF14',
          },
        },
        bouncePixel: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        pikachuRun: {
          '0%': { transform: 'translateX(-80px)' },
          '100%': { transform: 'translateX(320px)' },
        },
        pokeballSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scanlineMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100px' },
        },
      },
    },
  },
  plugins: [],
}
