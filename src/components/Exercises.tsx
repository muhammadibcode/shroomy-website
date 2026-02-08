import Image from 'next/image'

const exercises = [
  { icon: '/icons/heart.png', label: 'Gratitude journaling' },
  { icon: '/icons/magnifying-glass.png', label: 'Challenge anxious thoughts' },
  { icon: '/icons/signpost.png', label: 'Exploratory journaling' },
  { icon: '/icons/cloud.png', label: 'Meditation' },
  { icon: '/icons/pointing-hand.png', label: 'Breathwork' },
  { icon: '/icons/shoe.png', label: 'Visualisations' },
  { icon: '/icons/envelope.png', label: 'Affirmations' },
  { icon: '/icons/puzzle.png', label: 'Behavioural interventions' },
]

export default function Exercises() {
  return (
    <section className="py-16 md:py-24 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Left: Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
              Exercises
              <br />
              designed uniquely
              <br />
              for you
            </h2>
            <p className="hidden lg:block text-sm text-black/60 font-body mt-3">
              CBT journaling, breathwork & more
            </p>
          </div>

          {/* Right: 4x2 grid of exercise types */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {exercises.map((exercise) => (
              <div
                key={exercise.label}
                className="bg-white rounded-2xl p-4 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] flex flex-col items-center gap-3 transition-transform hover:scale-110 cursor-default"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src={exercise.icon}
                    alt={exercise.label}
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <span className="text-xs text-black text-center leading-tight">
                  {exercise.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
