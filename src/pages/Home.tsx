import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BorderGlow from '@/components/BorderGlow'

const PixelTrail = lazy(() => import('@/components/PixelTrail'))

/* ─── Entrance animation helper ──── */
const easeOut = [0.16, 1, 0.3, 1] as const

function fadeUpProps(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOut, delay },
  }
}

/* ─── Pixel decoration: floating orbs ─── */
const PixelOrb = ({
  size,
  color,
  style,
}: {
  size: number
  color: string
  style?: React.CSSProperties
}) => (
  <div
    className="absolute animate-float-y pointer-events-none"
    style={{
      width: size,
      height: size,
      background: color,
      border: '2px solid #1A3A2A',
      ...style,
    }}
  />
)

/* ─── Pixel Star ─── */
const PixelStar = ({ style }: { style?: React.CSSProperties }) => (
  <span
    className="absolute font-pixel text-[#1A3A2A] opacity-20 animate-pixel-blink pointer-events-none"
    style={{ fontSize: 10, ...style }}
  >
    ✦
  </span>
)

/* ─── Typed text hook ─── */
function useTyped(text: string, speed = 60, startDelay = 400) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(iv)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(iv)
    }, startDelay)
    return () => clearTimeout(t)
  }, [text, speed, startDelay])

  return { displayed, done }
}

