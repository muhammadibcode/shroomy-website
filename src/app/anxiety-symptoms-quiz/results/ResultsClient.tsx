'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useCallback } from 'react'

const questions = [
  { symptom: 'nausea or stomach issues', exercise: 'breathwork' },
  { symptom: 'dizziness or lightheadedness', exercise: 'grounding' },
  { symptom: 'heart racing or palpitations', exercise: 'breathwork' },
  { symptom: 'heartburn or chest tightness', exercise: 'somatic exercises' },
  { symptom: 'hot flashes or sudden sweating', exercise: 'breathwork' },
  { symptom: 'muscle tension', exercise: 'somatic exercises' },
  { symptom: 'sleep difficulties', exercise: 'meditation' },
  { symptom: 'fatigue despite rest', exercise: 'visualisations' },
  { symptom: 'difficulty concentrating', exercise: 'meditation' },
  { symptom: 'feeling on edge', exercise: 'grounding' },
]

const tiers = [
  {
    min: 0,
    max: 10,
    title: 'Your symptoms appear minimal',
    description:
      'Based on your responses, your physical symptoms don\'t appear to be strongly linked to anxiety at this time. That said, it\'s always worth paying attention to how your body feels.',
    color: 'bg-success/20',
    barColor: 'bg-success',
  },
  {
    min: 11,
    max: 20,
    title: 'You\'re experiencing mild anxiety symptoms',
    description:
      'Your responses suggest that some of your physical symptoms may be connected to anxiety. This is common and manageable with the right tools and awareness.',
    color: 'bg-highlight',
    barColor: 'bg-yellow-400',
  },
  {
    min: 21,
    max: 30,
    title: 'You\'re experiencing moderate anxiety symptoms',
    description:
      'Your body is showing several signs that anxiety may be playing a significant role in how you feel day-to-day. Many people at this level benefit from structured daily exercises.',
    color: 'bg-lavender',
    barColor: 'bg-lavender-dark',
  },
  {
    min: 31,
    max: 40,
    title: 'You\'re experiencing significant anxiety symptoms',
    description:
      'Your responses indicate that anxiety is likely having a major impact on your physical wellbeing. The good news is that these symptoms can be managed with consistent practice and support.',
    color: 'bg-coral/20',
    barColor: 'bg-coral',
  },
]

const exerciseDetails: Record<string, { label: string; description: string }> = {
  breathwork: {
    label: 'Breathwork',
    description: 'Calm your nervous system with guided breathing patterns',
  },
  'somatic exercises': {
    label: 'Somatic Exercises',
    description: 'Release physical tension stored in your body',
  },
  meditation: {
    label: 'Meditation',
    description: 'Quiet your mind and improve focus with guided sessions',
  },
  grounding: {
    label: 'Grounding Techniques',
    description: 'Reconnect with the present moment when you feel overwhelmed',
  },
  visualisations: {
    label: 'Visualisations',
    description: 'Use mental imagery to promote relaxation and calm',
  },
}

export default function ResultsClient() {
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') || '0', 10)
  const answersParam = searchParams.get('answers') || ''
  const answers = answersParam.split(',').map(Number)

  const tier = tiers.find((t) => score >= t.min && score <= t.max) || tiers[0]

  // Get top symptoms (scored 3 or 4)
  const topSymptoms = answers
    .map((val, idx) => ({ val, ...questions[idx] }))
    .filter((q) => q.val >= 3)
    .map((q) => q.symptom)

  // Get recommended exercises (deduplicated, based on top symptoms)
  const topExercises = answers
    .map((val, idx) => ({ val, ...questions[idx] }))
    .filter((q) => q.val >= 3)
    .map((q) => q.exercise)
  const uniqueExercises = Array.from(new Set(topExercises)).slice(0, 3)

  // Fallback exercises if none scored high
  const recommendedExercises =
    uniqueExercises.length > 0
      ? uniqueExercises
      : ['breathwork', 'meditation', 'grounding']

  const handleShare = useCallback(() => {
    const url = window.location.href
    if (navigator.share) {
      navigator.share({
        title: 'My Anxiety Symptoms Quiz Results - Shroomy',
        url,
      })
    } else {
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }, [])

  const scorePercent = Math.round((score / 40) * 100)

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

          {/* Score bar */}
          <div className="max-w-sm mx-auto mb-6">
            <div className="w-full h-3 bg-white border border-black/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${tier.barColor}`}
                style={{ width: `${scorePercent}%` }}
              />
            </div>
            <p className="text-sm text-black/50 font-body mt-2">
              Score: {score} out of 40
            </p>
          </div>
        </div>

        {/* Result card */}
        <div className={`rounded-card p-6 md:p-8 ${tier.color} mb-8`}>
          <p className="text-sm text-black leading-relaxed font-body">
            {tier.description}
          </p>

          {topSymptoms.length > 0 && (
            <div className="mt-6 pt-6 border-t border-black/10">
              <p className="text-sm text-black font-body">
                <strong>Many people experience {topSymptoms.slice(0, 3).join(', ')}</strong>{' '}
                as a result of anxiety. These physical symptoms happen because anxiety
                activates your body&apos;s stress response, even when there&apos;s no immediate
                danger.
              </p>
            </div>
          )}
        </div>

        {/* Recommended exercises */}
        <div className="bg-lavender rounded-card p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-display mb-2 text-center">
            Exercises That Can Help
          </h2>
          <p className="text-sm text-black/60 font-body text-center mb-6">
            Shroomy can help you manage these symptoms with personalised daily exercises
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {recommendedExercises.map((exercise) => {
              const detail = exerciseDetails[exercise]
              if (!detail) return null
              return (
                <div
                  key={exercise}
                  className="bg-white rounded-card p-4 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)]"
                >
                  <p className="text-sm font-bold font-body">{detail.label}</p>
                  <p className="text-xs text-black/60 font-body mt-1">
                    {detail.description}
                  </p>
                </div>
              )
            })}
          </div>

          <p className="text-sm text-black/70 font-body text-center mb-4">
            Try free for 7 days
          </p>
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
            href="/anxiety-symptoms-quiz"
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
