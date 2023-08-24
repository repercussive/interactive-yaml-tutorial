import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interactive YAML tutorial',
  description: 'A YAML tutorial for those familiar with JSON.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  )
}
