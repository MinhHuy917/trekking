'use client'
import PromoBanner from '@/components/SpecialNoticeBanner'
import { products } from "@/data/products"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import QR from '/src/images/qr2.png'
import ban from '/src/images/ban.png'

import ghe from '/src/images/ghe.png'
import gheanh1 from '/src/images/ghe/1.png'
import gheanh2 from '/src/images/ghe/2.png'
import gheanh3 from '/src/images/ghe/3.png'
import gheanh4 from '/src/images/ghe/4.png'
import gheanh5 from '/src/images/ghe/5.png'

import ghevintageanh from '/src/images/ghevintage/0.png'
import ghevintageanh1 from '/src/images/ghevintage/1.png'
import ghevintageanh2 from '/src/images/ghevintage/2.png'
import ghevintageanh3 from '/src/images/ghevintage/3.png'
import ghevintageanh4 from '/src/images/ghevintage/4.png'
import ghevintageanh5 from '/src/images/ghevintage/5.png'

import gheNH1 from '/src/images/gheNH16J001-J/1.jpg'
import gheNH10 from '/src/images/gheNH16J001-J/10.jpg'
import gheNH11 from '/src/images/gheNH16J001-J/11.jpg'
import gheNH2 from '/src/images/gheNH16J001-J/2.png'
import gheNH5 from '/src/images/gheNH16J001-J/5.jpg'
import gheNH7 from '/src/images/gheNH16J001-J/7.jpg'


import ghegapgon from '/src/images/ghegapgon/0.png'
import ghegapgon2 from '/src/images/ghegapgon/1.jpg'
import ghegapgon1 from '/src/images/ghegapgon/2.jpg'
import ghegapgon3 from '/src/images/ghegapgon/3.jpg'
import ghegapgon4 from '/src/images/ghegapgon/4.jpg'
import ghegapgon5 from '/src/images/ghegapgon/5.jpg'

import banNH1 from '/src/images/banNH22JU050/1.png'
import banNH2 from '/src/images/banNH22JU050/2.jpg'
import banNH3 from '/src/images/banNH22JU050/3.jpg'
import banNH5 from '/src/images/banNH22JU050/5.jpg'
import banNH8 from '/src/images/banNH22JU050/8.jpg'
import banNH9 from '/src/images/banNH22JU050/9.jpg'

import bananh1 from '/src/images/ban/1.png'
import bananh2 from '/src/images/ban/2.png'
import bananh3 from '/src/images/ban/3.png'
import bananh4 from '/src/images/ban/4.png'
import bananh5 from '/src/images/ban/5.png'

import banvintage from '/src/images/banvintage/0.png'
import banvintage1 from '/src/images/banvintage/1.png'
import banvintage2 from '/src/images/banvintage/2.png'
import banvintage3 from '/src/images/banvintage/3.png'
import banvintage4 from '/src/images/banvintage/4.png'
import banvintage5 from '/src/images/banvintage/5.png'



import BanNaturehikeSizeManh1 from '/src/images/bannaturehikesizem/00.png'
import BanNaturehikeSizeManh2 from '/src/images/bannaturehikesizem/2.jpg'
import BanNaturehikeSizeManh3 from '/src/images/bannaturehikesizem/3.jpg'
import BanNaturehikeSizeManh4 from '/src/images/bannaturehikesizem/4.jpg'
import BanNaturehikeSizeManh6 from '/src/images/bannaturehikesizem/6.jpg'
import BanNaturehikeSizeManh5 from '/src/images/bannaturehikesizem/m.jpg'



import BanNaturehikeSizeLanh1 from '/src/images/bannaturehikesizel/0.jpg'
import BanNaturehikeSizeLanh2 from '/src/images/bannaturehikesizel/2.jpg'
import BanNaturehikeSizeLanh3 from '/src/images/bannaturehikesizel/3.jpg'
import BanNaturehikeSizeLanh4 from '/src/images/bannaturehikesizel/4.jpg'
import BanNaturehikeSizeLanh5 from '/src/images/bannaturehikesizel/5.jpg'
import BanNaturehikeSizeLanh6 from '/src/images/bannaturehikesizel/6.jpg'

type Product = NonNullable<(typeof products)[number]>

