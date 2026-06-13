import { useState } from 'react'
import { motion } from 'framer-motion'
import BorderGlow from '@/components/BorderGlow'

/* ─── Pixel Avatar ─────────────────────────── */
const PixelAvatar = () => (
  <div
    className="relative mx-auto"
    style={{
      width: 120,
      height: 120,
      border: '3px solid #1A3A2A',
      boxShadow: '6px 6px 0px 0px #39FF14',
      background: '#F0F4E8',
      overflow: 'hidden',
    }}
  >
    {/* Pixel art avatar: simplified face */}
    <svg
      width="120"
      height="120"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Background */}
      <rect width="30" height="30" fill="#F0F4E8" />
      {/* Hair */}
      <rect x="7" y="3" width="16" height="6" fill="#1A1A1A" />
      <rect x="5" y="5" width="4" height="8" fill="#1A1A1A" />
      <rect x="21" y="5" width="4" height="8" fill="#1A1A1A" />
      {/* Face */}
      <rect x="7" y="8" width="16" height="13" fill="#FFDAB9" />
      <rect x="5" y="10" width="20" height="9" fill="#FFDAB9" />
      {/* Eyes */}
      <rect x="10" y="12" width="3" height="3" fill="#1A1A1A" />
      <rect x="17" y="12" width="3" height="3" fill="#1A1A1A" />
      <rect x="10" y="12" width="1" height="1" fill="#FFFFFF" />
      <rect x="17" y="12" width="1" height="1" fill="#FFFFFF" />
      {/* Blush */}
      <rect x="7" y="15" width="3" height="2" fill="#FF9999" opacity="0.7" />
      <rect x="20" y="15" width="3" height="2" fill="#FF9999" opacity="0.7" />
      {/* Smile */}
      <rect x="11" y="17" width="8" height="1" fill="#1A1A1A" />
      <rect x="10" y="16" width="2" height="1" fill="#1A1A1A" />
      <rect x="18" y="16" width="2" height="1" fill="#1A1A1A" />
      {/* Neck */}
      <rect x="13" y="21" width="4" height="3" fill="#FFDAB9" />
      {/* Body */}
      <rect x="5" y="24" width="20" height="6" fill="#2D6A4F" />
      {/* Logo on shirt */}
      <rect x="13" y="26" width="4" height="2" fill="#39FF14" />
      {/* Ground shadow */}
      <rect x="7" y="29" width="16" height="1" fill="rgba(26,58,42,0.15)" />
    </svg>

    {/* Neon corner accent */}
    <div
      className="absolute bottom-0 right-0 w-5 h-5 bg-[#39FF14]"
      style={{ boxShadow: '0 0 6px #39FF14' }}
    />
  </div>
)

/* ─── Social link card ─────────────────────── */
const SocialCard = ({
  icon,
  platform,
  handle,
  href,
  color,
  delay = 0,
}: {
  icon: React.ReactNode
  platform: string
  handle: string
  href: string
  color: string
  delay?: number
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -4 }}
    className="flex items-center gap-4 p-4 bg-[#FAFDF0] group"
    style={{
      border: `2px solid ${color}`,
      boxShadow: `4px 4px 0px 0px ${color}`,
      textDecoration: 'none',
      transition: 'box-shadow 0.1s, transform 0.1s',
    }}
  >
    {/* Icon box */}
    <div
      className="w-12 h-12 flex items-center justify-center shrink-0"
      style={{
        background: color,
        border: '1px solid #1A3A2A',
      }}
    >
      {icon}
    </div>
    {/* Text */}
    <div>
      <p
        className="font-pixel text-[8px] text-[#1A3A2A] mb-1"
        style={{ letterSpacing: '0.1em' }}
      >
        {platform}
      </p>
      <p className="font-vt text-[#2D6A4F]" style={{ fontSize: '1.1rem' }}>
        {handle}
      </p>
    </div>
    {/* Arrow */}
    <span
      className="ml-auto font-pixel text-[10px] group-hover:translate-x-1 transition-transform"
      style={{ color }}
    >
      ▶
    </span>
  </motion.a>
)

