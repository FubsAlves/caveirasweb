import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'

const flame = localFont({
  src: [
    {
      path: '../../public/fonts/flame/Flame-Sans.otf',
      weight: '200',
    },
    {
      path: '../../public/fonts/flame/Flame-Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/flame/Flame-Bold.woff',
      weight: '700'
    },
    {
      path: '../../public/fonts/flame/Flame-Condensed.otf',
      weight: '900'
    }
  ],
  variable: '--font-flame'
})



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
    <html lang="pt-BR" className={`${flame.variable} font-sans`}>
      <body className='w-screen h-screen'>{children}</body>
    </html>
  )
}