const banGhe = [
  {
    id: 'thue-ghe-camping-da-nang',
    name: 'Ghế mặt trăng',
    catalogue: '(2.5kg)',
    image: ghe.src,
    image1: gheanh1.src,
    image2: gheanh2.src,
    image3: gheanh3.src,
    image4: gheanh4.src,
    image5: gheanh5.src,
    originalPrice: 30,
    price: 20,
    quantity: 1,
    detail1: 'Ghế xếp đa năng thư giãn, chịu lực lên đến 130kg, gấp gọn tiện lợi – dùng được trong nhiều tình huống ngoài trời và trong nhà.',
    detail2: 'Chất liệu vải Oxford 600D cao cấp kết hợp khung hợp kim thép chắc chắn, chống gỉ, trọng lượng ghế chỉ 2.5kg – bền bỉ, dễ vệ sinh.',
    detail3: 'Thích hợp dùng trong các buổi picnic, camping, ngồi chơi ngoài trời – tạo cảm giác thoải mái và thư giãn với thiết kế lưng thấp ôm sát người.',
    detail4: 'Thương hiệu cao cấp: TMOUNTAIN – chuyên sản xuất đồ Camping & Glamping thiết kế riêng biệt, gia công tỉ mỉ, chất lượng vượt trội so với các sản phẩm không thương hiệu.',
  },

  {
    id: 'ghe-camping-gap-gon',
    name: 'Ghế gấp gọn',
    catalogue: '(1.3kg)',
    image: ghegapgon.src,
    image1: ghegapgon1.src,
    image2: ghegapgon2.src,
    image3: ghegapgon3.src,
    image4: ghegapgon4.src,
    image5: ghegapgon5.src,
    originalPrice: 30,
    price: 25,
    quantity: 1,
    detail1: 'Ghế có kết cấu chắc chắn với khung thép cứng cáp chịu lực tốt và được làm từ chất liệu Vải Oxford 600D chống mài mòn, độ bền cao.',
    detail2: 'Trọng lượng ghế rất nhẹ, chỉ 1.5 kg (hoặc 1.3kg theo catalogue), nhưng có khả năng chịu tải trọng tối đa lên đến 130 kg.',
    detail3: 'Sản phẩm được thiết kế để mang lại sự thoải mái tối đa với mặt lưới thoáng khí nylon đàn hồi, ôm sát và nâng đỡ lưng chống mỏi.',
    detail4: 'Ghế có tính cơ động cao, dễ dàng tháo lắp nhờ hệ khung được nối bằng dây đàn hồi và có kích thước đóng túi rất gọn nhẹ: 37x12cm.',
    isForSale: true,
    salePrice: 250,
},

  {
    id: 'ghe-naturehike-nh16j001-j',
    name: 'Ghế Naturehike',
    catalogue: '(1.3kg)',
    image: gheNH1.src,
    image1: gheNH5.src,
    image2: gheNH11.src,
    image3: gheNH7.src,
    image4: gheNH2.src,
    image5: gheNH10.src,
    originalPrice: 35,
    price: 30,
    quantity: 1,
    detail1: 'Ghế xếp mini câu cá, đi du lịch NatureHike NH16J001-J. Là một mẫu ghế dã ngoại được ưa chuộng trong cộng đồng camper với thiết kế đơn giản chắc chắn, gọn nhẹ giúp người sử dụng có thể luôn mang bên mình.',
    detail2: 'Khung được làm từ thép không gỉ dạng ống, chắc chắn, chịu lực tốt, chống han gỉ khi sử dụng ngoài trời. Kết hợp với lớp vải Offord 600D dày dặn, chống thấm nhẹ, dễ vệ sinh, bền màu theo thời gian.',
    detail3: 'Kích thước sử dụng: 57 x 35 x 35.5 cm – đủ rộng để đựng đồ cắm trại, picnic, câu cá,... Khi không dùng có thể gấp gọn chỉ còn 57 x 10 x 10 cm, dễ dàng bỏ cốp xe, balo hay túi đồ.',
    detail4: 'Trọng lượng chỉ 1.3kg, ai cũng có thể mang vác thoải mái trong các chuyến đi. Tông màu kaki trung tính, hài hòa với thiên nhiên – phù hợp với mọi phong cách dã ngoại.',
  },

  {
    id: 'ghe-camping-xep-gon',
    name: 'Ghế Vintage',
    catalogue: '(2kg)',
    image: ghevintageanh.src,
    image1: ghevintageanh1.src,
    image2: ghevintageanh2.src,
    image3: ghevintageanh3.src,
    image4: ghevintageanh4.src,
    image5: ghevintageanh5.src,
    originalPrice: 35,
    price: 40,
    quantity: 1,
  
    detail1: 'Gấp gọn siêu nhanh chỉ trong 3 giây với thiết kế gấp thông minh, tiết kiệm diện tích, dễ dàng mang theo khi đi du lịch, picnic hay dã ngoại.',
    
    detail2: 'Khung sắt sơn tĩnh điện siêu chắc chắn, chịu tải lên đến 150kg. Kết hợp vải Oxford 600D cao cấp – không thấm nước, không bám bụi, bền bỉ khi sử dụng ngoài trời.',
    
    detail3: 'Tay vịn gỗ sồi tự nhiên êm ái, sang trọng, dễ vệ sinh. Thiết kế hiện đại, phù hợp dùng trong quán cafe, sân vườn, ban công, câu cá, camping.',
    
    detail4: 'Thông số: Kích thước sử dụng 55 x 44 x 62 cm. Kích thước gấp gọn 55 x 56 cm. Trọng lượng 2kg. Màu sắc: Khung Vàng Vải Đen hoặc Khung Đen Vải Đen.'
  },
  
  {
    id: 'ban-camping-xep-gon',
    name: 'Bàn Vintage',
    catalogue: '(90x60cm, 4kg)',
    image: banvintage.src,
    image1: banvintage1.src,
    image2: banvintage2.src,
    image3: banvintage3.src,
    image4: banvintage4.src,
    image5: banvintage5.src,
    originalPrice: 60,
    price: 40,
    quantity: 1,
    detail1: 'Thiết kế gấp gọn thông minh, dễ mang theo khi dã ngoại, camping, picnic hoặc sử dụng trong lều – thu gọn nhanh khi không dùng, tiết kiệm đến 80% không gian.',
    detail2: 'Có thể sử dụng linh hoạt như bàn mini hoặc nơi trữ đồ: đựng đồ ăn, nước uống, vật dụng cá nhân; phù hợp cả ngoài trời lẫn trong nhà, trên xe.',
    detail3: 'Kết cấu chắc chắn, chịu tải tốt; có thể xếp chồng sử dụng khi cần, chống bụi và chống ẩm – an tâm khi thuê dùng dài ngày.',
    detail4: 'Chất liệu bền, thân thiện môi trường; màu sắc trang nhã, phù hợp nhiều không gian camping – trải nghiệm thuê đồ gọn gàng, tiện lợi và thẩm mỹ.',
  },  
  

  {
    id: 'ban-nhom-naturehike-cnh22ju050',
    name: 'Bàn nhôm Naturehike CNH22JU050 - Size S',
    catalogue: '(40x30cm, 1kg)',
    image: banNH1.src,
    image1: banNH2.src,
    image2: banNH3.src,
    image3: banNH5.src,
    image4: banNH8.src,
    image5: banNH9.src,
    originalPrice: 70,
    price: 60,
    quantity: 1,
    detail1: 'Thiết kế bàn cuộn trứng, dễ dàng lắp ráp và gấp gọn siêu nhỏ, tiện lợi mang theo trong các chuyến cắm trại, dã ngoại hay đi câu cá.',
    detail2: 'Sử dụng hợp kim nhôm 6063 dày dặn, kết hợp Inox 304 ở phần đinh tán, đảm bảo sự ổn định cao, bền bỉ trong suốt quá trình sử dụng.',
    detail3: 'Kích thước sử dụng: 40.5 x 29 x 30.5 cm | Gấp gọn: 11 x 14 x 19 cm | Trọng lượng chỉ khoảng 1kg, phù hợp mang đi bộ đường dài.',
    detail4: 'Lý tưởng dùng làm bàn ăn, bàn trà, bàn để đồ khi cắm trại – picnic. Mang lại không gian gọn gàng, tiện nghi, giúp bạn tận hưởng thiên nhiên một cách trọn vẹn.',
    videoId: 'NccX88A3RLw'
  },

    {
    id: 'ban-nhom-naturehike-NH16Z016L-Size-M',
    name: 'Bàn nhôm Naturehike NH16Z016L - Size M',
    catalogue: '(52x52x46cm, 2.5kg)',
    image: BanNaturehikeSizeManh1.src,
    image1: BanNaturehikeSizeManh2.src,
    image2: BanNaturehikeSizeManh3.src,
    image3: BanNaturehikeSizeManh4.src,
    image4: BanNaturehikeSizeManh5.src,
    image5: BanNaturehikeSizeManh6.src,
    originalPrice: 100,
    price: 80,
    quantity: 1,
    detail1: 'Thiết kế thông minh, khung ống lồng hợp kim Nhôm không gỉ chịu lực tối đa 40kg, rất bền bỉ.',
    detail2: 'Chất liệu Hợp kim Nhôm siêu nhẹ, trọng lượng chỉ 2.5kg (Kích thước: Dài - Rộng - Cao : 52.5 x 52.5 x 46cm ) .',
    detail3: 'Thiết kế gấp gọn tiện lợi (kích thước gấp: Dài - Rộng - Cao (70 x 20 x 10cm), dễ dàng vận chuyển bằng xe máy/ô tô cho các chuyến dã ngoại.',
    detail4: 'Cấu tạo đơn giản, dễ dàng lắp đặt mà không cần bất kỳ công cụ hỗ trợ nào.',
    videoId: 'NccX88A3RLw'
  },

    {
    id: 'ban-nhom-naturehike-NH16Z016L-Size-L',
    name: 'Bàn nhôm Naturehike NH16Z016L - Size L',
    catalogue: '(70x70x56cm, 3kg)',
    image: BanNaturehikeSizeLanh1.src,
    image1: BanNaturehikeSizeLanh2.src,
    image2: BanNaturehikeSizeLanh3.src,
    image3: BanNaturehikeSizeLanh4.src,
    image4: BanNaturehikeSizeLanh5.src,
    image5: BanNaturehikeSizeLanh6.src,
    originalPrice: 140,
    price: 100,
    quantity: 1,
    detail1: 'Thiết kế thông minh, khung ống lồng hợp kim Nhôm không gỉ chịu lực tối đa 40kg, rất bền bỉ.',
    detail2: 'Chất liệu Hợp kim Nhôm siêu nhẹ, trọng lượng chỉ 2.5kg (Kích thước: Dài - Rộng - Cao : 69.5 x 69.5 x 46cm ) .',
    detail3: 'Thiết kế gấp gọn tiện lợi (kích thước gấp: Dài - Rộng - Cao (90 x 20 x 10cm), dễ dàng vận chuyển bằng xe máy/ô tô cho các chuyến dã ngoại.',
    detail4: 'Cấu tạo đơn giản, dễ dàng lắp đặt mà không cần bất kỳ công cụ hỗ trợ nào.',
    videoId: 'NccX88A3RLw'
  },
]



