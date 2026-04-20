import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles } from '@/data/blog'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((item) => item.slug === params.slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug)
  if (!article) return notFound()

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm text-slate-500">{article.date}</p>
      <h1 className="mt-3 text-4xl font-bold">{article.title}</h1>
      <p className="mt-4 text-lg text-slate-600">{article.description}</p>
      <div className="prose mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  )
}
