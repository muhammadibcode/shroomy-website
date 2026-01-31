import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-lavender/20 py-12 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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

          {/* Navigation - right aligned */}
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm text-black">
            <Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-conditions" className="hover:text-gray-700 transition-colors">
              Terms
            </Link>
            <a href="mailto:contact@momentapps.co.uk" className="hover:text-gray-700 transition-colors">
              Support
            </a>
          </nav>
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
