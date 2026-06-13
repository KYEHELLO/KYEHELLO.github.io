import { useState, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BorderGlow from '@/components/BorderGlow'

const PixelTrail = lazy(() => import('@/components/PixelTrail'))

/* ─── Map project accent colour to approximate HSL glow string ── */
const accentToGlowColor: Record<string, string> = {
  '#39FF14': '120 100 53',
  '#A78BFA': '265 90 76',
  '#FFD700': '51 100 50',
  '#FF6B9D': '337 100 71',
}

/* ─── Project data ─────────────────────────── */
const projects = [
  {
    id: 1,
    title: 'Visual Brand Identity',
    description: 'Complete brand identity system for a creative studio, including logo, color palette, and typography.',
    tags: ['BRANDING', 'IDENTITY'],
    date: '2024-05',
    color: '#39FF14',
    bgPattern: 'linear-gradient(135deg, #1A3A2A 0%, #2D6A4F 50%, #39FF14 100%)',
    category: 'design',
  },
  {
    id: 2,
    title: 'Pixel Art Collection',
    description: 'Series of original pixel art illustrations exploring retro game aesthetics.',
    tags: ['ILLUSTRATION', 'PIXEL'],
    date: '2024-03',
    color: '#A78BFA',
    bgPattern: 'linear-gradient(135deg, #4C1D95 0%, #7B3FE4 100%)',
    category: 'art',
  },
  {
    id: 3,
    title: 'UI/UX App Redesign',
    description: 'Redesigning a productivity app with focus on accessibility and dark mode.',
    tags: ['UI/UX', 'APP'],
    date: '2024-01',
    color: '#FFD700',
    bgPattern: 'linear-gradient(135deg, #1A3A2A 0%, #C8860A 100%)',
    category: 'design',
  },
  {
    id: 4,
    title: 'Motion Graphics Reel',
    description: 'Animation showreel featuring kinetic typography and 2D character animation.',
    tags: ['MOTION', 'ANIMATION'],
    date: '2023-11',
    color: '#39FF14',
    bgPattern: 'linear-gradient(135deg, #0D2010 0%, #39FF14 100%)',
    category: 'motion',
  },
  {
    id: 5,
    title: 'Exhibition Poster Series',
    description: 'Set of six limited edition art prints for a digital arts exhibition.',
    tags: ['PRINT', 'POSTER'],
    date: '2023-09',
    color: '#FF6B9D',
    bgPattern: 'linear-gradient(135deg, #2D0A1E 0%, #FF6B9D 100%)',
    category: 'art',
  },
  {
    id: 6,
    title: 'Design System',
    description: 'Pixel-perfect design system with components, tokens, and documentation.',
    tags: ['SYSTEM', 'DESIGN'],
    date: '2023-07',
    color: '#39FF14',
    bgPattern: 'linear-gradient(135deg, #1A3A2A 0%, #2D6A4F 100%)',
    category: 'design',
  },
]

const categories = ['ALL', 'DESIGN', 'ART', 'MOTION'] as const
type Category = (typeof categories)[number]

/* ─── Pixel art placeholder image ─────────── */
const ProjectThumbnail = ({
  title,
  bgPattern,
  accentColor,
}: {
  title: string
  bgPattern: string
  accentColor: string
}) => (
  <div
    className="w-full aspect-video relative overflow-hidden"
    style={{ background: bgPattern }}
  >
    {/* Grid overlay */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(250,253,240,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(250,253,240,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '16px 16px',
      }}
    />
    {/* Pixel decoration */}
    <div
      className="absolute top-3 right-3 w-6 h-6"
      style={{ background: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
    />
    <div className="absolute bottom-3 left-3 w-4 h-4" style={{ background: 'rgba(250,253,240,0.3)' }} />
    <div className="absolute top-3 left-3 w-3 h-3 border border-white opacity-30" />
    {/* Title preview */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="px-3 py-2"
        style={{
          border: `2px solid ${accentColor}`,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(2px)',
        }}
      >
        <span
          className="font-pixel text-white"
          style={{ fontSize: '0.5rem', letterSpacing: '0.12em', textShadow: `0 0 6px ${accentColor}` }}
        >
          {title.toUpperCase().slice(0, 16)}
          {title.length > 16 && '...'}
        </span>
      </div>
    </div>
    {/* Corner accent */}
    <div
      className="absolute bottom-0 right-0 w-0 h-0"
      style={{
        borderLeft: '20px solid transparent',
        borderBottom: `20px solid ${accentColor}`,
        opacity: 0.8,
      }}
    />
  </div>
)

/* ─── Project Card ─────────────────────────── */
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="group flex flex-col"
    style={{
      border: '2px solid #1A3A2A',
      boxShadow: '4px 4px 0px 0px #1A3A2A',
    }}
    whileHover={{
      y: -4,
      boxShadow: `6px 6px 0px 0px ${project.color}`,
      transition: { duration: 0.15 },
    }}
  >
    <BorderGlow
      backgroundColor="#FAFDF0"
      colors={[project.color, '#2D6A4F', '#7B3FE4']}
      glowColor={accentToGlowColor[project.color] ?? '140 80 40'}
      borderRadius={0}
      glowRadius={0}
      glowIntensity={0.85}
      coneSpread={36}
      fillOpacity={0.07}
      className="w-full flex flex-col flex-1"
    >
      <div className="flex flex-col flex-1">
        {/* Thumbnail */}
        <ProjectThumbnail
          title={project.title}
          bgPattern={project.bgPattern}
          accentColor={project.color}
        />

        {/* Card body */}
        <div className="p-5 flex flex-col flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="pixel-tag"
                style={{ borderColor: project.color, boxShadow: `1px 1px 0px 0px ${project.color}` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="font-pixel text-[#1A3A2A] mb-2 flex-1"
            style={{ fontSize: '0.65rem', letterSpacing: '0.05em', lineHeight: 1.6 }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-vt text-[#2D6A4F] mb-4" style={{ fontSize: '1.05rem', lineHeight: 1.5 }}>
            {project.description}
          </p>

          {/* Footer: date + link */}
          <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #E5E7D8' }}>
            <span
              className="font-pixel text-[7px] text-[#2D6A4F] opacity-60"
              style={{ letterSpacing: '0.08em' }}
            >
              {project.date}
            </span>
            <button
              className="font-pixel text-[7px] flex items-center gap-1 transition-colors"
              style={{
                color: project.color,
                textShadow: `0 0 4px ${project.color}`,
                letterSpacing: '0.08em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              VIEW ▶
            </button>
          </div>
        </div>
      </div>
    </BorderGlow>
  </motion.div>
)

/* ─── Projects Page ────────────────────────── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL')

  const filtered = projects.filter(
    p => activeCategory === 'ALL' || p.category.toUpperCase() === activeCategory
  )

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Forest-green pixel trail — sits below all content */}
      <Suspense fallback={null}>
        <PixelTrail
          gridSize={45}
          trailSize={0.09}
          maxAge={220}
          interpolate={5}
          color="#2D6A4F"
          gooeyFilter={{ id: 'projects-pixel-goo', strength: 2 }}
        />
      </Suspense>

      <div className="relative z-10 px-6 py-20 max-w-5xl mx-auto">
      {/* Section badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-label inline-flex mb-6"
      >
        <div
          className="w-2 h-2 bg-[#39FF14] animate-pixel-blink"
          style={{ boxShadow: '0 0 4px #39FF14' }}
        />
        <span className="font-pixel text-[9px] text-[#1A3A2A]" style={{ letterSpacing: '0.15em' }}>
          PORTFOLIO
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10"
      >
        <h1
          className="font-pixel mb-3"
          style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2rem)', letterSpacing: '0.02em', lineHeight: 1.4 }}
        >
          <span className="gradient-text">MY WORKS</span>
        </h1>
        <p className="font-vt text-[#2D6A4F]" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
          A selection of projects spanning design, art, and motion.
        </p>
      </motion.div>

      {/* Category filter */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="pixel-btn font-pixel px-4 py-2 transition-colors"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.12em',
              border: '2px solid #1A3A2A',
              boxShadow:
                activeCategory === cat
                  ? '0px 0px 0px 0px #1A3A2A'
                  : '3px 3px 0px 0px #1A3A2A',
              background: activeCategory === cat ? '#1A3A2A' : '#FAFDF0',
              color: activeCategory === cat ? '#39FF14' : '#1A3A2A',
              transform: activeCategory === cat ? 'translate(3px, 3px)' : undefined,
              textShadow: activeCategory === cat ? '0 0 4px #39FF14' : undefined,
            }}
          >
            {activeCategory === cat && '▶ '}
            {cat}
          </button>
        ))}

        {/* Count */}
        <div
          className="ml-auto flex items-center px-4 py-2 bg-[#F0F4E8]"
          style={{ border: '2px solid #1A3A2A' }}
        >
          <span className="font-pixel text-[7px] text-[#2D6A4F]" style={{ letterSpacing: '0.1em' }}>
            {filtered.length} / {projects.length}
          </span>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="font-pixel text-[#2D6A4F] text-sm" style={{ letterSpacing: '0.1em' }}>
            NO PROJECTS FOUND
          </p>
        </motion.div>
      )}

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="font-vt text-[#2D6A4F] mb-4" style={{ fontSize: '1.2rem' }}>
          More coming soon. Stay tuned!
        </p>
        <div
          className="inline-flex items-center gap-2 px-5 py-2"
          style={{
            border: '2px dashed #2D6A4F',
            background: 'rgba(57,255,20,0.03)',
          }}
        >
          <div className="w-2 h-2 bg-[#39FF14] animate-pixel-blink" style={{ boxShadow: '0 0 4px #39FF14' }} />
          <span className="font-pixel text-[8px] text-[#2D6A4F]" style={{ letterSpacing: '0.1em' }}>
            UPDATING REGULARLY
          </span>
        </div>
      </motion.div>
      </div>
    </div>
  )
}
