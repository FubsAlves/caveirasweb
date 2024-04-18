import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@mantine/carousel/styles.css';
import '../styles/globals.scss';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import Header from '@/components/header'
import { ApolloWrapper } from "../lib/apollo-provider";
import Footer from '@/components/footer';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google'

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
  description: 'Peça Já um CB!',

  
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <head>
      <link
        rel="icon"
        href="/fav.webp"
        type="image/webp"
        sizes="240x240"
        />
      </head>
      <body className='bg-white'>
        <ApolloWrapper>
          <MantineProvider theme={{fontFamily: flame.style.fontFamily}}>
            <Notifications position='top-center' zIndex={2001}/>
            <Header/>
            {children}
            <GoogleAnalytics gaId="G-Z7268PL9YB" />
            <Analytics/>
            <SpeedInsights/>
            <Footer/>
          </MantineProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
