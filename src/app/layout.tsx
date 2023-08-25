import '../styles/globals.scss'
import type { Metadata } from 'next'
import { Rubik, Roboto_Mono } from 'next/font/google'

export const rubik = Rubik({ subsets: ['latin'], display: 'swap', variable: '--font-rubik' })
export const robotoMono = Roboto_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-mono' })

export const metadata: Metadata = {
  title: 'Interactive YAML tutorial',
  description: 'A YAML tutorial for those familiar with JSON.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${rubik.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
