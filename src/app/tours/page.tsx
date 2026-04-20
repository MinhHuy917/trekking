import { Metadata } from 'next'
import { TourCard } from '@/components/tours/TourCard'
import { tours } from '@/data/tours'

export const metadata: Metadata = {
  title: 'Tours',
  description: 'Danh sách tour trekking chuyên nghiệp tại Đà Nẵng từ ĐiĐi Adventure.',
}

export default function ToursPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Trekking Tours</h1>
      <p className="mt-3 text-slate-600">Chọn hành trình phù hợp thể lực và thời gian của bạn.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}