/* ─── Home Page ───────────────────── */
export default function Home() {
  const { displayed: typedGreeting, done: greetingDone } = useTyped("Bonjour!", 80, 300)
  const { displayed: typedName } = useTyped(
    greetingDone ? "It's KYE Here!" : '',
    70,
    0
  )
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ─────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden scanlines"
        style={{ paddingTop: '5rem', paddingBottom: '4rem' }}
      >
        {/* Pixel mouse trail — sits below all content (z-index 1 < z-10) */}
        <Suspense fallback={null}>
          <PixelTrail
            gridSize={35}
            trailSize={0.12}
            maxAge={300}
            interpolate={5}
            color="#39FF14"
            gooeyFilter={{ id: 'hero-pixel-goo', strength: 2 }}
          />
        </Suspense>

        {/* Decorative background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(26,58,42,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26,58,42,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating pixel orbs */}
        <PixelOrb size={24} color="#39FF14" style={{ top: '15%', left: '8%', animationDelay: '0s', opacity: 0.7, boxShadow: '0 0 8px #39FF14' }} />
        <PixelOrb size={16} color="#7B3FE4" style={{ top: '25%', right: '12%', animationDelay: '1s', opacity: 0.6 }} />
        <PixelOrb size={20} color="#FFD700" style={{ bottom: '30%', left: '15%', animationDelay: '2s', opacity: 0.5 }} />
        <PixelOrb size={12} color="#39FF14" style={{ bottom: '20%', right: '10%', animationDelay: '0.5s', opacity: 0.8, boxShadow: '0 0 6px #39FF14' }} />
        <PixelOrb size={32} color="#F0F4E8" style={{ top: '10%', right: '25%', animationDelay: '1.5s', opacity: 0.9 }} />

        {/* Decorative stars */}
        <PixelStar style={{ top: '12%', left: '30%', animationDelay: '0.3s' }} />
        <PixelStar style={{ top: '65%', right: '20%', animationDelay: '0.8s' }} />
        <PixelStar style={{ bottom: '25%', left: '40%', animationDelay: '1.2s' }} />

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-[#1A3A2A] opacity-20" />
        <div className="absolute top-8 right-20 md:right-52 w-12 h-12 border-t-4 border-r-4 border-[#1A3A2A] opacity-20" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-[#1A3A2A] opacity-20" />

        {/* Main content */}
        <div className="relative z-10 max-w-3xl w-full">
          {/* Section badge */}
          <motion.div
            {...fadeUpProps(0)}
            className="section-label inline-flex mb-8"
          >
            <div
              className="w-2 h-2 bg-[#39FF14] animate-pixel-blink"
              style={{ boxShadow: '0 0 4px #39FF14' }}
            />
            <span
              className="font-pixel text-[9px] text-[#1A3A2A]"
              style={{ letterSpacing: '0.15em' }}
            >
              PERSONAL HOMEPAGE
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="mb-6">
            {/* Bonjour line */}
            <motion.div
              {...fadeUpProps(0.1)}
              className="mb-2"
            >
              <h1
                className="font-pixel leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', letterSpacing: '-0.01em' }}
              >
                <span className="gradient-text">{typedGreeting}</span>
                {!greetingDone && (
                  <span className="animate-pixel-blink text-[#39FF14]">█</span>
                )}
              </h1>
            </motion.div>

            {/* "It's KYE Here!" line */}
            <motion.div
              {...fadeUpProps(0.2)}
            >
              <h2
                className="font-pixel leading-tight text-[#1A3A2A]"
                style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)', letterSpacing: '-0.01em' }}
              >
                {greetingDone && (
                  <>
                    {typedName}
                    {typedName.length < "It's KYE Here!".length && (
                      <span className="animate-pixel-blink text-[#39FF14]">█</span>
                    )}
                  </>
                )}
              </h2>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            {...fadeUpProps(0.35)}
            className="mb-6"
          >
            <div
              className="h-1"
              style={{
                width: 120,
                background: 'linear-gradient(90deg, #1A3A2A, #39FF14)',
                boxShadow: '0 0 6px #39FF14',
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUpProps(0.45)}
            className="font-vt text-[#2D6A4F] mb-8 max-w-lg"
            style={{ fontSize: '1.35rem', lineHeight: 1.6, letterSpacing: '0.01em' }}
          >
            Designer · Creator · Pixel Dreamer.
            <br />
            Building worlds one pixel at a time.
          </motion.p>

          {/* Email */}
          <motion.div
            {...fadeUpProps(0.55)}
            className="mb-10"
          >
            <div
              className="inline-flex items-center gap-3 bg-[#1A3A2A] px-5 py-3"
              style={{ boxShadow: '4px 4px 0px 0px #39FF14' }}
            >
              <span className="font-pixel text-[8px] text-[#39FF14] animate-pixel-blink" style={{ letterSpacing: '0.1em' }}>
                ✉
              </span>
              <a
                href="mailto:Kyedesign2022@gmail.com"
                className="font-vt text-[#39FF14] hover:text-white transition-colors"
                style={{
                  fontSize: '1.2rem',
                  letterSpacing: '0.03em',
                  textShadow: '0 0 6px #39FF14',
                }}
              >
                Kyedesign2022@gmail.com
              </a>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            {...fadeUpProps(0.65)}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="pixel-btn inline-flex items-center gap-2 bg-[#1A3A2A] text-[#FAFDF0] font-pixel px-5 py-3"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                border: '2px solid #1A3A2A',
                boxShadow: '4px 4px 0px 0px #1A3A2A',
              }}
            >
              VIEW WORKS ▶
            </Link>
            <Link
              to="/contact"
              className="pixel-btn pixel-btn-neon inline-flex items-center gap-2 bg-transparent text-[#1A3A2A] font-pixel px-5 py-3"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                border: '2px solid #1A3A2A',
                boxShadow: '4px 4px 0px 0px #1A3A2A',
              }}
            >
              SAY HELLO ✉
            </Link>
          </motion.div>
        </div>

        {/* Right side: pixel art decoration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="hidden lg:flex absolute right-24 top-1/2 -translate-y-1/2 flex-col gap-4 pointer-events-none"
        >
          {/* Big pixel art block */}
          <div
            className="animate-float-y"
            style={{
              animationDelay: '0s',
              width: 180,
              height: 180,
              border: '2px solid #1A3A2A',
              boxShadow: '6px 6px 0px 0px #1A3A2A',
              background: '#F0F4E8',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Pixel art grid inside */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(26,58,42,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(26,58,42,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '18px 18px',
              }}
            />
            {/* Color blocks */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[#1A3A2A]" />
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#1A3A2A]" />
            <div
              className="absolute"
              style={{ top: 24, left: 18, width: 54, height: 54, background: '#39FF14', boxShadow: '0 0 12px #39FF14' }}
            />
            <div
              className="absolute"
              style={{ top: 36, right: 18, width: 36, height: 36, background: '#7B3FE4' }}
            />
            <div
              className="absolute"
              style={{ bottom: 24, left: 36, width: 72, height: 18, background: '#FFD700' }}
            />
            <div className="absolute bottom-12 right-12 w-4 h-4 bg-[#1A3A2A]" />
            <div className="absolute top-24 left-24 font-pixel text-[8px] text-[#1A3A2A] opacity-30">KYE</div>
          </div>

          {/* Small pixel cards */}
          <div className="flex gap-3">
            <div
              style={{
                width: 80,
                height: 56,
                border: '2px solid #1A3A2A',
                boxShadow: '3px 3px 0px 0px #39FF14',
                background: '#1A3A2A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="font-pixel text-[8px] text-[#39FF14]" style={{ textShadow: '0 0 4px #39FF14' }}>
                UI/UX
              </span>
            </div>
            <div
              style={{
                width: 80,
                height: 56,
                border: '2px solid #1A3A2A',
                boxShadow: '3px 3px 0px 0px #7B3FE4',
                background: '#F0F4E8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="font-pixel text-[8px] text-[#7B3FE4]">ART</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          ref={scrollRef}
        >
          <span className="font-pixel text-[7px] text-[#2D6A4F] opacity-50" style={{ letterSpacing: '0.12em' }}>
            SCROLL
          </span>
          <div
            className="w-4 h-6 border-2 border-[#2D6A4F] flex items-start justify-center pt-1 opacity-50"
          >
            <div className="w-1 h-2 bg-[#2D6A4F] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ── Inverted stats section ────────────────────── */}
      <section className="section-inverted px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div
              className="inline-flex items-center gap-3 mb-6 px-4 py-2"
              style={{ border: '2px solid #39FF14', boxShadow: '3px 3px 0px 0px #39FF14' }}
            >
              <div className="w-2 h-2 bg-[#39FF14]" style={{ boxShadow: '0 0 6px #39FF14' }} />
              <span className="font-pixel text-[9px] text-[#39FF14]" style={{ letterSpacing: '0.15em' }}>
                STATUS
              </span>
            </div>
            <h2
              className="font-pixel text-[#FAFDF0]"
              style={{ fontSize: 'clamp(1rem, 3vw, 1.6rem)', letterSpacing: '0.05em', lineHeight: 1.4 }}
            >
              WHAT I DO
            </h2>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '∞', label: 'PIXELS', color: '#39FF14' },
              { number: '3+', label: 'YEARS EXP', color: '#A78BFA' },
              { number: '20+', label: 'PROJECTS', color: '#FFD700' },
              { number: '100%', label: 'PASSION', color: '#39FF14' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center py-6 px-4 text-center"
                style={{
                  border: `2px solid ${stat.color}`,
                  boxShadow: `4px 4px 0px 0px ${stat.color}`,
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <span
                  className="font-pixel block mb-2"
                  style={{
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    color: stat.color,
                    textShadow: `0 0 8px ${stat.color}`,
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="font-pixel text-[#FAFDF0] opacity-70"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.12em' }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: '◈',
                title: 'UI / UX DESIGN',
                desc: 'Crafting intuitive interfaces with pixel-perfect precision.',
                color: '#39FF14',
                glowColor: '120 100 53',
              },
              {
                icon: '◉',
                title: 'VISUAL DESIGN',
                desc: 'Brand identity, illustration, and motion graphics.',
                color: '#A78BFA',
                glowColor: '265 90 76',
              },
              {
                icon: '◆',
                title: 'CREATIVE CODING',
                desc: 'Interactive experiences where design meets technology.',
                color: '#FFD700',
                glowColor: '51 100 50',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ border: '2px solid rgba(250,253,240,0.15)' }}
              >
                <BorderGlow
                  backgroundColor="#1A3A2A"
                  colors={['#39FF14', '#A78BFA', '#2D6A4F']}
                  glowColor={item.glowColor}
                  borderRadius={0}
                  glowRadius={0}
                  glowIntensity={0.9}
                  coneSpread={35}
                  fillOpacity={0.12}
                  className="w-full"
                >
                  <div className="p-5">
                    <div
                      className="font-pixel mb-3"
                      style={{ fontSize: '1.4rem', color: item.color, textShadow: `0 0 8px ${item.color}` }}
                    >
                      {item.icon}
                    </div>
                    <h3
                      className="font-pixel text-[#FAFDF0] mb-2"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-vt text-[#FAFDF0] opacity-60" style={{ fontSize: '1.1rem', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ─────────────────────────────────── */}
      <section className="px-6 py-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
          style={{
            border: '2px solid #1A3A2A',
            boxShadow: '6px 6px 0px 0px #1A3A2A',
          }}
        >
          <BorderGlow
            backgroundColor="#F0F4E8"
            colors={['#2D6A4F', '#7B3FE4', '#39FF14']}
            glowColor="140 80 35"
            borderRadius={0}
            glowRadius={0}
            glowIntensity={0.85}
            coneSpread={30}
            fillOpacity={0.08}
            className="w-full"
          >
            <div className="text-center" style={{ padding: '2.5rem 2rem' }}>
              <h2
                className="font-pixel gradient-text mb-4"
                style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)', letterSpacing: '0.06em', lineHeight: 1.4 }}
              >
                LET'S CREATE SOMETHING
                <br />
                TOGETHER
              </h2>
              <p className="font-vt text-[#2D6A4F] mb-6" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
                Open for collaborations, freelance projects,
                and creative adventures.
              </p>
              <Link
                to="/contact"
                className="pixel-btn inline-flex items-center gap-2 bg-[#1A3A2A] text-[#39FF14] font-pixel px-6 py-3"
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  border: '2px solid #1A3A2A',
                  boxShadow: '4px 4px 0px 0px #39FF14',
                  textShadow: '0 0 6px #39FF14',
                }}
              >
                START A PROJECT ▶
              </Link>
            </div>
          </BorderGlow>
        </motion.div>
      </section>
    </div>
  )
}
