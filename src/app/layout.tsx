import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shroomy - Your Personal Anxiety Companion',
  description: 'Feel better with daily exercises designed just for you. Shroomy uses CBT and evidence-based techniques to help you reduce anxiety and build mental resilience.',
  keywords: 'anxiety app, cbt app, mental health app, anxiety relief, cbt journal, stress relief app',
  authors: [{ name: 'Moment Apps' }],
  openGraph: {
    title: 'Shroomy - Your Personal Anxiety Companion',
    description: 'Feel better with daily exercises designed just for you.',
    url: 'https://shroomyapp.com',
    siteName: 'Shroomy',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shroomy - Your Personal Anxiety Companion',
    description: 'Feel better with daily exercises designed just for you.',
    images: ['/images/og-image.png'],
  },
  other: {
    'apple-itunes-app': 'app-id=6737152971',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/app-icon.png" />
        <meta name="theme-color" content="#D7D0FB" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
