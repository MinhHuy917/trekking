'use client'
import Image from 'next/image'
import Link from 'next/link'
import loajblpartyboxencore2 from '/src/images/loajblpartyboxencore2/0.png'
import loajblpartyboxstage320 from '/src/images/loajblpartyboxstage320/0.png'
import loajblpartybox720 from '/src/images/loajblpartybox720/0.png'
import PromoBanner from '@/components/SpecialNoticeBanner'
import PromoBannerAudio from '@/components/SpecialNoticeBannerAudio'

const jblSpeakers = [
  {
    id: 'loa-jbl-partyBox-encore-2',
    name: 'Loa JBL PartyBox Encore 2',
    catalogue: 'Loa karaoke di động công suất 100W, pin rời 15 giờ, chống nước IPX4.',
    image: loajblpartyboxencore2,
    price: 290,
    originalPrice: 350,
    features: [
      'Âm thanh JBL Pro Sound mạnh mẽ 100W (1 woofer 135mm + 2 tweeter 25mm)',
      'Thời lượng pin khủng lên tới 15 giờ, pin có thể tháo rời',
      'Đi kèm 2 micro không dây, điều chỉnh echo, bass, treble trực tiếp',
      'Hệ thống đèn LED RGB đồng bộ theo nhạc, Bluetooth 5.4 LE',
    ],
  },
  {
    id: 'loa-jbl-partyBox-stage-320',
    name: 'Loa JBL PartyBox Stage 320',
    catalogue: 'Loa karaoke di động công suất 240W RMS, pin 18 giờ, chống nước IPX4.',
    image: loajblpartyboxstage320,
    price: 490,
    originalPrice: 600,
    features: [
      'Công suất khủng 240W RMS (2 Bass 165mm + 2 Tweeter 25mm)',
      'Thời lượng pin cực dài lên đến 18 giờ, sạc nhanh 10 phút = 2 giờ sử dụng',
      'Thiết kế siêu di động với tay cầm dạng ống và bánh xe tiện lợi',
      'Kết nối Bluetooth 5.3 LE, ghép nối không giới hạn qua Auracast',
    ],
  },
  {
    id: 'loa-jbl-partyBox-720',
    name: 'Loa JBL PartyBox 720',
    catalogue: 'Loa tiệc tùng công suất 800W RMS, pin rời 15 giờ, chống nước IPX4.',
    image: loajblpartybox720,
    price: 1200,
    originalPrice: 1300,
    features: [
      'Công suất cực khủng 800W RMS, âm trầm sâu đến 32Hz',
      'Pin rời dễ thay thế, phát nhạc liên tục tới 15 giờ',
      'Hệ thống đèn LED Futuristic lightshow cực kỳ ấn tượng',
      'Bluetooth 5.4, tích hợp Auracast, đầy đủ cổng kết nối',
    ],
  },
]

export default function ThueLoaKeoDaNang() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section with Rating */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            DỊCH VỤ CHO THUÊ
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dịch Vụ Cho Thuê Loa Kéo Đà Nẵng
          </h1>
          
          {/* Rating Display - Google Search Style */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-0.5">
              <span className="text-yellow-400 text-xl leading-none">★★★★★</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-semibold text-gray-900">4,9</span>
              <span className="text-gray-600 text-sm">(599 đánh giá)</span>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cho thuê loa kéo JBL PartyBox chuyên nghiệp với âm thanh cực hay, phù hợp cho mọi sự kiện từ tiệc tùng, 
            camping đến các hoạt động ngoài trời. Thiết bị được vệ sinh sạch sẽ, đảm bảo chất lượng tốt nhất.
          </p>
        </div>


           <PromoBannerAudio /> 

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {jblSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Product Image */}
              <Link href={`/products/${speaker.id}`}>
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-6">
                <Link href={`/products/${speaker.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                    {speaker.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mb-4">{speaker.catalogue}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {speaker.price.toLocaleString('vi-VN')}k
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {speaker.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/products/${speaker.id}`}
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Xem Chi Tiết & Đặt Thuê
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Thông Tin Liên Hệ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-lg p-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Địa chỉ</h3>
                <p className="text-gray-700">
                  43 Tống Duy Tân, Liên Chiểu, TP. Đà Nẵng
                </p>
                <a
                  href="https://g.co/kgs/BkDHJhp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-sm underline"
                >
                  Xem trên Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-lg p-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">SĐT/Zalo</h3>
                <a
                  href="tel:0909223917"
                  className="text-green-600 hover:text-green-700 text-lg font-semibold"
                >
                  0909.223.917
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-lg p-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Giờ làm việc</h3>
                <p className="text-gray-700">Thứ 2–CN: 7:00–18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-lg p-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Facebook</h3>
                <a
                  href="https://facebook.com/thueleucamtraidanang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-sm underline"
                >
                  /thueleucamtraidanang
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Policy */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
  <h2 className="text-xl sm:text-2xl font-extrabold mb-6 flex items-center gap-3 text-gray-900">
    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
      <div className="w-3 h-3 bg-cyan-400 rounded-full" />
    </div>
    Chính sách thuê loa
  </h2>

  <div className="space-y-6 text-gray-700">
    {/* Section 1 */}
    <div className="rounded-2xl bg-gray-50 p-5">
      <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
        1. Đặt cọc & hợp đồng
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed">
        <li>
          Cọc bằng <span className="font-semibold text-gray-900">CCCD hoặc GPLX</span> và ký hợp đồng thuê loa.
        </li>
        <li>
          Thanh toán <span className="font-semibold text-gray-900">tiền thuê + phí ship (nếu có)</span> trước khi bàn giao.
        </li>
      </ul>
    </div>

    {/* Section 2 */}
    <div className="rounded-2xl bg-gray-50 p-5">
      <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
        2. Thời gian thuê
      </h3>
      <p className="text-sm sm:text-base leading-relaxed">
        Thời gian thuê tính theo <span className="font-semibold">24 giờ</span> kể từ lúc nhận loa.
        Từ ngày thứ hai trở đi, mỗi ngày tiếp theo áp dụng mức phí
        <span className="font-semibold"> 50% giá thuê ngày đầu</span>.
      </p>
    </div>

    {/* Damage */}
    <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
      <h4 className="text-sm sm:text-base font-bold mb-2 text-red-600 flex items-center gap-2">
        <span>📌</span> Đền bù thiệt hại
      </h4>
      <p className="text-sm sm:text-base leading-relaxed text-gray-700">
        Trường hợp thiết bị hư hỏng, shop sẽ tính phí sửa chữa hoặc yêu cầu
        bồi thường theo <span className="font-semibold">giá trị thị trường hiện tại</span>.
      </p>
    </div>
  </div>
</div>

      </section>
  )
}
