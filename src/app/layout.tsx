import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A_in_spiring',
  description: 'Tech blog for aspiring developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary-100 text-light-100">{children}</body>
    </html>
  )
}
