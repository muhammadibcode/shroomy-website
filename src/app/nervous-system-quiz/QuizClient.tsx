'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

const questions = [
  {
    id: 1,
    text: 'Do you feel wired but tired — exhausted yet unable to truly rest?',
    sign: 'wired but tired',
  },
  {
    id: 2,
    text: 'Do small things feel overwhelming, like a full inbox or a change in plans?',
    sign: 'easily overwhelmed',
  },
  {
    id: 3,
    text: 'Do you startle easily at unexpected sounds or sudden movement?',
    sign: 'heightened startle response',
  },
  {
    id: 4,
    text: 'Do you have trouble winding down at the end of the day?',
    sign: 'difficulty winding down',
  },
  {
    id: 5,
    text: 'Does your mind race even when you want to relax?',
    sign: 'racing mind',
  },
  {
    id: 6,
    text: 'Do you feel tension in your body for most of the day?',
    sign: 'chronic body tension',
  },
  {
    id: 7,
    text: 'Do you sometimes feel disconnected, numb, or "checked out"?',
    sign: 'dissociation or numbness',
  },
  {
    id: 8,
    text: 'Do you struggle to feel calm even when you know you\'re safe?',
    sign: 'difficulty feeling safe',
  },
]

const options = [
  { label: 'Not at all', value: 0 },
  { label: 'A little', value: 1 },
  { label: 'Moderately', value: 2 },
  { label: 'Very much', value: 3 },
]

export default function QuizClient() {
  const router = useRouter()
  const [phase, setPhase] = useState<'start' | 'quiz'>('start')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in')

  const handleStart = useCallback(() => {
    setPhase('quiz')
  }, [])

  const handleAnswer = useCallback((value: number) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setFadeState('out')
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1)
        setFadeState('in')
      }, 200)
    } else {
      const score = newAnswers.reduce((sum, a) => sum + a, 0)
      const answersParam = newAnswers.join(',')
      router.push(`/nervous-system-quiz/results?score=${score}&answers=${answersParam}`)
    }
  }, [answers, currentQuestion, router])

  if (phase === 'start') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight mb-6">
          Is Your Nervous System
          <br />
          Dysregulated?
        </h1>
        <p className="text-black/70 text-base md:text-lg max-w-md mb-10 font-body">
          Discover if your body is stuck in fight-or-flight mode
        </p>
        <button
          onClick={handleStart}
          className="bg-lavender text-black px-8 py-3.5 rounded-pill text-base font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
        >
          Start Quiz
        </button>
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-8 py-16">
      {/* Progress bar */}
      <div className="w-full max-w-lg mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-black/50 font-body">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-xs text-black/50 font-body">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-2 bg-white border border-black/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-lavender rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div
        className={`w-full max-w-lg transition-all duration-200 ease-out ${
          fadeState === 'in'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="bg-white rounded-card p-6 md:p-8 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)]">
          <h2 className="text-lg md:text-xl font-display mb-8 text-center leading-snug">
            {question.text}
          </h2>

          <div className="flex flex-col gap-3">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left px-5 py-3.5 rounded-card bg-white border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] text-sm font-body hover:bg-lavender transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
