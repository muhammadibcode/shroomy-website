import type { Metadata } from 'next'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResultsClient from './ResultsClient'

export const metadata: Metadata = {
  title: 'Your Nervous System Quiz Results | Shroomy',
  description:
    'View your nervous system dysregulation quiz results and get personalised techniques for calming your fight-or-flight response.',
  openGraph: {
    title: 'My Nervous System Quiz Results | Shroomy',
    description:
      'I took the Shroomy nervous system quiz. Take it yourself to discover if your body is stuck in fight-or-flight mode.',
    url: 'https://shroomyapp.com/nervous-system-quiz/results',
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
    title: 'My Nervous System Quiz Results | Shroomy',
    description:
      'I took the Shroomy nervous system quiz. Take it yourself to discover if your body is stuck in fight-or-flight mode.',
    images: ['/images/og-image.png'],
  },
}

export default function NervousSystemResultsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense
        fallback={
          <div className="min-h-[80vh] flex items-center justify-center">
            <p className="text-black/50 font-body">Loading results...</p>
          </div>
        }
      >
        <ResultsClient />
      </Suspense>
      <Footer />
    </main>
  )
}
