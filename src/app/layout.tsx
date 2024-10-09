import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import 'src/styles/global.sass'
import { Providers } from './Providers'

import localFont from 'next/font/local'
import { Header } from 'src/components/Header/Header'
import { CLIENT_URL } from 'src/constants/constants'
import { SITE_NAME } from 'src/constants/seo.constants'

const bold = localFont({
  src: './fonts/Manrope-Bold.ttf',
  variable: '--font-bold',
  weight: '700',
})
const regular = localFont({
  src: './fonts/Manrope-Regular.ttf',
  variable: '--font-regular',
  weight: '400',
})
const medium = localFont({
  src: './fonts/Manrope-Medium.ttf',
  variable: '--font-medium',
  weight: '500',
})

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  alternates: {
    canonical: CLIENT_URL,
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(CLIENT_URL),
  description: 'Generated by create next app',
  manifest: '/manifest.json',
  publisher: SITE_NAME,
  authors: {
    name: SITE_NAME,
    url: 'http://mk.ru',
  },
  applicationName: SITE_NAME,
  // icons: {
  //   icon: '/next.svg',
  //   shortcut: '/next.svg',
  //   // 256x256
  //   apple: '/touch-icons/256x256.png',
  //   other: {
  //     rel: 'touch-icons',
  //     url: '/touch-icons/256x256.png',
  //     sizes: '256x256',
  //     type: 'image/png',
  //   },
  // },
  // openGraph: {
  //   type: 'website',
  //   locale: 'en_US',
  //   siteName: SITE_NAME,
  //   images: [
  //     {
  //       url: '/og-image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: SITE_NAME,
  //     },
  //   ],
  //   emails: ['kirillvegele10@gmail.com'],
  // },
}
export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={(bold.className, regular.className, medium.className)}>
        <Providers>
          <div className='wrapper'>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  )
}
