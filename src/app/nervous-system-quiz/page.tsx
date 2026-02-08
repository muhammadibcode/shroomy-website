import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: 'Nervous System Quiz - Are You Stuck in Fight or Flight?',
  description:
    'Is your nervous system dysregulated? Take this free quiz to find out if you\'re stuck in fight-or-flight mode. Get personalized tips.',
  keywords:
    'nervous system quiz, nervous system reset, dysregulated nervous system, fight or flight quiz, regulate nervous system, how to calm nervous system, nervous system dysregulation symptoms',
  alternates: {
    canonical: 'https://shroomyapp.com/nervous-system-quiz',
  },
  openGraph: {
    title: 'Nervous System Quiz - Are You Stuck in Fight or Flight?',
    description:
      'Is your nervous system dysregulated? Take this free quiz to find out if you\'re stuck in fight-or-flight mode. Get personalized tips.',
    url: 'https://shroomyapp.com/nervous-system-quiz',
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
    title: 'Nervous System Quiz - Are You Stuck in Fight or Flight?',
    description:
      'Is your nervous system dysregulated? Take this free quiz to find out if you\'re stuck in fight-or-flight mode. Get personalized tips.',
    images: ['/images/og-image.png'],
  },
}

const quizSchema = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Is Your Nervous System Dysregulated?',
  description:
    'Discover if your body is stuck in fight-or-flight mode with this quick assessment.',
  educationalLevel: 'beginner',
  about: {
    '@type': 'MedicalCondition',
    name: 'Nervous System Dysregulation',
  },
}

export default function NervousSystemQuizPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      <div className="pt-20">
        <QuizClient />
      </div>
      <Footer />
    </main>
  )
}
