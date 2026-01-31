import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  return {
    title: `${post.title} - Shroomy`,
    description: post.excerpt,
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

  return (
    <main className="min-h-screen">
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
        </div>
      </article>

      <Footer />
    </main>
  )
}
