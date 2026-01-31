import Image from 'next/image'

export default function Features() {
  return (
    <section className="py-24 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Feature 1: Voice Chat (mockup right) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-display mb-6">
            Talk it out
            <br />
            anytime
          </h2>

            <p className="text-lg text-black max-w-lg">
              Voice or text—Shroomy listens without judgment. Get support whenever you need it, wherever you are.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <Image
              src="/mockups/voice-chat.png"
              alt="Voice chat with Shroomy"
              width={280}
              height={570}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Feature 2: Insight Unlocked (mockup left) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/mockups/insight-unlocked.png"
              alt="Insight unlocked screen"
              width={280}
              height={570}
              className="drop-shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Discover what&apos;s
              <br />
              beneath
            </h2>

            <p className="text-lg text-black max-w-lg">
              Uncover patterns you didn&apos;t know you had. Shroomy helps you understand the &quot;why&quot; behind your feelings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
