import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-lavender/20">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 py-4 flex items-center justify-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/app-icon.png"
            alt="Shroomy"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <Image
            src="/images/logo.png"
            alt="Shroomy"
            width={120}
            height={40}
            className="h-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-3">
          <div className="relative group">
            <button className="bg-white text-black px-5 py-2.5 rounded-pill text-sm font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity">
              Quizzes
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="bg-white rounded-2xl border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] py-2 min-w-[200px]">
                <Link href="/anxiety-symptoms-quiz" className="block px-4 py-2.5 text-sm font-body hover:bg-lavender/30 transition-colors">
                  Anxiety Symptoms Quiz
                </Link>
                <Link href="/nervous-system-quiz" className="block px-4 py-2.5 text-sm font-body hover:bg-lavender/30 transition-colors">
                  Nervous System Quiz
                </Link>
              </div>
            </div>
          </div>
          <Link href="/blog" className="bg-white text-black px-5 py-2.5 rounded-pill text-sm font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity">
            Blog
          </Link>
          <a
            href="https://apps.apple.com/us/app/shroomy-daily-stress-relief/id6737152971"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lavender text-black px-5 py-2.5 rounded-pill text-sm font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
          >
            Download (iOS)
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=uk.co.resetapp.reset"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lavender text-black px-5 py-2.5 rounded-pill text-sm font-body font-normal border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
          >
            Download (Android)
          </a>
        </nav>
      </div>
    </header>
  )
}
