import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Medina Chamber of Commerce',
  description:
    'Grow your business with the Greater Medina Chamber of Commerce. Networking, advocacy, events, and local connections across Medina County.',
  keywords: [
    'Medina Chamber of Commerce',
    'Business Networking',
    'Medina Ohio',
    'Chamber Events',
    'Business Growth',
  ],
  openGraph: {
    title: 'Medina Chamber of Commerce',
    description:
      'Grow your business with the Greater Medina Chamber of Commerce.',
    url: 'https://medinachamber.com',
    siteName: 'Medina Chamber of Commerce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medina Chamber of Commerce',
    description:
      'Grow your business with the Greater Medina Chamber of Commerce.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://medinachamber.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0C1B33" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
