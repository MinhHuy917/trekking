import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BookingForm } from '@/components/tours/BookingForm'
import { getTourBySlug, tours } from '@/data/tours'

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tour = getTourBySlug(params.slug)
  if (!tour) {
    return {}
  }

  return {
    title: tour.name,
    description: tour.shortDescription,
    openGraph: {
      title: tour.name,
      description: tour.shortDescription,
      images: tour.images,
    },
  }
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = getTourBySlug(params.slug)
  if (!tour) return notFound()

  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-[420px] rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url('${tour.images[0]}')` }} />

      <div className="grid gap-8 lg:grid-cols-3">
        <article className="space-y-6 lg:col-span-2">
          <h1 className="text-4xl font-bold">{tour.name}</h1>
          <p className="text-slate-600">{tour.shortDescription}</p>

          <div className="grid gap-3 rounded-xl bg-white p-5 shadow-sm md:grid-cols-3">
            <p><strong>Duration:</strong> {tour.duration}</p>
            <p><strong>Difficulty:</strong> {tour.difficulty}</p>
            <p><strong>Price:</strong> {tour.price.toLocaleString('vi-VN')}đ</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Itinerary theo ngày</h2>
            <div className="mt-4 space-y-4">
              {tour.itinerary.map((day) => (
                <div key={day.day} className="rounded-xl border bg-white p-5">
                  <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
                  <p className="mt-2 text-slate-600">{day.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-5">
              <h2 className="text-xl font-semibold">Includes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                {tour.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-5">
              <h2 className="text-xl font-semibold">Excludes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                {tour.excludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Gallery</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {tour.images.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="h-52 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url('${image}')` }}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Google Map</h2>
            <iframe
              title="Tour map"
              className="mt-4 h-72 w-full rounded-xl"
              loading="lazy"
              src="https://www.google.com/maps?q=Da%20Nang&output=embed"
            />
          </div>
        </article>

        <aside>
          <BookingForm />
        </aside>
      </div>
    </section>
  )
}
