import { Metadata } from 'next'
import { destinations } from '@/data/destinations'

export const metadata: Metadata = {
  title: 'Destinations',
  description: 'Khám phá các điểm trekking nổi bật quanh Đà Nẵng.',
}

export default function DestinationsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Destinations</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {destinations.map((destination) => (
          <article key={destination.name} className="rounded-xl border bg-white p-6">
            <h2 className="text-2xl font-semibold text-emerald-700">{destination.name}</h2>
            <p className="mt-3 text-slate-600">{destination.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
