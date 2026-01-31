'use client'

import { useEffect, useRef } from 'react'

const reviews = [
  {
    text: "The AI features are accurate but still personable. Many times with the insightful questions I've thought \"wow, you really get it\" and to someone with anxiety that can be invaluable.",
    author: "KHWhitey",
  },
  {
    text: "This app is my bff. Anytime my anxiety is out of control I go to this amazing app!",
    author: "Smart Moms",
  },
  {
    text: "I love it so much it actually helps me pour out all my emotions and get it off my chest and it understands me more than I even understand myself.",
    author: "hannah spitzer",
  },
  {
    text: "Its so different than every other app for anxiety, this one forces you to deal and process your emotions in such a positive way.",
    author: "abraham",
  },
  {
    text: "Having that external perspective available at anytime is such a help. I consider myself pretty self aware already but this really helps.",
    author: "Rudindustries",
  },
  {
    text: "It really helps me when my Therapist isn't available. I made a lot of progress thanks to him.",
    author: "Caterina Andreoli",
  },
  {
    text: "Daily highlights are inspired and the ability to look at trends is very insightful. This app is clean, dives deep enough to help, but not so invasive that it's crippling.",
    author: "ChaosCon",
  },
  {
    text: "It will analyze what you said, point out what your limiting beliefs are, tell you your cognitive distortions, and then makes you rewrite what you really know is happening.",
    author: "TheSillySalmon",
  },
]

function ReviewCard({ text, author }: { text: string; author: string }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-card p-6 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)]">
      <img src="/images/five-stars.png" alt="5 stars" className="h-5 mb-3" />
      <p className="text-black text-sm leading-relaxed mb-4">
        &quot;{text}&quot;
      </p>
      <p className="text-xs text-black">
        — {author} on the App Store
      </p>
    </div>
  )
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Calculate progress: 0 when section enters viewport, 1 when it exits top
      const totalTravel = viewportHeight + rect.height
      const progress = (viewportHeight - rect.top) / totalTravel
      const clampedProgress = Math.max(0, Math.min(1, progress))

      // Translate the carousel left as user scrolls down
      const parentWidth = trackRef.current.parentElement?.clientWidth || 0
      const maxScroll = trackRef.current.scrollWidth - parentWidth
      trackRef.current.style.transform = `translateX(-${clampedProgress * maxScroll}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center">
          Loved by 10,000+ users
        </h2>
      </div>

      {/* Scroll-linked carousel */}
      <div className="overflow-hidden px-8">
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}
