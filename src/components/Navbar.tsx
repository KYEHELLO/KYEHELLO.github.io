import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: '首页', path: '/', en: 'HOME' },
  { label: '关于我', path: '/about', en: 'ABOUT' },
  { label: '联系我', path: '/contact', en: 'CONTACT' },
  { label: '作品', path: '/projects', en: 'WORKS' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Desktop nav — fixed top-right */}
      <nav
        className="fixed top-4 right-4 z-40 hidden md:flex flex-col gap-1 bg-[#FAFDF0]"
        style={{
          border: '2px solid #1A3A2A',
          boxShadow: '4px 4px 0px 0px #1A3A2A',
          padding: '0.5rem',
        }}
        aria-label="Main navigation"
      >
        {/* Nav brand */}
        <div
          className="font-pixel text-[8px] text-[#1A3A2A] px-2 py-1 mb-1 border-b-2 border-[#1A3A2A]"
          style={{ letterSpacing: '0.12em' }}
        >
          <span className="gradient-text">KYE</span>
          <span className="neon-text text-[#39FF14] ml-1 animate-pixel-blink">■</span>
        </div>

        {navLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              [
                'block font-pixel text-[8px] px-3 py-2 transition-colors duration-100',
                'border-2',
                isActive
                  ? 'bg-[#1A3A2A] text-[#39FF14] border-[#1A3A2A]'
                  : 'bg-transparent text-[#1A3A2A] border-transparent hover:border-[#1A3A2A] hover:bg-[#F0F4E8]',
              ].join(' ')
            }
            style={{ letterSpacing: '0.08em' }}
          >
            {({ isActive }) => (
              <span className="flex items-center gap-2">
                {isActive && (
                  <span className="text-[#39FF14]" style={{ textShadow: '0 0 4px #39FF14' }}>
                    ▶
                  </span>
                )}
                {link.en}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden fixed top-4 right-4 z-40">
        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#FAFDF0] font-pixel text-[8px] px-3 py-2 text-[#1A3A2A] pixel-btn"
          style={{
            border: '2px solid #1A3A2A',
            boxShadow: '3px 3px 0px 0px #1A3A2A',
            letterSpacing: '0.08em',
          }}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? '✕ CLOSE' : '☰ MENU'}
        </button>

        {/* Dropdown */}
        {open && (
          <nav
            className="absolute top-full right-0 mt-1 bg-[#FAFDF0] flex flex-col"
            style={{
              border: '2px solid #1A3A2A',
              boxShadow: '4px 4px 0px 0px #1A3A2A',
              minWidth: 140,
            }}
          >
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  [
                    'block font-pixel text-[8px] px-4 py-3 transition-colors',
                    isActive
                      ? 'bg-[#1A3A2A] text-[#39FF14]'
                      : 'text-[#1A3A2A] hover:bg-[#F0F4E8]',
                  ].join(' ')
                }
                style={{ letterSpacing: '0.08em', borderBottom: '1px solid #E5E7D8' }}
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-2">
                    {isActive && <span className="text-[#39FF14]">▶</span>}
                    {link.en}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </>
  )
}