/* ─── WeChat QR placeholder ─────────────────── */
const WechatQR = () => (
  <div
    className="w-28 h-28 bg-white flex items-center justify-center"
    style={{ border: '2px solid #1A3A2A', boxShadow: '3px 3px 0px 0px #1A3A2A' }}
  >
    {/* Pixel QR art (decorative) */}
    <svg
      width="96"
      height="96"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Top-left finder */}
      <rect x="1" y="1" width="7" height="7" fill="#1A1A1A" />
      <rect x="2" y="2" width="5" height="5" fill="white" />
      <rect x="3" y="3" width="3" height="3" fill="#1A1A1A" />
      {/* Top-right finder */}
      <rect x="16" y="1" width="7" height="7" fill="#1A1A1A" />
      <rect x="17" y="2" width="5" height="5" fill="white" />
      <rect x="18" y="3" width="3" height="3" fill="#1A1A1A" />
      {/* Bottom-left finder */}
      <rect x="1" y="16" width="7" height="7" fill="#1A1A1A" />
      <rect x="2" y="17" width="5" height="5" fill="white" />
      <rect x="3" y="18" width="3" height="3" fill="#1A1A1A" />
      {/* Data dots (random-ish pattern) */}
      {[
        [10, 1], [12, 1], [10, 3], [11, 3], [13, 3],
        [10, 5], [12, 5], [10, 7], [11, 7],
        [1, 10], [3, 10], [5, 10], [7, 10],
        [10, 10], [12, 10], [14, 10], [16, 10], [18, 10], [20, 10], [22, 10],
        [1, 12], [5, 12], [10, 12], [12, 12], [14, 12],
        [16, 12], [20, 12], [22, 12],
        [3, 14], [7, 14], [10, 14], [11, 14], [13, 14],
        [16, 14], [18, 14],
        [10, 16], [12, 16], [14, 16], [16, 16],
        [10, 18], [11, 18], [16, 18], [20, 18],
        [10, 20], [12, 20], [14, 20], [16, 20], [20, 20],
        [10, 22], [11, 22], [14, 22], [16, 22], [18, 22], [22, 22],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="1" height="1" fill="#1A1A1A" />
      ))}
    </svg>
  </div>
)

