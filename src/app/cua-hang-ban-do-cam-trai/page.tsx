'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { products } from "@/data/products"
import Link from 'next/link'
import QR from '/src/images/qr2.png'
import heroImg from '/src/images/bgAbout.png'

type Product = {
  id: any
  name: string
  catalogue: string
  image: any
  price: number
  originalPrice?: number
  salePrice?: number
  quantity: number
  isForSale?: boolean
}

const categoryFilterMap: Record<string, (p: Product) => boolean> = {
  all: () => true,
  tent: (p) => p.name.includes('Lều') || p.name.includes('Võng'),
  table: (p) => p.name.includes('Bàn') || p.name.includes('Ghế'),
  mat: (p) => p.name.includes('Tăng') || p.name.includes('Thảm'),
  light: (p) => p.name.includes('Đèn'),
  accessory: (p) => p.name.includes('Loa') || p.name.includes('Quạt') || p.name.includes('Sạc'),
  cooking: (p) => p.name.includes('Bếp') || p.name.includes('Nồi') || p.name.includes('Ấm'),
  ice: (p) => p.name.includes('Thùng') || p.name.includes('Túi đựng nước'),
}

const categories = [
  { label: 'Tất cả sản phẩm', value: 'all' },
  { label: 'Lều & Võng', value: 'tent' },
  { label: 'Bàn & Ghế', value: 'table' },
  { label: 'Tăng, Thảm', value: 'mat' },
  { label: 'Đèn & Giá treo', value: 'light' },
  { label: 'Loa, Quạt, Sạc', value: 'accessory' },
  { label: 'Dụng cụ nấu', value: 'cooking' },
  { label: 'Thùng đá', value: 'ice' },
]

export default function ShopPage() {
  const [filterText, setFilterText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const combinedFilter = (p: Product) => {
    // Only show products for sale
    if (!p.isForSale) return false
    
    const matchesCategory = categoryFilterMap[selectedCategory](p)
    const matchesText =
      filterText === '' ||
      p.name.toLowerCase().includes(filterText.toLowerCase()) ||
      p.catalogue.toLowerCase().includes(filterText.toLowerCase())
    return matchesCategory && matchesText
  }

  let filteredProducts = products.filter(combinedFilter)

  // Sort products
  if (sortBy === 'newest') {
    filteredProducts = [...filteredProducts].reverse()
  } else if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price))
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero SEO section */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative overflow-hidden rounded-2xl border border-green-100 shadow-sm min-h-[280px]">
            <div className="absolute inset-0">
              <Image src={heroImg} alt="Cửa hàng đồ cắm trại Đà Nẵng" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/35" />
            </div>
            <div className="relative p-6 sm:p-10 max-w-3xl space-y-4 text-white">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-emerald-200 text-xs font-semibold border border-white/20 shadow-sm backdrop-blur">
                Cửa hàng đồ cắm trại Đà Nẵng
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-lg">
                Mua sắm đồ cắm trại chính hãng tại Đà Nẵng
              </h1>
              <p className="text-base sm:text-lg leading-relaxed bg-black/35 rounded-xl p-4 shadow-sm border border-white/10 backdrop-blur">
                Lều trại, ghế bàn gấp gọn, bếp dã ngoại, đèn – quạt – pin, phụ kiện nấu nướng. Giao nhanh tại Đà Nẵng, giá rõ ràng, sản phẩm được kiểm tra kỹ và tư vấn setup theo nhu cầu thực tế.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-emerald-50">
                <li className="flex items-start gap-2"><span className="text-emerald-300">✓</span> Hàng chính hãng, đã trải nghiệm thực tế</li>
                <li className="flex items-start gap-2"><span className="text-emerald-300">✓</span> Giao nhanh trong Đà Nẵng, hỗ trợ lắp đặt</li>
                <li className="flex items-start gap-2"><span className="text-emerald-300">✓</span> Tư vấn combo theo số người & địa hình</li>
                <li className="flex items-start gap-2"><span className="text-emerald-300">✓</span> Bảo hành & đổi trả rõ ràng từng sản phẩm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">DANH MỤC SẢN PHẨM</h2>
              <nav className="space-y-1">
                {categories.map((category) => {
                  const isActive = selectedCategory === category.value
                  return (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`
                        w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                        ${isActive
                          ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                          : 'text-gray-700 hover:bg-gray-50'
                        }
                      `}
                    >
                      {category.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-green-600">Trang chủ</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Cửa hàng bán đồ camping</span>
            </nav>

            {/* Header with Title and Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
                CỬA HÀNG BÁN ĐỒ CAMPING
              </h2>
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600">Sắp xếp theo:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
                >
                  <option value="newest">Mới nhất</option>
                  <option value="price-low">Giá: Thấp đến cao</option>
                  <option value="price-high">Giá: Cao đến thấp</option>
                </select>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => {
                  const displayPrice = product.salePrice || product.price
                  return (
                    <Link
                      href={`/products/${product.id}?mode=sale`}
                      key={product.id}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          ✓ Còn hàng
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 mb-3">{product.catalogue}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-lg font-bold text-orange-600">
                              {displayPrice.toLocaleString('vi-VN')}k
                            </div>
                            {product.originalPrice && product.originalPrice > displayPrice && (
                              <div className="text-xs text-gray-400 line-through">
                                {product.originalPrice.toLocaleString('vi-VN')}k
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-700">4.9</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg border border-gray-200">
                <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-lg text-gray-500 font-medium">Hiện chưa có sản phẩm bán</p>
                <p className="text-sm text-gray-400 mt-2">Các sản phẩm bán sẽ được cập nhật sớm nhất</p>
              </div>
            )}

            {/* Policy Section */}
            {filteredProducts.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6 mt-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-2xl font-bold text-gray-800">Chính sách mua hàng</h2>
                  <div className="flex items-center gap-3">
                    <div className="text-left text-sm text-gray-600">
                      <p className="font-semibold text-gray-800">Thanh toán nhanh</p>
                      <p>Quét mã QR để chuyển khoản</p>
                    </div>
                    <Image src={QR} alt="QR thanh toán" width={120} height={140} className="rounded-lg border border-gray-200 shadow-sm bg-white p-2" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-gray-700 leading-relaxed">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-1">1. Thanh toán</h3>
                      <p>
                        Nhận chuyển khoản qua QR hoặc tiền mặt. Vui lòng thanh toán đủ trước khi nhận hàng.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-1">2. Giao hàng</h3>
                      <p>
                        Giao nhanh trong Đà Nẵng. Phí giao hàng báo khi đặt, hỗ trợ lắp đặt sản phẩm cần setup.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-1">3. Bảo hành</h3>
                      <p>
                        Sản phẩm được kiểm tra kỹ trước khi giao. Bảo hành theo chính sách từng sản phẩm/nhà sản xuất.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-1">4. Đổi trả</h3>
                      <p>
                        Đổi trả trong 7 ngày nếu lỗi do nhà sản xuất. Sản phẩm giữ nguyên tem, chưa sử dụng, kèm hóa đơn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
