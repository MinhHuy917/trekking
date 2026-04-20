import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Giới thiệu về ĐiĐi Adventure - đơn vị tổ chức trekking chuyên nghiệp tại Đà Nẵng.',
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Về ĐiĐi Adventure</h1>
      <p className="mt-6 leading-8 text-slate-700">
        ĐiĐi Adventure là đội ngũ chuyên tổ chức tour trekking tại Đà Nẵng với định hướng an toàn,
        bền vững và trải nghiệm chân thực. Chúng tôi thiết kế lịch trình theo từng cấp độ thể lực,
        đảm bảo khách hàng được hỗ trợ đầy đủ từ khâu tư vấn đến khi hoàn thành hành trình.
      </p>
    </section>
  )
}