/* ─── Contact Page ─────────────────────────── */
export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Kyedesign2022@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      {/* Section badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-label inline-flex mb-10"
      >
        <div
          className="w-2 h-2 bg-[#39FF14] animate-pixel-blink"
          style={{ boxShadow: '0 0 4px #39FF14' }}
        />
        <span className="font-pixel text-[9px] text-[#1A3A2A]" style={{ letterSpacing: '0.15em' }}>
          CONTACT
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Avatar + bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Avatar */}
          <div className="mb-8">
            <PixelAvatar />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-6"
            >
              <h1
                className="font-pixel gradient-text mb-2"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', letterSpacing: '0.05em' }}
              >
                KYE LIU
              </h1>
              <p className="font-vt text-[#2D6A4F]" style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                Designer · Creator
              </p>
            </motion.div>
          </div>

          {/* Quick info */}
          <div className="space-y-3 mb-8">
            {[
              { key: 'STATUS', value: 'AVAILABLE FOR WORK', color: '#39FF14' },
              { key: 'LOCATION', value: 'CHINA · REMOTE OK', color: '#A78BFA' },
              { key: 'RESPONSE', value: 'WITHIN 24H', color: '#FFD700' },
            ].map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-2 h-2 shrink-0"
                  style={{ background: item.color, boxShadow: `0 0 4px ${item.color}` }}
                />
                <span className="font-pixel text-[7px] text-[#2D6A4F]" style={{ letterSpacing: '0.1em' }}>
                  {item.key}:
                </span>
                <span
                  className="font-pixel text-[7px]"
                  style={{ color: item.color, textShadow: `0 0 4px ${item.color}`, letterSpacing: '0.08em' }}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Email copy */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-between gap-3 p-4 bg-[#1A3A2A] group transition-all"
              style={{
                border: '2px solid #1A3A2A',
                boxShadow: copied ? '0px 0px 0px 0px #39FF14' : '4px 4px 0px 0px #39FF14',
                transform: copied ? 'translate(4px,4px)' : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-pixel text-[9px] text-[#39FF14]" style={{ textShadow: '0 0 6px #39FF14' }}>
                  ✉
                </span>
                <span className="font-vt text-[#39FF14] text-lg" style={{ textShadow: '0 0 4px #39FF14' }}>
                  Kyedesign2022@gmail.com
                </span>
              </div>
              <span
                className="font-pixel text-[7px] text-[#39FF14] shrink-0"
                style={{ letterSpacing: '0.08em' }}
              >
                {copied ? 'COPIED!' : 'COPY'}
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Social links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1"
            style={{ border: '2px solid #1A3A2A', boxShadow: '2px 2px 0px 0px #1A3A2A', background: '#F0F4E8' }}
          >
            <span className="font-pixel text-[8px] text-[#1A3A2A]" style={{ letterSpacing: '0.12em' }}>
              FIND ME ON
            </span>
          </div>

          {/* ── GitHub with BorderGlow ── */}

          {/* Wrap all three social cards in one BorderGlow panel */}
          <div style={{ border: '2px solid #1A3A2A', boxShadow: '4px 4px 0px 0px #1A3A2A' }}>
            <BorderGlow
              backgroundColor="#FAFDF0"
              colors={['#2D6A4F', '#7B3FE4', '#39FF14']}
              glowColor="140 80 35"
              borderRadius={0}
              glowRadius={0}
              glowIntensity={0.9}
              coneSpread={40}
              fillOpacity={0.07}
              className="w-full"
            >
              <div className="space-y-4 p-3">
                {/* GitHub */}
                <SocialCard
                  href="https://github.com"
                  platform="GITHUB"
                  handle="@kyedesign"
                  color="#1A3A2A"
                  delay={0.2}
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#FAFDF0">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  }
                />

                {/* WeChat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-4 bg-[#FAFDF0]"
                  style={{ border: '2px solid #07C160', boxShadow: '4px 4px 0px 0px #07C160' }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center shrink-0"
                      style={{ background: '#07C160', border: '1px solid #1A3A2A' }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8.5 2C4.4 2 1 4.9 1 8.5c0 2 1.1 3.8 2.8 5l-.4 1.3c0 .1 0 .2.1.2.1 0 .1 0 .2-.1l1.7-1c.7.2 1.4.3 2.1.3 4.1 0 7.5-2.9 7.5-6.5S12.6 2 8.5 2zm-2.3 7.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm4.6 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zM16 10c3.3 0 6 2.2 6 5s-2.7 5-6 5c-.6 0-1.2-.1-1.7-.2l-1.4.8c-.1 0-.1.1-.2.1-.1 0-.2-.1-.1-.2l.3-1.1C11.9 18.5 11 17.3 11 15c0-2.8 2.7-5 5-5zm-1.8 4.4c-.4 0-.7.3-.7.7s.3.7.7.7.7-.3.7-.7-.3-.7-.7-.7zm3.6 0c-.4 0-.7.3-.7.7s.3.7.7.7.7-.3.7-.7-.3-.7-.7-.7z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-pixel text-[8px] text-[#1A3A2A] mb-1" style={{ letterSpacing: '0.1em' }}>
                        WECHAT
                      </p>
                      <p className="font-vt text-[#2D6A4F]" style={{ fontSize: '1.1rem' }}>
                        Scan QR to connect
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <WechatQR />
                  </div>
                </motion.div>

                {/* 小红书 */}
                <SocialCard
                  href="https://xiaohongshu.com"
                  platform="小红书 · REDNOTE"
                  handle="@kyedesign"
                  color="#FF2442"
                  delay={0.4}
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="2" fill="white" fillOpacity="0.2"/>
                      <rect x="5" y="7" width="3" height="10" fill="white"/>
                      <rect x="11" y="7" width="3" height="10" fill="white"/>
                      <rect x="5" y="7" width="9" height="3" fill="white"/>
                      <rect x="17" y="7" width="2" height="2" fill="white"/>
                      <rect x="17" y="11" width="2" height="6" fill="white"/>
                    </svg>
                  }
                />
              </div>
            </BorderGlow>
          </div>

          {/* Message note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 p-4"
            style={{
              border: '2px dashed #2D6A4F',
              background: 'rgba(57,255,20,0.03)',
            }}
          >
            <p
              className="font-pixel text-[7px] text-[#2D6A4F] mb-2"
              style={{ letterSpacing: '0.1em' }}
            >
              📬 OPEN FOR:
            </p>
            <div className="flex flex-wrap gap-2">
              {['COLLABORATION', 'FREELANCE', 'FULL-TIME', 'CHAT'].map(tag => (
                <span key={tag} className="pixel-tag pixel-tag-neon">{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
