// Shared TypeScript type definitions

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  url?: string
  repo?: string
  imageUrl?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon?: string
}

export interface NavItem {
  label: string
  path: string
}
