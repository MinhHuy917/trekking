import { Metadata } from 'next'
import { BlogCard } from '@/components/blog/BlogCard'
import { articles } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Chia sẻ kinh nghiệm trekking và cẩm nang outdoor từ ĐiĐi Adventure.',
}

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
