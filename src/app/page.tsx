import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Habits from '@/components/Habits'
import Exercises from '@/components/Exercises'
import Insights from '@/components/Insights'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
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
