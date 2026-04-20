import Link from 'next/link'
import { Tour } from '@/types/tour'

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${tour.images[0]}')` }} />
      <div className="space-y-3 p-5">
        <p className="text-sm text-emerald-700">{tour.location}</p>
        <h3 className="text-xl font-bold text-slate-900">{tour.name}</h3>
        <p className="line-clamp-2 text-sm text-slate-600">{tour.shortDescription}</p>
        <div className="flex items-center justify-between text-sm text-slate-700">
          <span>{tour.duration}</span>
          <span className="font-semibold">{tour.price.toLocaleString('vi-VN')}đ</span>
        </div>
        <Link href={`/tours/${tour.slug}`} className="inline-block font-medium text-emerald-700">
          Xem chi tiết →
        </Link>
      </div>
    </article>
  )
}
