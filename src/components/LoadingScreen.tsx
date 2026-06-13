import { useEffect, useState, useRef } from 'react'

/* ─── Pixel-art Pikachu (SVG) ──────────────────── */
const PikachuSprite = ({ flipped = false }: { flipped?: boolean }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      imageRendering: 'pixelated',
      transform: flipped ? 'scaleX(-1)' : undefined,
    }}
  >
    {/* Left ear outer */}
    <rect x="1" y="0" width="3" height="4" fill="#1A1A1A" />
    <rect x="1" y="0" width="2" height="3" fill="#FFD700" />
    {/* Right ear outer */}
    <rect x="12" y="0" width="3" height="4" fill="#1A1A1A" />
    <rect x="13" y="0" width="2" height="3" fill="#FFD700" />
    {/* Face */}
    <rect x="2" y="3" width="12" height="8" fill="#FFD700" />
    <rect x="1" y="4" width="14" height="6" fill="#FFD700" />
    {/* Eyes */}
    <rect x="4" y="5" width="2" height="2" fill="#1A1A1A" />
    <rect x="10" y="5" width="2" height="2" fill="#1A1A1A" />
    <rect x="4" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.7" />
    <rect x="10" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.7" />
    {/* Nose */}
    <rect x="7" y="7" width="2" height="1" fill="#4A2000" />
    {/* Cheeks */}
    <rect x="1" y="7" width="3" height="2" fill="#FF6666" />
    <rect x="12" y="7" width="3" height="2" fill="#FF6666" />
    {/* Mouth */}
    <rect x="5" y="9" width="2" height="1" fill="#4A2000" />
    <rect x="9" y="9" width="2" height="1" fill="#4A2000" />
    <rect x="6" y="10" width="4" height="1" fill="#4A2000" />
    {/* Body */}
    <rect x="3" y="11" width="10" height="4" fill="#FFD700" />
    <rect x="2" y="12" width="12" height="3" fill="#FFD700" />
    {/* Brown stripes */}
    <rect x="3" y="11" width="4" height="1" fill="#C8860A" />
    <rect x="9" y="11" width="4" height="1" fill="#C8860A" />
    {/* Tail */}
    <rect x="13" y="10" width="3" height="1" fill="#C8860A" />
    <rect x="14" y="9" width="2" height="2" fill="#FFD700" />
    {/* Legs */}
    <rect x="4" y="15" width="3" height="1" fill="#C8860A" />
    <rect x="9" y="15" width="3" height="1" fill="#C8860A" />
  </svg>
)

/* ─── Pixel-art Pokéball (SVG) ─────────────────── */
const PokeballSprite = ({ size = 48, spinning = false }: { size?: number; spinning?: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      imageRendering: 'pixelated',
      animation: spinning ? 'spin 0.4s steps(4) infinite' : undefined,
    }}
  >
    {/* Outer ring */}
    <rect x="3" y="0" width="6" height="1" fill="#1A1A1A" />
    <rect x="1" y="1" width="10" height="1" fill="#1A1A1A" />
    <rect x="0" y="2" width="12" height="8" fill="#1A1A1A" />
    <rect x="1" y="10" width="10" height="1" fill="#1A1A1A" />
    <rect x="3" y="11" width="6" height="1" fill="#1A1A1A" />
    {/* Top half - red */}
    <rect x="3" y="0" width="6" height="1" fill="#CC2200" />
    <rect x="1" y="1" width="10" height="1" fill="#CC2200" />
    <rect x="0" y="2" width="12" height="3" fill="#CC2200" />
    {/* Bottom half - white */}
    <rect x="0" y="7" width="12" height="3" fill="#EEEEEE" />
    <rect x="1" y="10" width="10" height="1" fill="#EEEEEE" />
    <rect x="3" y="11" width="6" height="1" fill="#EEEEEE" />
    {/* Center band */}
    <rect x="0" y="5" width="12" height="2" fill="#1A1A1A" />
    {/* Center button */}
    <rect x="4" y="4" width="4" height="4" fill="#1A1A1A" />
    <rect x="5" y="5" width="2" height="2" fill="#FFFFFF" />
  </svg>
)

/* ─── Stars decoration ─────────────────────────── */
const stars = [
  { x: '10%', y: '15%', size: 8, delay: '0s' },
  { x: '85%', y: '20%', size: 6, delay: '0.3s' },
  { x: '20%', y: '75%', size: 10, delay: '0.6s' },
  { x: '75%', y: '80%', size: 7, delay: '0.9s' },
  { x: '50%', y: '10%', size: 5, delay: '1.2s' },
  { x: '92%', y: '60%', size: 9, delay: '0.4s' },
]

