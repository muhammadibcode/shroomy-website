import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://shroomyapp.com'),
  title: 'Shroomy: #1 AI Anxiety & CBT App - Daily Exercises',
  description:
    'Reduce anxiety with personalized CBT exercises. AI-powered journaling, breathing techniques & insights. 4.8★ rated. Free to try.',
  keywords: 'anxiety app, cbt app, mental health app, anxiety relief, cbt journal, stress relief app',
  authors: [{ name: 'Moment Apps' }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://shroomyapp.com',
  },
  openGraph: {
    title: 'Shroomy: #1 AI Anxiety & CBT App - Daily Exercises',
    description:
      'Reduce anxiety with personalized CBT exercises. AI-powered journaling, breathing techniques & insights. 4.8★ rated. Free to try.',
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
    title: 'Shroomy: #1 AI Anxiety & CBT App - Daily Exercises',
    description:
      'Reduce anxiety with personalized CBT exercises. AI-powered journaling, breathing techniques & insights. 4.8★ rated. Free to try.',
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
