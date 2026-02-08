import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-lavender/20 py-12 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/app-icon.png"
              alt="Shroomy"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <Image
              src="/images/logo.png"
              alt="Shroomy"
              width={120}
              height={36}
              className="h-auto"
            />
          </div>

          {/* Resources */}
          <div className="text-sm text-black">
            <p className="font-bold mb-3">Resources</p>
            <nav className="flex flex-col gap-2">
              <Link href="/anxiety-symptoms-quiz" className="hover:text-gray-700 transition-colors">
                Anxiety Symptoms Quiz
              </Link>
              <Link href="/nervous-system-quiz" className="hover:text-gray-700 transition-colors">
                Nervous System Quiz
              </Link>
              <Link href="/blog" className="hover:text-gray-700 transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="text-sm text-black">
            <p className="font-bold mb-3">Company</p>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-gray-700 transition-colors">
                Terms & Conditions
              </Link>
              <a href="mailto:contact@momentapps.co.uk" className="hover:text-gray-700 transition-colors">
                Support
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-black">
            © {new Date().getFullYear()} Moment Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
