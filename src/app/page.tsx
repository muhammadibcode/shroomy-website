import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Habits from '@/components/Habits'
import Exercises from '@/components/Exercises'
import Insights from '@/components/Insights'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Shroomy',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '10000',
  },
  description:
    'AI-powered anxiety companion with personalized CBT exercises, journaling, and therapeutic support.',
  downloadUrl: [
    'https://apps.apple.com/us/app/shroomy-daily-stress-relief/id6737152971',
    'https://play.google.com/store/apps/details?id=uk.co.resetapp.reset',
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <Header />
      <Hero />
      <Habits />
      <Exercises />
      <Insights />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}
