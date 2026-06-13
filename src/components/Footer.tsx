export default function Footer() {
  return (
    <footer
      className="w-full mt-auto py-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ borderTop: '2px solid #1A3A2A' }}
    >
      {/* Left: brand */}
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-6 bg-[#1A3A2A] flex items-center justify-center"
          style={{ boxShadow: '2px 2px 0px 0px #39FF14' }}
        >
          <span className="font-pixel text-[7px] text-[#39FF14]">K</span>
        </div>
        <span className="font-pixel text-[8px] text-[#1A3A2A]" style={{ letterSpacing: '0.1em' }}>
          KYE LIU
        </span>
      </div>

      {/* Center: copyright */}
      <p className="font-pixel text-[7px] text-[#2D6A4F] opacity-60" style={{ letterSpacing: '0.08em' }}>
        © 2024 · MADE WITH ♥
      </p>

      {/* Right: status pixel */}
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 bg-[#39FF14] animate-pixel-blink"
          style={{ boxShadow: '0 0 4px #39FF14' }}
        />
        <span className="font-pixel text-[7px] text-[#2D6A4F]" style={{ letterSpacing: '0.1em' }}>
          ONLINE
        </span>
      </div>
    </footer>
  )
}
