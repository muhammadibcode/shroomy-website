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

          {/* Download buttons - mobile only */}
          <div className="flex md:hidden flex-col items-center gap-3 mt-4 w-56 mx-auto">
            <a
              href="https://apps.apple.com/us/app/shroomy-daily-stress-relief/id6737152971"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-lavender text-black px-6 py-3 rounded-pill text-base font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
            >
              Download (iOS)
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=uk.co.resetapp.reset"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-lavender text-black px-6 py-3 rounded-pill text-base font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
            >
              Download (Android)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
