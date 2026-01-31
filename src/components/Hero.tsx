import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-8 px-8 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title with overlapping mascot */}
        <div className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display">
            <span className="block">A new kind</span>
            <span className="block -mt-2 md:-mt-4 lg:-mt-5.5">of mental</span>
            <span className="block -mt-2 md:-mt-4 lg:-mt-5.5">health app</span>
          </h1>
          {/* Mascot overlapping bottom of text */}
          <div className="flex justify-center -mt-10 md:-mt-16 relative z-10">
            <Image
              src="/images/shroomy-waving.png"
              alt="Shroomy waving"
              width={350}
              height={350}
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
