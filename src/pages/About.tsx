import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import BorderGlow from '@/components/BorderGlow'

const PixelTrail = lazy(() => import('@/components/PixelTrail'))

/* ─── Pixel Progress Bar ─── */
const PixelBar = ({ label, value, color = '#39FF14' }: { label: string; value: number; color?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="mb-4"
  >
    <div className="flex justify-between items-center mb-1">
      <span className="font-pixel text-[8px] text-[#1A3A2A]" style={{ letterSpacing: '0.08em' }}>{label}</span>
      <span className="font-pixel text-[7px] text-[#2D6A4F]">{value}%</span>
    </div>
    <div
      className="h-4 bg-[#F0F4E8] relative overflow-hidden"
      style={{ border: '2px solid #1A3A2A', boxShadow: '2px 2px 0px 0px #1A3A2A' }}
    >
      {/* Segment lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0"
          style={{ left: `${i * 10}%`, width: 1, background: 'rgba(26,58,42,0.1)' }}
        />
      ))}
      <motion.div
        className="h-full"
        style={{ background: `linear-gradient(90deg, #2D6A4F, ${color})`, boxShadow: `0 0 6px ${color}` }}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  </motion.div>
)

/* ─── Interest chip ─── */
const InterestChip = ({ emoji, label, color }: { emoji: string; label: string; color: string }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="flex flex-col items-center gap-2 p-3"
    style={{
      border: `2px solid ${color}`,
      boxShadow: `3px 3px 0px 0px ${color}`,
      background: '#FAFDF0',
      minWidth: 72,
    }}
  >
    <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
    <span className="font-pixel text-[7px] text-[#1A3A2A] text-center" style={{ letterSpacing: '0.08em' }}>
      {label}
    </span>
  </motion.div>
)

/* ─── Journal entry ─── */
const JournalEntry = ({
  date,
  content,
  delay = 0,
}: {
  date: string
  content: string
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-4"
  >
    <div className="flex flex-col items-center gap-1">
      <div
        className="w-3 h-3 bg-[#39FF14] shrink-0"
        style={{ boxShadow: '0 0 6px #39FF14', border: '1px solid #1A3A2A' }}
      />
      <div className="w-px flex-1 bg-[#1A3A2A] opacity-20" />
    </div>
    <div className="pb-6">
      <span
        className="font-pixel text-[7px] text-[#2D6A4F] mb-2 block"
        style={{ letterSpacing: '0.12em' }}
      >
        {date}
      </span>
      <p className="font-vt text-[#1A3A2A]" style={{ fontSize: '1.15rem', lineHeight: 1.6 }}>
        {content}
      </p>
    </div>
  </motion.div>
)

/* ─── About Page ──────────────────────────────── */
export default function About() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Purple pixel trail — below all content */}
      <Suspense fallback={null}>
        <PixelTrail
          gridSize={40}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#7B3FE4"
          gooeyFilter={{ id: 'about-pixel-goo', strength: 2 }}
        />
      </Suspense>

      <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
      {/* Section badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-label inline-flex mb-10"
      >
        <div
          className="w-2 h-2 bg-[#7B3FE4] animate-pixel-blink"
          style={{ boxShadow: '0 0 4px #7B3FE4' }}
        />
        <span className="font-pixel text-[9px] text-[#1A3A2A]" style={{ letterSpacing: '0.15em' }}>
          ABOUT KYE
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-pixel mb-6"
        style={{
          fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
          lineHeight: 1.4,
          letterSpacing: '0.02em',
        }}
      >
        <span className="gradient-text">DESIGNER.</span>
        <br />
        <span className="text-[#1A3A2A]">DREAMER.</span>
        <br />
        <span className="gradient-text-purple">PIXEL LOVER.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-vt text-[#2D6A4F] mb-12 max-w-xl"
        style={{ fontSize: '1.3rem', lineHeight: 1.7 }}
      >
        Hi! I'm KYE — a designer who believes that every pixel counts.
        I create visual experiences that are bold, playful, and intentional.
        Currently exploring the intersection of nostalgia and modernity.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column */}
        <div>
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1"
              style={{ border: '2px solid #1A3A2A', boxShadow: '2px 2px 0px 0px #1A3A2A', background: '#F0F4E8' }}
            >
              <span className="font-pixel text-[8px] text-[#1A3A2A]" style={{ letterSpacing: '0.12em' }}>
                SKILLS.EXE
              </span>
            </div>

            <PixelBar label="UI / UX DESIGN" value={92} color="#39FF14" />
            <PixelBar label="VISUAL DESIGN" value={88} color="#39FF14" />
            <PixelBar label="ILLUSTRATION" value={75} color="#A78BFA" />
            <PixelBar label="MOTION GRAPHICS" value={68} color="#A78BFA" />
            <PixelBar label="CREATIVE CODING" value={60} color="#FFD700" />
            <PixelBar label="PIXEL ART" value={95} color="#39FF14" />
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-flex items-center gap-2 mb-5 px-3 py-1"
              style={{ border: '2px solid #1A3A2A', boxShadow: '2px 2px 0px 0px #1A3A2A', background: '#F0F4E8' }}
            >
              <span className="font-pixel text-[8px] text-[#1A3A2A]" style={{ letterSpacing: '0.12em' }}>
                TOOLS
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'FIGMA', color: '#39FF14' },
                { name: 'ADOBE CC', color: '#7B3FE4' },
                { name: 'PROCREATE', color: '#39FF14' },
                { name: 'BLENDER', color: '#FFD700' },
                { name: 'REACT', color: '#39FF14' },
                { name: 'AFTER FX', color: '#7B3FE4' },
              ].map(tool => (
                <span key={tool.name} className="pixel-tag" style={{ borderColor: tool.color, color: '#1A3A2A' }}>
                  {tool.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div>
          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1"
              style={{ border: '2px solid #1A3A2A', boxShadow: '2px 2px 0px 0px #1A3A2A', background: '#F0F4E8' }}
            >
              <span className="font-pixel text-[8px] text-[#1A3A2A]" style={{ letterSpacing: '0.12em' }}>
                INTERESTS
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <InterestChip emoji="🎮" label="GAMING" color="#39FF14" />
              <InterestChip emoji="🎨" label="ART" color="#7B3FE4" />
              <InterestChip emoji="🌿" label="NATURE" color="#39FF14" />
              <InterestChip emoji="🎵" label="MUSIC" color="#FFD700" />
              <InterestChip emoji="📚" label="BOOKS" color="#7B3FE4" />
              <InterestChip emoji="☕" label="COFFEE" color="#C8860A" />
              <InterestChip emoji="🌸" label="ANIME" color="#FF6B9D" />
              <InterestChip emoji="🐱" label="CATS" color="#FFD700" />
            </div>
          </motion.div>

          {/* Journal / Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1"
              style={{ border: '2px solid #1A3A2A', boxShadow: '2px 2px 0px 0px #1A3A2A', background: '#F0F4E8' }}
            >
              <span className="font-pixel text-[8px] text-[#1A3A2A]" style={{ letterSpacing: '0.12em' }}>
                JOURNAL
              </span>
            </div>

            <JournalEntry
              date="2024 · NOW"
              content="Exploring generative art and building personal projects. This website is one of them."
              delay={0}
            />
            <JournalEntry
              date="2023"
              content="Deep-dived into UI/UX design, worked on brand identity projects and motion graphics."
              delay={0.1}
            />
            <JournalEntry
              date="2022"
              content="Started Kyedesign. First steps into digital illustration and pixel art."
              delay={0.2}
            />
            <JournalEntry
              date="ORIGIN"
              content="Fell in love with design through video games and retro aesthetics. Never looked back."
              delay={0.3}
            />
          </motion.div>
        </div>
      </div>

      {/* Fun fact band */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mt-16"
        style={{ border: '2px solid #1A3A2A', boxShadow: '4px 4px 0px 0px #39FF14' }}
      >
        <BorderGlow
          backgroundColor="#1A3A2A"
          colors={['#39FF14', '#A78BFA', '#2D6A4F']}
          glowColor="120 100 48"
          borderRadius={0}
          glowRadius={0}
          glowIntensity={0.95}
          coneSpread={40}
          fillOpacity={0.14}
          className="w-full"
        >
          {/* dot-pattern overlay from section-inverted */}
          <div
            className="flex flex-col sm:flex-row items-center gap-6 p-6 relative"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(57,255,20,0.06) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          >
            <div
              className="w-20 h-20 bg-[#39FF14] shrink-0 flex items-center justify-center"
              style={{ border: '2px solid #FAFDF0', boxShadow: '4px 4px 0px 0px rgba(250,253,240,0.3)' }}
            >
              <span className="font-pixel text-[#1A3A2A] text-xl">KYE</span>
            </div>
            <div>
              <p
                className="font-pixel text-[#FAFDF0] mb-2"
                style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}
              >
                FUN FACT
              </p>
              <p className="font-vt text-[#FAFDF0] opacity-80" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
                "KYE" means "the one who illuminates" — which is probably why I'm drawn
                to neon greens and glowing pixels. It's fate.
              </p>
            </div>
          </div>
        </BorderGlow>
      </motion.div>
      </div>
    </div>
  )
}