export default function ThueLBanGheDaNang() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section with Rating */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            DỊCH VỤ CHO THUÊ
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dịch Vụ Cho Thuê Bàn Ghế Đà Nẵng
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
            Cho cho bàn ghế sự kiện, phù hợp cho mọi sự kiện từ tiệc tùng, 
            camping đến các hoạt động ngoài trời. Thiết bị được vệ sinh sạch sẽ, đảm bảo chất lượng tốt nhất.
          </p>
        </div>


           <PromoBanner /> 

         (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {banGhe.map((product) => (
            <Link
              href={`/products/${product.id}?mode=rental`}
              key={product.id}
              className="rounded-2xl bg-white dark:bg-[#EFE9DA] shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 200px"
                className="w-full h-[180px] object-cover rounded"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-[#1F3329] leading-tight">{product.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-[#2D4B3A] mt-1">{product.catalogue}</p>
                </div>
                {/* <div className="mt-3 text-sm md:text-base font-semibold text-[#1F3329]">
                  {product.price === 0 ? (
                    <span className="text-green-600">Miễn phí</span>
                  ) : (
                    <span className="text-orange-600">
                      {product.price}k{product.isRental ? "" : "/ngày"}
                    </span>
                  )}
                </div> */}
  <div className="mt-2">
  {product.price === 0 ? (
    <span className="text-green-600 font-medium text-xs sm:text-sm">Miễn phí</span>
  ) : product.originalPrice && product.originalPrice > product.price ? (
    <div className="flex flex-col">
        <span className="text-orange-600 font-semibold text-sm sm:text-base">
          {product.price}k/ngày
        </span>
    </div>
  ) : (
    <span className="text-orange-600 font-semibold text-sm sm:text-base">
      {product.price}k/ngày
    </span>
  )}
</div>



              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Không tìm thấy sản phẩm phù hợp.</p>
      )
      
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md space-y-6 my-12">
        <h2 className="text-2xl font-bold text-gray-800">Chính sách thuê lều</h2>

        {/* 1. Đặt cọc & thanh toán */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">1. Đặt cọc & Thanh toán</h3>
          <p className="text-gray-700 leading-relaxed">
            Khi thuê lều, vui lòng mang theo <span className="font-medium">CCCD hoặc GPLX</span> để bên mình đối chiếu và <span className="font-medium">chụp ảnh làm cơ sở cọc</span> (chỉ lưu thông tin, <span className="italic">không giữ giấy tờ</span>).
            Đồng thời, bạn cần <span className="font-semibold">thanh toán đầy đủ trước khi nhận lều và đồ cắm trại</span>.
          </p>
        </div>

        {/* 2. Thời gian thuê */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">2. Thời gian thuê</h3>
          <p className="text-gray-700 leading-relaxed">
            Thời gian thuê được tính theo ngày (<span className="font-medium">24 tiếng</span>) kể từ lúc nhận lều và phụ kiện.
            Tuy nhiên, bên mình có thể <span className="font-medium">hỗ trợ linh hoạt</span> nếu bạn cần nhận sớm hoặc trả trễ.
          </p>
          <div className="bg-gray-50 border-l-4 border-blue-400 p-4 mt-3 rounded">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold">Ví dụ:</span> Nếu bạn đi cắm trại vào <span className="font-medium">thứ 7</span> và cần đi sớm, bạn có thể ghé lấy lều từ tối <span className="font-medium">thứ 6</span> mà không tính thêm phí.
              Khi trả lều, bạn có thể trả trong ngày <span className="font-medium">Chủ Nhật</span>.
              Nhưng nếu giữ lều qua đêm Chủ Nhật và trả vào <span className="font-medium">thứ 2</span> hoặc sau đó, shop sẽ tính thêm <span className="font-semibold">50% giá thuê cho mỗi ngày tiếp theo</span>.
            </p>
          </div>
        </div>

        {/* 3. Đền bù thiệt hại */}
        <div>
          <h4 className="text-base font-semibold text-red-700 mt-3 mb-1">📌 Đền bù thiệt hại</h4>
          <p className="text-gray-700 leading-relaxed">
            Khi trả lại, nếu <span className="font-medium">thiết bị hư hỏng, mất mát hoặc quá bẩn không thể chùi rửa được</span>,
            shop sẽ <span className="font-semibold">tính phí vệ sinh, sửa chữa hoặc yêu cầu bồi thường</span> theo <span className="font-semibold text-red-700">giá trị thị trường hiện tại</span> của sản phẩm.
          </p>
        </div>

        {/* 4. Những điều không nên */}
        <div>
          <h4 className="text-base font-semibold text-yellow-600 mt-3 mb-1">⚠️ Những điều không nên</h4>
          <p className="text-gray-700 leading-relaxed">
            Để tránh làm hỏng thiết bị và giữ đồ dùng luôn sạch sẽ, <span className="font-semibold text-red-700">vui lòng KHÔNG sử dụng</span> <span className="font-medium">tấm phủ lều</span> (tấm phủ bên trên lều) và <span className="font-medium">tấm tăng chữ A</span> (tấm che nắng, che mưa dựng kiểu chữ A) để <span className="font-semibold">ngồi, nằm, hoặc trải dưới nền đất</span>.
          </p>
        </div>

          {/* 5.QR */} Thanh toán không tiền mặt
          <div>
    <h4 className="text-base font-semibold text-green-700 mt-3 mb-2">💳 Thanh toán không tiền mặt</h4>
    <p className="text-gray-700 leading-relaxed mb-3">
      Bạn có thể quét mã QR bên dưới để thanh toán nhanh chóng và tiện lợi.
    </p>
    <div className="flex justify-center">
  <Image
    width={160}
    height={200}
    src={QR.src}
    alt="QR Thanh toán"
    className="max-w-xs rounded-lg border border-gray-300 shadow-md bg-white p-2"
  />
</div>

  </div>
      </div>

      </section>
  )
}
