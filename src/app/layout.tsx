import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Inter, JetBrains_Mono, Passion_One, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from '@/components/layout/Navbar'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})
const passionOne = Passion_One({
  subsets: ['latin'],
  weight: '900',
  variable: '--font-passion-one',
})

const humane = localFont({
  src: [
    { path: '../fonts/Humane/Humane-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/Humane/Humane-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-humane-face',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Alice Karlén - Frontend Developer',
    template: '%s - Alice Karlén',
  },
  description:
    'Frontend development student at Chas Academy in Stockholm, looking for an internship from November 2026 to April 2027.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${passionOne.variable} ${humane.variable}`}
    >
      <body className='bg-cream font-sans text-ink antialiased'>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
