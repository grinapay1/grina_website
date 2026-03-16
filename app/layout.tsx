import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const viewport: Viewport = {
  themeColor: '#2D5016',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'GrinaHomes - Energy-Intelligent Prefab Homes | Homes That Pay You',
  description: 'Own an energy-intelligent prefab home in Estonia & Lithuania. Built in 8 weeks, earn €2,500/year from automated energy trading. No solar panels needed. Reserve now with €5K early bird discount.',
  keywords: ['prefab homes', 'energy trading', 'sustainable housing', 'Estonia', 'Lithuania', 'passive income', 'smart homes', 'battery storage'],
  openGraph: {
    title: 'GrinaHomes - Homes That Pay You €2,500/Year',
    description: 'Energy-intelligent prefab homes in the Baltics. Built in 8 weeks. Earn passive income from day one.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
