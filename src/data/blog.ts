export type BlogArticle = {
  slug: string
  title: string
  description: string
  image: string
  date: string
  content: string
}

export const articles: BlogArticle[] = [
  {
    slug: 'kinh-nghiem-trekking-da-nang-cho-nguoi-moi',
    title: 'Kinh nghiệm trekking Đà Nẵng cho người mới bắt đầu',
    description: 'Checklist thực tế để bạn bắt đầu trekking an toàn và có trải nghiệm tốt tại Đà Nẵng.',
    image: '/background.jpg',
    date: '2026-03-20',
    content:
      '<p>Bắt đầu với cung dễ, chuẩn bị giày phù hợp, nước điện giải và theo nhóm có guide chuyên nghiệp.</p>',
  },
  {
    slug: 'top-cung-trekking-dep-nhat-da-nang',
    title: 'Top cung trekking đẹp nhất gần Đà Nẵng',
    description: 'Gợi ý những cung trekking đáng trải nghiệm: Sơn Trà, Bạch Mã, Hải Vân.',
    image: '/og-image.jpg',
    date: '2026-02-12',
    content:
      '<p>Mỗi cung có độ khó và thời lượng khác nhau. Hãy chọn theo thể lực và thời gian của bạn.</p>',
  },
  {
    slug: 'nhung-luu-y-an-toan-khi-di-trekking',
    title: 'Những lưu ý an toàn quan trọng khi đi trekking',
    description: 'Các nguyên tắc an toàn bắt buộc khi tham gia tour trekking chuyên nghiệp.',
    image: '/background.jpg',
    date: '2026-01-05',
    content:
      '<p>Không tách đoàn, tuân thủ hướng dẫn viên, thông báo tiền sử bệnh và mang theo thuốc cá nhân.</p>',
  },
]
