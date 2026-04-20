import { type Metadata } from 'next'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://didiadventure.vn'),
  title: {
    default: 'ĐiĐi Adventure | Tour trekking chuyên nghiệp tại Đà Nẵng',
    template: '%s | ĐiĐi Adventure',
  },
  description:
    'ĐiĐi Adventure tổ chức tour trekking chuyên nghiệp tại Đà Nẵng: lịch trình an toàn, hướng dẫn viên bản địa và trải nghiệm thiên nhiên chất lượng.',
  openGraph: {
    title: 'ĐiĐi Adventure | Tour trekking chuyên nghiệp tại Đà Nẵng',
    description:
      'Khám phá Sơn Trà, Bạch Mã, Hải Vân cùng ĐiĐi Adventure. Tour trekking bài bản, phù hợp người mới và trekker giàu kinh nghiệm.',
    type: 'website',
    locale: 'vi_VN',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ĐiĐi Adventure',
    description: 'Tour trekking chuyên nghiệp tại Đà Nẵng.',
    images: ['/og-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="h-full">
      <body className="min-h-full bg-slate-50 text-slate-900">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
