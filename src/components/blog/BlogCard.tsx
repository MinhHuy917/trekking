import Link from 'next/link'
import { BlogArticle } from '@/data/blog'

export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }} />
      <div className="space-y-3 p-5">
        <p className="text-sm text-slate-500">{article.date}</p>
        <h3 className="text-lg font-bold text-slate-900">{article.title}</h3>
        <p className="text-sm text-slate-600">{article.description}</p>
        <Link href={`/blog/${article.slug}`} className="font-medium text-emerald-700">
          Đọc bài →
        </Link>
      </div>
    </article>
  )
}
