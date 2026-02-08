import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: 'Anxiety Symptoms Quiz - Free 2-Min Self Assessment',
  description:
    'Could your symptoms be anxiety? Take this free quiz to understand what your body might be telling you. Instant results.',
  keywords:
    'anxiety symptoms quiz, anxiety test, physical symptoms of anxiety quiz, does anxiety cause nausea, can stress cause dizziness, can anxiety cause heartburn, anxiety physical symptoms, anxiety self assessment',
  alternates: {
    canonical: 'https://shroomyapp.com/anxiety-symptoms-quiz',
  },
  openGraph: {
    title: 'Anxiety Symptoms Quiz - Free 2-Min Self Assessment',
    description:
      'Could your symptoms be anxiety? Take this free quiz to understand what your body might be telling you. Instant results.',
    url: 'https://shroomyapp.com/anxiety-symptoms-quiz',
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
    title: 'Anxiety Symptoms Quiz - Free 2-Min Self Assessment',
    description:
      'Could your symptoms be anxiety? Take this free quiz to understand what your body might be telling you. Instant results.',
    images: ['/images/og-image.png'],
  },
}

const quizSchema = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Could Your Symptoms Be Anxiety?',
  description:
    'A 2-minute quiz to help you understand if your physical symptoms might be related to anxiety.',
  educationalLevel: 'beginner',
  about: {
    '@type': 'MedicalCondition',
    name: 'Anxiety',
  },
}

export default function AnxietyQuizPage() {
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
