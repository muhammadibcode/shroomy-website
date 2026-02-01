import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: 'Anxiety Symptoms Test - Could Your Symptoms Be Anxiety? | Shroomy',
  description:
    'Take this free 2-minute anxiety symptoms quiz to find out if your physical symptoms like nausea, dizziness, heartburn, or chest tightness could be caused by anxiety.',
  keywords:
    'anxiety symptoms test, physical symptoms of anxiety quiz, does anxiety cause nausea, can stress cause dizziness, can anxiety cause heartburn, anxiety physical symptoms, anxiety self assessment',
  openGraph: {
    title: 'Could Your Symptoms Be Anxiety? - Free Quiz | Shroomy',
    description:
      'Take this free 2-minute quiz to understand what your body might be telling you. Covers nausea, dizziness, heart palpitations, and more.',
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
    title: 'Could Your Symptoms Be Anxiety? - Free Quiz | Shroomy',
    description:
      'Take this free 2-minute quiz to understand what your body might be telling you.',
    images: ['/images/og-image.png'],
  },
}

const quizSchema = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Anxiety Symptoms Test',
  description:
    'A 10-question self-assessment quiz to help identify whether your physical symptoms could be related to anxiety.',
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    targetName: 'Mental Health',
  },
  assesses: 'anxiety symptoms awareness',
  numberOfQuestions: 10,
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
