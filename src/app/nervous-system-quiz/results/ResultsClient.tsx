'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useCallback } from 'react'

const questions = [
  { sign: 'wired but tired' },
  { sign: 'easily overwhelmed' },
  { sign: 'heightened startle response' },
  { sign: 'difficulty winding down' },
  { sign: 'racing mind' },
  { sign: 'chronic body tension' },
  { sign: 'dissociation or numbness' },
  { sign: 'difficulty feeling safe' },
]

const tiers = [
  {
    min: 0,
    max: 6,
    title: 'Your nervous system seems well-regulated',
    state: 'Regulated',
    stateColor: 'bg-success',
    description:
      'Based on your responses, your nervous system appears to be functioning well. You seem able to move between states of activation and rest with relative ease.',
    color: 'bg-success/20',
    techniques: [
      {
        name: 'Maintain your baseline',
        detail: 'Continue with regular breathwork or mindfulness to keep your nervous system balanced.',
      },
      {
        name: 'Build resilience',
        detail: 'Gentle cold exposure or varied breathing patterns can strengthen your regulation capacity.',
      },
      {
        name: 'Stay connected',
        detail: 'Social connection and co-regulation with others is one of the best ways to maintain nervous system health.',
      },
    ],
  },
  {
    min: 7,
    max: 12,
    title: 'Your nervous system may need some support',
    state: 'Mildly Activated',
    stateColor: 'bg-yellow-400',
    description:
      'Your responses suggest your nervous system is slightly activated more than ideal. You may notice it takes a bit longer to relax or that stress lingers in your body.',
    color: 'bg-highlight',
    techniques: [
      {
        name: 'Extended exhale breathing',
        detail: 'Breathe in for 4 counts, out for 6-8 counts. The longer exhale activates your parasympathetic nervous system.',
      },
      {
        name: '5-4-3-2-1 grounding',
        detail: 'Name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, and 1 you taste to anchor yourself in the present.',
      },
      {
        name: 'Gentle movement',
        detail: 'Slow stretching, yoga, or walking helps discharge built-up stress energy from your body.',
      },
    ],
  },
  {
    min: 13,
    max: 18,
    title: 'Signs of nervous system dysregulation',
    state: 'Dysregulated',
    stateColor: 'bg-lavender-dark',
    description:
      'Your body appears to be spending significant time in a stress response. This is your nervous system trying to protect you, but it\'s working overtime. Consistent daily practice can help restore balance.',
    color: 'bg-lavender',
    techniques: [
      {
        name: 'Physiological sigh',
        detail: 'Double inhale through the nose, long exhale through the mouth. This is one of the fastest ways to calm your nervous system in real time.',
      },
      {
        name: 'Body scan with release',
        detail: 'Slowly scan from head to toe, consciously softening each area of tension. Pair with gentle humming to activate the vagus nerve.',
      },
      {
        name: 'Safe place visualisation',
        detail: 'Close your eyes and vividly imagine a place where you feel completely safe. Engage all your senses to signal safety to your nervous system.',
      },
    ],
  },
  {
    min: 19,
    max: 24,
    title: 'Your nervous system is likely stuck in survival mode',
    state: 'Survival Mode',
    stateColor: 'bg-coral',
    description:
      'Your responses indicate your nervous system is heavily activated. You may feel like you can\'t switch off, or you might swing between feeling wired and completely shut down. This is your body\'s protective response — and it can be reset with the right support.',
    color: 'bg-coral/20',
    techniques: [
      {
        name: 'Vagal toning exercises',
        detail: 'Humming, gargling, or cold water on the face stimulate the vagus nerve and signal safety to your brain.',
      },
      {
        name: 'Bilateral stimulation',
        detail: 'Alternating taps on your knees or a slow walk focusing on left-right rhythm helps integrate your nervous system.',
      },
      {
        name: 'Co-regulation',
        detail: 'Spend time with someone who feels safe and calm. Your nervous system can "borrow" regulation from others through eye contact, voice tone, and presence.',
      },
    ],
  },
]

// State indicator segments
const stateSegments = [
  { label: 'Regulated', range: '0-6' },
  { label: 'Mild', range: '7-12' },
  { label: 'Dysregulated', range: '13-18' },
  { label: 'Survival', range: '19-24' },
]

