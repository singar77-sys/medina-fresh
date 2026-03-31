export const SITE_NAME = 'Medina Chamber of Commerce'
export const SITE_URL = 'https://medinachamber.com'

export const BRAND_COLORS = {
  oxford: '#0C1B33',
  cambridge: '#83BCA9',
  coquelicot: '#FF4000',
  emerald: '#005450',
} as const

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Membership', href: '/member-benefits' },
  { label: 'Events', href: '/events' },
  { label: 'Advocacy', href: '/advocacy' },
  { label: 'Contact', href: '/contact' },
] as const
