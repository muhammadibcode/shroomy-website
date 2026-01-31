import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Shroomy',
  description: 'Tips, insights, and evidence-based techniques for managing anxiety and improving mental health.',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pb-24 px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-12 text-center">
            Blog
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-card p-6 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform"
              >
                <p className="text-xs text-black/50 mb-3">
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <h2 className="text-lg font-display mb-3">{post.title}</h2>
                <p className="text-sm text-black leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