export default function ResultsClient() {
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') || '0', 10)
  const answersParam = searchParams.get('answers') || ''
  const answers = answersParam.split(',').map(Number)

  const tier = tiers.find((t) => score >= t.min && score <= t.max) || tiers[0]
  const tierIndex = tiers.indexOf(tier)

  // Get top signs (scored 2 or 3)
  const topSigns = answers
    .map((val, idx) => ({ val, ...questions[idx] }))
    .filter((q) => q.val >= 2)
    .map((q) => q.sign)

  const handleShare = useCallback(() => {
    const url = window.location.href
    if (navigator.share) {
      navigator.share({
        title: 'My Nervous System Quiz Results - Shroomy',
        url,
      })
    } else {
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }, [])

  return (
    <div className="pt-28 pb-16 md:pb-24 px-8 md:px-12 lg:px-16">
      <div className="max-w-2xl mx-auto">
        {/* Score overview */}
        <div className="text-center mb-10">
          <p className="text-xs text-black/50 font-body uppercase tracking-wider mb-4">
            Your Results
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight mb-6">
            {tier.title}
          </h1>

          {/* State indicator */}
          <div className="max-w-sm mx-auto mb-4">
            <div className="flex gap-1">
              {stateSegments.map((segment, idx) => (
                <div key={segment.label} className="flex-1">
                  <div
                    className={`h-3 rounded-full ${
                      idx <= tierIndex
                        ? tier.stateColor
                        : 'bg-black/5'
                    }`}
                  />
                  <p className="text-[10px] text-black/40 font-body mt-1">
                    {segment.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-black/50 font-body mt-3">
              Score: {score} out of 24
            </p>
          </div>
        </div>

        {/* Explanation card */}
        <div className={`rounded-card p-6 md:p-8 ${tier.color} mb-8`}>
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-3 h-3 rounded-full ${tier.stateColor}`} />
            <p className="text-sm font-bold font-body">{tier.state}</p>
          </div>
          <p className="text-sm text-black leading-relaxed font-body">
            {tier.description}
          </p>

          {topSigns.length > 0 && (
            <div className="mt-6 pt-6 border-t border-black/10">
              <p className="text-sm text-black font-body">
                <strong>Your key signs:</strong>{' '}
                {topSigns.join(', ')}. These are common indicators that your
                nervous system is spending too much time in a protective state.
              </p>
            </div>
          )}
        </div>

        {/* Techniques */}
        <div className="bg-white rounded-card p-6 md:p-8 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] mb-8">
          <h2 className="text-xl md:text-2xl font-display mb-2 text-center">
            Techniques For Your Level
          </h2>
          <p className="text-sm text-black/60 font-body text-center mb-6">
            Try these {tier.techniques.length} practices to help reset your nervous system
          </p>

          <div className="flex flex-col gap-4">
            {tier.techniques.map((technique, idx) => (
              <div key={technique.name} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lavender flex items-center justify-center border border-black/10">
                  <span className="text-xs font-bold font-body">{idx + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-bold font-body">{technique.name}</p>
                  <p className="text-xs text-black/60 font-body mt-1 leading-relaxed">
                    {technique.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-lavender rounded-card p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-display mb-2 text-center">
            Reset Your Nervous System Daily
          </h2>
          <p className="text-sm text-black/60 font-body text-center mb-6">
            Shroomy guides you through nervous system reset exercises personalised to your state
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <div className="bg-white rounded-card p-4 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)]">
              <p className="text-sm font-bold font-body">Voice-guided exercises</p>
              <p className="text-xs text-black/60 font-body mt-1">
                Follow along with calming audio guides for breathwork and somatic practices
              </p>
            </div>
            <div className="bg-white rounded-card p-4 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)]">
              <p className="text-sm font-bold font-body">Daily check-ins</p>
              <p className="text-xs text-black/60 font-body mt-1">
                Track your nervous system state and see how it changes over time
              </p>
            </div>
            <div className="bg-white rounded-card p-4 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)]">
              <p className="text-sm font-bold font-body">Progress tracking</p>
              <p className="text-xs text-black/60 font-body mt-1">
                Watch your regulation capacity improve with consistent practice
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://apps.apple.com/us/app/shroomy-daily-stress-relief/id6737152971"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2.5 rounded-pill text-sm font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
            >
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=uk.co.resetapp.reset"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2.5 rounded-pill text-sm font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
            >
              Download for Android
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link
            href="/nervous-system-quiz"
            className="bg-white text-black px-5 py-2.5 rounded-pill text-sm font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
          >
            Retake Quiz
          </Link>
          <button
            onClick={handleShare}
            className="bg-lavender text-black px-5 py-2.5 rounded-pill text-sm font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
          >
            Share Results
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-black/40 font-body text-center mb-10">
          This quiz is for educational purposes only and is not a diagnostic tool. If
          you&apos;re concerned about your mental health, please consult a healthcare
          professional.
        </p>

        {/* Related blog posts */}
        <div className="border-t border-black/10 pt-8">
          <h3 className="text-lg font-display mb-4 text-center">
            Learn More
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/blog/how-to-reset-your-nervous-system"
              className="bg-white rounded-card p-5 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
            >
              <p className="text-sm font-bold font-body">
                How to Reset Your Nervous System
              </p>
              <p className="text-xs text-black/50 font-body mt-1">
                Practical techniques including breathwork and grounding exercises
              </p>
            </Link>
            <Link
              href="/blog/what-is-a-thought-record"
              className="bg-white rounded-card p-5 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
            >
              <p className="text-sm font-bold font-body">
                What Is a Thought Record?
              </p>
              <p className="text-xs text-black/50 font-body mt-1">
                Learn how CBT can help you challenge anxious thinking patterns
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
