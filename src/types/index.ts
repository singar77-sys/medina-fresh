export interface BrandColors {
  oxford: string
  cambridge: string
  coquelicot: string
  emerald: string
}

export interface PageMeta {
  title: string
  description: string
  image?: string
  url?: string
}

export interface ChamberEvent {
  id: string
  title: string
  date: Date
  location: string
  description: string
  image?: string
}

export interface Member {
  id: string
  name: string
  category: string
  website?: string
  phone?: string
}

export interface NavigationItem {
  label: string
  href: string
}
