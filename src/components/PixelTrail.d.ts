interface GooeyFilterConfig {
  id: string
  strength: number
}

interface PixelTrailProps {
  gridSize?: number
  trailSize?: number
  maxAge?: number
  interpolate?: number
  easingFunction?: (x: number) => number
  canvasProps?: Record<string, unknown>
  glProps?: Record<string, unknown>
  gooeyFilter?: GooeyFilterConfig
  color?: string
  className?: string
}

declare const PixelTrail: (props: PixelTrailProps) => JSX.Element

export default PixelTrail
