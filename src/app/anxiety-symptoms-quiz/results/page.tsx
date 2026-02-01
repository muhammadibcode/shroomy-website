import type { Metadata } from 'next'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResultsClient from './ResultsClient'

export const metadata: Metadata = {
  title: 'Your Anxiety Symptoms Quiz Results | Shroomy',
  description:
    'View your anxiety symptoms quiz results and get personalised recommendations for managing physical symptoms of anxiety.',
  openGraph: {
    title: 'My Anxiety Symptoms Quiz Results | Shroomy',
    description:
      'I took the Shroomy anxiety symptoms quiz. Take it yourself to see how anxiety might be affecting your body.',
    url: 'https://shroomyapp.com/anxiety-symptoms-quiz/results',
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
    title: 'My Anxiety Symptoms Quiz Results | Shroomy',
    description:
      'I took the Shroomy anxiety symptoms quiz. Take it yourself to see how anxiety might be affecting your body.',
    images: ['/images/og-image.png'],
  },
}

export default function AnxietyResultsPage() {
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
