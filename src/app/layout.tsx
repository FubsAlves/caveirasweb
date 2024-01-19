import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@mantine/carousel/styles.css';
import '../styles/globals.scss';
import Header from '@/components/header'
import { ApolloWrapper } from "../lib/apollo-provider";
import Footer from '@/components/footer';
import { MantineProvider } from '@mantine/core';

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
      <body>
        <ApolloWrapper>
          <MantineProvider>
            <Header/>
            {children}
            <Footer/>
          </MantineProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
