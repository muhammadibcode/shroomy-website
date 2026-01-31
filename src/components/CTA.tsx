import Image from 'next/image'

export default function CTA() {
  return (
    <section className="relative py-24 px-8 md:px-12 lg:px-16 overflow-hidden">
      {/* Lavender background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gradients/lavender.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title with overlapping mascot */}
        <div className="relative">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display">
            <span className="block">Start feeling</span>
            <span className="block -mt-1 md:-mt-3 lg:-mt-5.5">better today</span>
          </h2>
          {/* Mascot overlapping bottom of text */}
          <div className="flex justify-center -mt-4 md:-mt-8 relative z-10">
            <Image
              src="/images/shroomy-celebrating.png"
              alt="Shroomy celebrating"
              width={160}
              height={160}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
