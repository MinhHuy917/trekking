'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import reviewanh1 from '/src/images/review/1.jpg'
import reviewanh2 from '/src/images/review/2.jpg'
import reviewanh3 from '/src/images/review/3.jpg'
import reviewanh4 from '/src/images/review/4.jpg'
import reviewanh5 from '/src/images/review/5.jpg'
import reviewanh6 from '/src/images/review/6.jpg'
import reviewanh7 from '/src/images/review/7.jpg'
import reviewanh8 from '/src/images/review/8.jpg'
import reviewanh9 from '/src/images/review/9.jpg'
import reviewanh10 from '/src/images/review/10.jpg'
import reviewanh11 from '/src/images/review/11.jpg'
import start from '/src/images/ti-verified.svg'


const reviews = [
  {
    name: 'Linh Trần Thuý Hạnh',
    comment: 'Lều sạch sẽ thơm, lên hình sống ảo đẹp lúm mọi người, a chủ support nhiệt tình, sẽ ủng hộ lần tới',
    image: reviewanh1, 
  },
  {
    name: 'Thao Le',
    comment: 'Gíá cả ok, chất lượng tốt',
    image: reviewanh2, 
  },
  {
    name: ' Trình Flute',
    comment: 'Set đồ đẹp, shop nhiệt tình chu đáo.',
    image: reviewanh3, 
  },
  {
    name: 'Oanh Phạm Hoàng',
    comment: 'Chủ shop nhiệt tình, dễ thương. Lều xinh, chất lượng',
    image: reviewanh4, 
  },
  {
    name: ' Mạnh Nguyễn Huy',
    comment: 'Dịch vụ chu đáo, nhiệt tình',
    image: reviewanh5, 
  },
  {
    name: 'Phương Anh Lê',
    comment: 'Anh chủ dễ thương, nhiệt tình, có tâm',
    image: reviewanh6, 
  },
  {
    name: 'Anh Hiền',
    comment: 'Lều 6 rất to và sạch sẽ, check-in đẹp',
    image: reviewanh7, 
  },
  {
    name: ' Loan Trần',
    comment: 'Anh chủ nhiệt tình, lều sạch chất lượng ok',
    image: reviewanh8, 
  },

  {
    name: 'Khuyên Phạm',
    comment: 'Lều sạch, giá rẻ,nhiệt tình',
    image: reviewanh9, 
  },
  {
    name: 'Anh Đức Nguyễn',
    comment: 'Giá thuê rẻ, đồ tốt, đáng để thuê',
    image: reviewanh10, 
  },
  {
    name: ' Luân Nguyễn',
    comment: 'Lều xịn và đẹp, shop tâm lí tặng thêm cả gối và tấm cách nhiệt. Anh chủ hỗ trợ nhiệt tình. Nên thuê nha mọi người',
    image: reviewanh11, 
  },
 

]




export default function Testimonials() {
  const StarRow = () => (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-yellow-400 text-lg">
        {Array.from({ length: 5 }).map((_, idx) => (
          <span key={idx}>★</span>
        ))}
      </div>
     
      <Image 
    src= {start}
    width={16}
    height={16}
    alt=''
    className='mb-1'
    />
    </div>
  )

  const GoogleBadge = () => (
    <div className="flex items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 256 262" aria-hidden="true">
        <path fill="#4285F4" d="M255.68 133.5c0-10.2-.83-17.64-2.63-25.37H130.55v45.95h71.92c-1.45 11.7-9.28 29.3-26.7 41.06l-.24 1.6 38.78 30 2.68.27c24.64-22.74 38.69-56.2 38.69-94.01" />
        <path fill="#34A853" d="M130.55 261.1c35.12 0 64.64-11.6 86.18-31.58l-41.06-31.76c-11.02 7.7-25.8 13.08-45.12 13.08-34.44 0-63.68-22.7-74.06-54.07l-1.53.13-40.19 31.1-.53 1.47C35.52 231.2 79.76 261.1 130.55 261.1" />
        <path fill="#FBBC05" d="M56.49 156.77c-2.77-8.22-4.37-16.98-4.37-26.1 0-9.12 1.6-17.88 4.26-26.1l-.07-1.75-40.68-31.53-1.33.63C5.27 86.1.32 104.6.32 124.9c0 20.3 4.95 38.8 13.98 53.98" />
        <path fill="#EB4335" d="M130.55 50.48c24.44 0 40.9 10.57 50.27 19.4l36.7-35.76C195.06 13.73 165.67 0 130.55 0 79.76 0 35.52 29.9 14.3 70.92l42.12 32.58c10.52-31.3 39.86-53.02 74.13-53.02" />
      </svg>
      <span className="text-sm font-semibold text-gray-700">Google Reviews</span>
    </div>
  )

  const GoogleGIcon = () => (
    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
      <svg width="18" height="18" viewBox="0 0 256 262" aria-hidden="true">
        <path fill="#4285F4" d="M255.68 133.5c0-10.2-.83-17.64-2.63-25.37H130.55v45.95h71.92c-1.45 11.7-9.28 29.3-26.7 41.06l-.24 1.6 38.78 30 2.68.27c24.64-22.74 38.69-56.2 38.69-94.01" />
        <path fill="#34A853" d="M130.55 261.1c35.12 0 64.64-11.6 86.18-31.58l-41.06-31.76c-11.02 7.7-25.8 13.08-45.12 13.08-34.44 0-63.68-22.7-74.06-54.07l-1.53.13-40.19 31.1-.53 1.47C35.52 231.2 79.76 261.1 130.55 261.1" />
        <path fill="#FBBC05" d="M56.49 156.77c-2.77-8.22-4.37-16.98-4.37-26.1 0-9.12 1.6-17.88 4.26-26.1l-.07-1.75-40.68-31.53-1.33.63C5.27 86.1.32 104.6.32 124.9c0 20.3 4.95 38.8 13.98 53.98" />
        <path fill="#EB4335" d="M130.55 50.48c24.44 0 40.9 10.57 50.27 19.4l36.7-35.76C195.06 13.73 165.67 0 130.55 0 79.76 0 35.52 29.9 14.3 70.92l42.12 32.58c10.52-31.3 39.86-53.02 74.13-53.02" />
      </svg>
    </div>
  )

  return (
    <section className="py-16 px-4 sm:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-10">
          <GoogleBadge />
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1F3329]">
            Cảm nhận thực tế từ khách hàng
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 9).map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white" />
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                  <Image src={r.image} alt={r.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-gray-900 leading-tight">{r.name}</p>
                  <p className="text-xs text-gray-500">2025-03-30</p>
                </div>
                <GoogleGIcon />
              </div>

              <StarRow />

              <p className="mt-3 text-gray-800 text-sm leading-relaxed line-clamp-4">
                {r.comment}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


