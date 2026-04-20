import { Tour } from '@/types/tour'

export const tours: Tour[] = [
  {
    id: 'son-tra-sunrise-trek',
    name: 'Sơn Trà Sunrise Trek',
    slug: 'son-tra-sunrise-trek',
    location: 'Bán đảo Sơn Trà, Đà Nẵng',
    duration: '1 ngày',
    difficulty: 'easy',
    price: 890000,
    images: ['/background.jpg', '/og-image.jpg'],
    shortDescription:
      'Hành trình trekking nhẹ nhàng đón bình minh tại Sơn Trà, phù hợp cho người mới bắt đầu.',
    itinerary: [
      {
        day: 1,
        title: 'Đón khách và trekking đón bình minh',
        content:
          'Khởi hành lúc 4:30 sáng, trekking cung rừng nhẹ, ngắm voọc chà vá chân nâu và đón bình minh trên đỉnh Bàn Cờ.',
      },
    ],
    includes: ['Xe đưa đón nội thành Đà Nẵng', 'HDV địa phương', 'Bữa sáng picnic', 'Nước uống'],
    excludes: ['Chi phí cá nhân', 'Bảo hiểm du lịch mở rộng'],
  },
  {
    id: 'bach-ma-2d1n',
    name: 'Bạch Mã Trekking 2N1Đ',
    slug: 'bach-ma-trekking-2n1d',
    location: 'Vườn quốc gia Bạch Mã',
    duration: '2 ngày 1 đêm',
    difficulty: 'medium',
    price: 2690000,
    images: ['/background.jpg', '/og-image.jpg'],
    shortDescription:
      'Tour chuyên sâu chinh phục cung rừng Bạch Mã với thác nước, suối lạnh và cắm trại giữa thiên nhiên.',
    itinerary: [
      {
        day: 1,
        title: 'Khởi hành - trekking thác Đỗ Quyên',
        content:
          'Di chuyển từ Đà Nẵng, bắt đầu trekking xuyên rừng, dừng chân tại thác Đỗ Quyên và dựng trại nghỉ đêm.',
      },
      {
        day: 2,
        title: 'Đỉnh Hải Vọng Đài - về Đà Nẵng',
        content:
          'Dậy sớm săn mây, chinh phục Hải Vọng Đài, ăn trưa và quay về Đà Nẵng lúc chiều muộn.',
      },
    ],
    includes: ['Vận chuyển khứ hồi', 'Lều trại tiêu chuẩn', '3 bữa chính + 1 bữa sáng', 'Vé vào cổng'],
    excludes: ['Đồ uống ngoài chương trình', 'Tip cho porter/HDV'],
  },
  {
    id: 'hai-van-pass-challenge',
    name: 'Hải Vân Pass Challenge',
    slug: 'hai-van-pass-challenge',
    location: 'Đèo Hải Vân - Đà Nẵng',
    duration: '1 ngày',
    difficulty: 'hard',
    price: 1290000,
    images: ['/background.jpg', '/og-image.jpg'],
    shortDescription:
      'Tour thử thách dành cho người yêu trekking cường độ cao với cảnh quan biển - núi ngoạn mục.',
    itinerary: [
      {
        day: 1,
        title: 'Trekking cung núi - đèo',
        content:
          'Khởi động lúc sáng sớm, leo cung dốc cao, nghỉ tại điểm ngắm vịnh Lăng Cô và kết thúc tại đèo Hải Vân.',
      },
    ],
    includes: ['HDV chuyên cung khó', 'Snack năng lượng', 'Bộ sơ cứu cá nhân', 'Nước điện giải'],
    excludes: ['Giày trekking', 'Bảo hiểm cá nhân'],
  },
]

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug)
}
