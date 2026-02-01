import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: 'Nervous System Dysregulation Test - Fight or Flight Quiz | Shroomy',
  description:
    'Take this free quiz to find out if your nervous system is stuck in fight-or-flight mode. Learn about nervous system dysregulation and how to reset your nervous system.',
  keywords:
    'nervous system dysregulation test, fight or flight quiz, nervous system reset, regulate nervous system, how to calm nervous system, nervous system dysregulation symptoms',
  openGraph: {
    title: 'Is Your Nervous System Dysregulated? - Free Quiz | Shroomy',
    description:
      'Discover if your body is stuck in fight-or-flight mode with this free quiz. Get personalised tips to regulate your nervous system.',
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
    title: 'Is Your Nervous System Dysregulated? - Free Quiz | Shroomy',
    description:
      'Discover if your body is stuck in fight-or-flight mode with this free quiz.',
    images: ['/images/og-image.png'],
  },
}

const quizSchema = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Nervous System Dysregulation Test',
  description:
    'An 8-question self-assessment quiz to help identify signs of nervous system dysregulation and whether your body is stuck in fight-or-flight mode.',
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    targetName: 'Mental Health',
  },
  assesses: 'nervous system regulation',
  numberOfQuestions: 8,
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
