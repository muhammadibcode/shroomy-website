'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Insights() {
  const sectionRef = useRef<HTMLElement>(null)
  const insightUnlockedRef = useRef<HTMLDivElement>(null)
  const progressInsightsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Calculate progress: 0 when section enters viewport, 1 when it exits top
      const totalTravel = viewportHeight + rect.height
      const progress = (viewportHeight - rect.top) / totalTravel
      const clampedProgress = Math.max(0, Math.min(1, progress))

      // Center the effect around 0.5 so images start near their base position
      const offset = (clampedProgress - 0.5) * 2 // Range: -1 to 1

      // Subtle movement: max ±20px
      const maxShift = 20

      if (insightUnlockedRef.current) {
        insightUnlockedRef.current.style.transform = `translateY(${offset * maxShift}px)`
      }
      if (progressInsightsRef.current) {
        progressInsightsRef.current.style.transform = `translateY(${offset * -maxShift}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Rounded rectangle with lavender background */}
        <div className="relative">
          {/* Background - clipped to rounded rectangle */}
          <div className="absolute inset-0 rounded-[300px] overflow-hidden">
            <Image
              src="/gradients/lavender.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content - can overflow the rectangle bounds */}
          <div className="relative z-10 grid lg:grid-cols-2 items-center gap-8 px-8 md:px-12 lg:px-16 py-2 md:py-3 lg:py-4">
            {/* Left: Phone mockups */}
            <div className="flex justify-center items-center">
              {/* insight-unlocked - emerges from the top, in front */}
              <div className="flex-shrink-0 -translate-y-16 lg:translate-y-8 lg:translate-x-5 relative z-20">
                <div ref={insightUnlockedRef} className="will-change-transform transition-none">
                  <Image
                    src="/mockups/insight-unlocked.png"
                    alt="Insight unlocked"
                    width={230}
                    height={470}
                    className="drop-shadow-2xl w-[180px] h-auto lg:w-[230px]"
                  />
                </div>
              </div>
              {/* progress-insights - emerges from the top further, behind insight-unlocked, hidden on mobile */}
              <div className="hidden lg:block flex-shrink-0 lg:-translate-y-24 -ml-24 relative z-10">
                <div ref={progressInsightsRef} className="will-change-transform transition-none">
                  <Image
                    src="/mockups/progress-insights.png"
                    alt="Your progress and insights"
                    width={420}
                    height={850}
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right: Title */}
            <div className="text-center lg:text-left -mt-10 lg:mt-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
                Learn things
                <br />
                you didn't know
                <br />
                about yourself
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
