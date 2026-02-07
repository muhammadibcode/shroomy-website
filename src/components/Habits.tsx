'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Habits() {
  const sectionRef = useRef<HTMLElement>(null)
  const myPlanRef = useRef<HTMLDivElement>(null)
  const taskCompleteRef = useRef<HTMLDivElement>(null)

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

      if (myPlanRef.current) {
        myPlanRef.current.style.transform = `translateY(${offset * maxShift}px)`
      }
      if (taskCompleteRef.current) {
        taskCompleteRef.current.style.transform = `translateY(${offset * -maxShift}px)`
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
          <div className="absolute top-0 left-0 right-0 -bottom-[75px] rounded-[300px] overflow-hidden">
            <Image
              src="/gradients/lavender.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content - can overflow the rectangle bounds */}
          <div className="relative z-10 grid lg:grid-cols-2 items-center gap-8 px-2 md:px-12 lg:px-16 py-2 md:py-3 lg:py-4">
            {/* Left: Phone mockups */}
            <div className="flex justify-center items-center">
              {/* my-plan - emerges from the top */}
              <div className="flex-shrink-0 -translate-y-16 lg:-translate-y-32">
                <div ref={myPlanRef} className="will-change-transform transition-none">
                  <Image
                    src="/mockups/my-plan.png"
                    alt="Your personalized daily plan"
                    width={280}
                    height={570}
                    className="drop-shadow-2xl w-[230px] h-auto lg:w-[280px]"
                  />
                </div>
              </div>
              {/* task-complete - emerges from the bottom, hidden on mobile */}
              <div className="hidden lg:block flex-shrink-0 lg:translate-y-32 -ml-4">
                <div ref={taskCompleteRef} className="will-change-transform transition-none">
                  <Image
                    src="/mockups/task-complete.png"
                    alt="Exercise completed"
                    width={240}
                    height={490}
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right: Title */}
            <div className="text-center lg:text-left -mt-24 lg:mt-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
                A plan
                <br />
                for your anxiety
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
