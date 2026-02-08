import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  const url = `https://shroomyapp.com/blog/${params.slug}`
  return {
    title: `${post.title} - Shroomy`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} - Shroomy`,
      description: post.excerpt,
      url,
      siteName: 'Shroomy',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} - Shroomy`,
      description: post.excerpt,
    },
  }
}

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl md:text-2xl font-display mb-4 mt-10">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-lg md:text-xl font-display mb-3 mt-8">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const listItems: React.ReactNode[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(<li key={i}>{formatInlineText(lines[i].slice(2))}</li>)
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 mb-4">
          {listItems}
        </ul>
      )
      continue
    } else if (line.match(/^\d+\. /)) {
      const listItems: React.ReactNode[] = []
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        listItems.push(<li key={i}>{formatInlineText(lines[i].replace(/^\d+\. /, ''))}</li>)
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 space-y-2 mb-4">
          {listItems}
        </ol>
      )
      continue
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="mb-4">
          {formatInlineText(line)}
        </p>
      )
    }

    i++
  }

  return elements
}

function formatInlineText(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'Shroomy',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Shroomy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://shroomyapp.com/images/app-icon.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />

      <article className="pt-32 pb-16 md:pb-24 px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-black/50 mb-4">
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-10">
            {post.title}
          </h1>

          <div className="text-black text-sm leading-relaxed">
            {renderMarkdown(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-lavender rounded-card p-8 md:p-12 text-center">
            <h2 className="text-xl md:text-2xl font-display mb-4">
              Ready to feel better?
            </h2>
            <p className="text-sm text-black mb-6 max-w-md mx-auto">
              Shroomy uses CBT and evidence-based techniques to help you manage anxiety, one exercise at a time.
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

          {/* Related Resources */}
          <div className="mt-12 pt-8 border-t border-black/10">
            <h2 className="text-lg md:text-xl font-display mb-4">
              Related Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/anxiety-symptoms-quiz"
                className="bg-white rounded-card p-5 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
              >
                <p className="text-sm font-bold font-body">
                  Anxiety Symptoms Quiz
                </p>
                <p className="text-xs text-black/50 font-body mt-1">
                  Free 2-minute self-assessment for anxiety symptoms
                </p>
              </Link>
              <Link
                href="/nervous-system-quiz"
                className="bg-white rounded-card p-5 border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity"
              >
                <p className="text-sm font-bold font-body">
                  Nervous System Quiz
                </p>
                <p className="text-xs text-black/50 font-body mt-1">
                  Are you stuck in fight-or-flight mode? Find out now
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
