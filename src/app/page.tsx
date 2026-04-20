import { BlogCard } from '@/components/blog/BlogCard'
import { Hero } from '@/components/home/Hero'
import { TourCard } from '@/components/tours/TourCard'
import { articles } from '@/data/blog'
import { destinations } from '@/data/destinations'
import { testimonials } from '@/data/testimonials'
import { tours } from '@/data/tours'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Featured Tours</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tours.slice(0, 3).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            <li className="rounded-xl border p-5">Đội ngũ guide chuyên tour trekking tại miền Trung.</li>
            <li className="rounded-xl border p-5">Lịch trình tối ưu cho an toàn và trải nghiệm thực tế.</li>
            <li className="rounded-xl border p-5">Hỗ trợ trước - trong - sau tour nhanh và rõ ràng.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Destinations</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {destinations.map((destination) => (
            <article key={destination.name} className="rounded-xl bg-slate-900 p-5 text-white">
              <h3 className="text-xl font-semibold text-emerald-300">{destination.name}</h3>
              <p className="mt-2 text-sm text-slate-200">{destination.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-xl border p-5">
                <p className="text-slate-700">“{testimonial.content}”</p>
                <footer className="mt-3 font-semibold text-emerald-700">— {testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Blog Preview</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  )
}
