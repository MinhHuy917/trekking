import { Metadata } from 'next'
import { BookingForm } from '@/components/tours/BookingForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Liên hệ ĐiĐi Adventure để được tư vấn và booking tour trekking.',
}

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h1 className="text-4xl font-bold">Liên hệ & Booking tour</h1>
        <p className="mt-4 text-slate-700">
          Hotline: 0900 000 000 <br />
          Email: hello@didiadventure.vn <br />
          Địa chỉ: Hải Châu, Đà Nẵng
        </p>
      </div>
      <BookingForm />
    </section>
  )
}
