'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '@/images/logo.png'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Thuê Đồ Cắm Trại', href: '/#products' },
  { label: 'Mua Sắm', href: '/cua-hang-ban-do-cam-trai' },
  { label: 'Điểm Camping', href: '/nhung-dia-diem-cam-trai-da-nang' },
  { label: 'Kinh nghiệm', href: '/kinh-nghiem-cam-trai' },
  { label: 'Về chúng tôi', href: '/about-didicamping' },
]

export default function CampingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const scrollLock = React.useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const body = document.body

    if (isMenuOpen) {
      scrollLock.current = window.scrollY
      body.style.position = 'fixed'
      body.style.top = `-${scrollLock.current}px`
      body.style.width = '100%'
      body.style.overflow = 'hidden'
      body.style.touchAction = 'none'
    } else {
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      body.style.overflow = ''
      body.style.touchAction = ''
      window.scrollTo(0, scrollLock.current)
    }

    return () => {
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      body.style.overflow = ''
      body.style.touchAction = ''
    }
  }, [isMenuOpen])

  const handleProductLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/#products') {
      e.preventDefault()
      setIsMenuOpen(false)
      
      if (pathname === '/') {
        setTimeout(() => {
          const productsSection = document.getElementById('products-section')
          if (productsSection) {
            const headerHeight = 100
            const elementPosition = productsSection.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      } else {
        window.location.href = '/#products'
      }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-lg border-b-2 border-green-100'
            : 'bg-gradient-to-b from-green-50/90 via-emerald-50/70 to-transparent'
        }`}
      >
        {/* Top accent line */}
        <div className="h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 md:h-24 items-center justify-between">
            {/* Logo Section - Left */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="ĐiĐi Camping"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 border-green-200 bg-white shadow-md group-hover:shadow-xl group-hover:border-green-400 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={logo}
                    alt="ĐiĐi Camping"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-2 shadow-lg border border-green-100">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href === '/#products' && pathname === '/')
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleProductLinkClick(e, item.href)}
                      className={`
                        relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                        ${isActive
                          ? 'text-white bg-gradient-to-r from-green-600 to-emerald-600 shadow-md'
                          : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                        }
                        hover:scale-105 active:scale-95
                      `}
                    >
                      {item.label}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Desktop CTA */}
              <Link
                href="https://www.facebook.com/groups/695950148016396"
                target="_blank"
                className="hidden lg:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Cộng đồng</span>
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-white shadow-md border border-green-100 hover:shadow-lg hover:border-green-200 active:scale-95 transition-all"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-5 h-4">
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-green-700 rounded-full transform transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 top-1.5' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 w-5 h-0.5 bg-green-700 rounded-full transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-green-700 rounded-full transform transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 top-1.5' : 'top-3'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-gradient-to-b from-white via-green-50 to-emerald-50 z-40 overflow-y-auto pt-20">
            <div className="sticky top-0 bg-white/80 backdrop-blur flex justify-end px-4 py-3 border-b border-green-100">
              <button
                type="button"
                aria-label="Đóng menu"
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-green-200 text-green-700 bg-white shadow-sm hover:shadow transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 pb-10 space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href === '/#products' && pathname === '/')
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleProductLinkClick(e, item.href)
                      if (item.href !== '/#products') setIsMenuOpen(false)
                    }}
                    className={`
                      block px-6 py-4 rounded-2xl text-base font-bold transition-all duration-300
                      ${isActive
                        ? 'text-white bg-gradient-to-r from-green-600 to-emerald-600 shadow-xl scale-105'
                        : 'text-gray-700 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-green-50 active:scale-95'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                )
              })}
              
              <Link
                href="https://www.facebook.com/groups/695950148016396"
                target="_blank"
                className="flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold shadow-xl text-base hover:scale-105 active:scale-95 transition-all mt-6"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Cộng đồng cắm trại</span>
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Spacer */}
      <div className="h-20 md:h-24"></div>
    </>
  )
}
