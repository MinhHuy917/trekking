import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">ĐIĐI ADVENTURE</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          Trekking chuyên nghiệp tại Đà Nẵng
        </h1>
        <p className="mt-6 text-lg text-slate-100">
          Chinh phục cung đường đẹp nhất cùng đội ngũ guide bản địa, lịch trình rõ ràng và chuẩn an toàn.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/tours"
            className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-emerald-300"
          >
            Xem tour
          </Link>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 font-semibold">
            Booking ngay
          </Link>
        </div>
      </div>
    </section>
  )
}