/* ─── LoadingScreen ────────────────────────────── */
export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [caught, setCaught] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setCaught(true)
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(onComplete, 600)
          }, 700)
          return 100
        }
        // Accelerate slightly toward the end
        const increment = p > 80 ? 3 : p > 60 ? 2 : 1.5
        return Math.min(p + increment, 100)
      })
    }, 35)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [onComplete])

  // Pikachu position: map 0→100% to left position in the track
  const trackWidth = 320
  const pikachuX = Math.min((progress / 100) * (trackWidth - 80), trackWidth - 80)

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFDF0] scanlines transition-opacity duration-600 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ transition: 'opacity 0.6s ease-out' }}
    >
      {/* Decorative stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute font-pixel text-[#1A3A2A] animate-pixel-blink"
          style={{
            left: star.x,
            top: star.y,
            fontSize: star.size,
            animationDelay: star.delay,
            opacity: 0.3,
          }}
        >
          ✦
        </div>
      ))}

      {/* Neon corner accents */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#39FF14] opacity-60" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#39FF14] opacity-60" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#39FF14] opacity-60" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#39FF14] opacity-60" />

      {/* Title */}
      <div className="mb-10 text-center z-10">
        <h1
          className="font-pixel text-xl md:text-2xl mb-3 gradient-text"
          style={{ letterSpacing: '0.05em' }}
        >
          KYE WORLD
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-[#39FF14] animate-pixel-blink" style={{ boxShadow: '0 0 6px #39FF14' }} />
          <p className="font-pixel text-[10px] text-[#2D6A4F]" style={{ letterSpacing: '0.1em' }}>
            {caught ? 'GOTCHA!' : 'LOADING...'}
          </p>
          <div className="w-2 h-2 bg-[#39FF14] animate-pixel-blink" style={{ boxShadow: '0 0 6px #39FF14', animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Chase track */}
      <div
        className="relative mb-8 z-10 bg-[#F0F4E8] overflow-hidden"
        style={{
          width: 320,
          height: 88,
          border: '2px solid #1A3A2A',
          boxShadow: '4px 4px 0px 0px #1A3A2A',
        }}
      >
        {/* Sky */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-[#E8F5E0]" />

        {/* Clouds (static pixel clouds) */}
        <div className="absolute top-3 left-8 flex gap-1 opacity-60">
          {[0, 1, 2, 1, 0].map((h, i) => (
            <div
              key={i}
              className="bg-white"
              style={{ width: 6, height: 4 + h * 2, marginTop: -h * 1 }}
            />
          ))}
        </div>
        <div className="absolute top-4 right-20 flex gap-1 opacity-50">
          {[0, 1, 1, 0].map((h, i) => (
            <div
              key={i}
              className="bg-white"
              style={{ width: 5, height: 3 + h * 2, marginTop: -h * 1 }}
            />
          ))}
        </div>

        {/* Ground */}
        <div
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{ background: '#2D6A4F', borderTop: '2px solid #1A3A2A' }}
        />
        {/* Grass patches */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <div
            key={i}
            className="absolute bottom-6"
            style={{ left: i * 40 + 8, width: 4, height: 4, background: '#39A845' }}
          />
        ))}

        {/* Pokéball — fixed at right */}
        <div
          className="absolute bottom-6 flex items-end"
          style={{
            right: 16,
            transition: caught ? 'transform 0.3s' : undefined,
            transform: caught ? 'translateY(-8px) scale(1.2)' : undefined,
          }}
        >
          <PokeballSprite size={40} spinning={caught} />
        </div>

        {/* Pikachu */}
        <div
          className="absolute bottom-6 flex items-end"
          style={{
            left: pikachuX,
            transition: 'left 0.05s linear',
          }}
        >
          <div
            style={{
              animation: caught ? undefined : 'bouncePixel 0.4s steps(2) infinite',
            }}
          >
            <PikachuSprite />
          </div>
        </div>

        {/* Caught flash */}
        {caught && (
          <div
            className="absolute inset-0 bg-white animate-fade-in"
            style={{ opacity: 0, animation: 'fadeIn 0.15s ease-out forwards' }}
          />
        )}
      </div>

      {/* Progress bar */}
      <div className="z-10" style={{ width: 320 }}>
        <div
          className="relative h-6 bg-[#F0F4E8] overflow-hidden"
          style={{
            border: '2px solid #1A3A2A',
            boxShadow: '4px 4px 0px 0px #1A3A2A',
          }}
        >
          {/* Segmented background */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{
                left: `${i * 5}%`,
                width: 1,
                background: 'rgba(26, 58, 42, 0.1)',
              }}
            />
          ))}
          {/* Fill */}
          <div
            className="h-full relative"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #2D6A4F, #39FF14)',
              boxShadow: progress > 0 ? '0 0 8px #39FF14' : undefined,
              transition: 'width 0.06s linear',
            }}
          >
            {/* Pixel shine effect */}
            <div className="absolute top-0 bottom-0 right-0 w-1 bg-white opacity-40" />
          </div>
        </div>
        <p
          className="font-pixel text-[9px] text-[#1A3A2A] mt-2 text-center"
          style={{ letterSpacing: '0.1em' }}
        >
          {Math.round(progress)}%
        </p>
      </div>

      {/* Tip text */}
      <p className="absolute bottom-10 font-pixel text-[8px] text-[#2D6A4F] opacity-50" style={{ letterSpacing: '0.08em' }}>
        ▶ PRESS ANY BUTTON TO SKIP
      </p>
    </div>
  )
}
