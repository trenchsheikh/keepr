import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'keepr - where fantasy football and budgeting meet',
  description: 'Think you can stick to your budget? Let your mates be the ref.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#fffdf7] min-h-screen">
        {children}
      </body>
    </html>
  )
}
