import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'Caveiras Burguer',
  description: 'Peça Já um CB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
