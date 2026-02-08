'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, LogOut } from 'lucide-react'
import logo from '/src/images/logo.png'

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Thuê Đồ Cắm Trại', href: '/#products' },
  // { label: 'Mua Sắm', href: '/cua-hang-ban-do-cam-trai' },
  { label: 'Điểm Camping', href: '/nhung-dia-diem-cam-trai-da-nang' },
  { label: 'Kinh nghiệm', href: '/kinh-nghiem-cam-trai' },
  { label: 'Về chúng tôi', href: '/about-didicamping' },
]

export default function CampingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Khóa cuộn trang khi menu mobile mở để tập trung vào menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, [isMenuOpen]);

  const handleItemClick = () => {
    setIsMenuOpen(false)
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href) || (href === '/#products' && pathname === '/')
  }

  const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Dark top bar with gradient */}
      <div className="h-1 bg-gradient-to-r from-green-900 via-green-800 to-purple-900"></div>
      
      {/* Main header */}
      <div className="bg-gradient-to-b from-green-50 to-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
          
          {/* Logo */}
          <Link href="/" onClick={handleItemClick} className="flex items-center">
            <div className="rounded-xl shadow-lg border-2 border-green-500 relative overflow-hidden">
              {/* Subtle green glow effect */}
              <div className="absolute inset-0 bg-green-400 opacity-10 blur-sm rounded-xl"></div>
              <div className="relative">
                <Image 
                  src={logo} 
                  alt="Đi Đi CAMPING" 
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Navigation cho màn hình lớn (Desktop) */}
          <nav className="hidden lg:flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-md border border-gray-100">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link 
                  key={item.label} 
                  href={item.href}
                  className={`relative transition-all duration-200 text-sm tracking-tight ${
                    active 
                      ? 'bg-green-600 text-white rounded-full px-3.5 py-1.5 font-medium' 
                      : 'text-gray-700 hover:text-green-700 px-2.5 py-1.5 font-normal'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-1 h-1 bg-white rounded-full"></span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Nút Cộng đồng Facebook (Desktop) */}
          <div className="hidden lg:block">
            <Link 
              href="https://www.facebook.com/groups/congdongcamtraidanang" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white shadow-lg hover:bg-blue-700 transition duration-300 tracking-tight"
            >
              <FacebookIcon />
              <span>Cộng đồng</span>
            </Link>
          </div>

          {/* Nút Menu cho màn hình nhỏ (Mobile) */}
          <button 
            className="lg:hidden text-green-800 p-2 rounded-lg hover:bg-green-50 transition duration-300"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* -------------------- MOBILE SIDEBAR (THANH BÊN) -------------------- */}
      
      {/* Overlay - Lớp mờ đen khi menu mở */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar chính */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`
        }
      >
        {/* Header/Nút Đóng của Sidebar */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-white">
          <div className="flex items-center gap-2 rounded-xl shadow-lg border-2 border-green-500 relative overflow-hidden">
            <Image 
              src={logo} 
              alt="Đi Đi CAMPING" 
              width={80}
              height={40}
              className="h-8 w-auto object-contain rounded-lg"
            />
          </div>
          <button 
            className="text-gray-700 hover:text-green-700 p-1 rounded-full hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nội dung menu */}
        <nav className="flex flex-col space-y-1 p-4 pt-6">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link 
                key={item.label} 
                href={item.href} 
                onClick={handleItemClick}
                className={`block p-2.5 rounded-lg transition duration-200 text-sm tracking-tight ${
                  active
                    ? 'bg-green-600 text-white font-medium'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700 font-normal'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          
          {/* Nút Cộng đồng Facebook trong mobile menu */}
          <div className="pt-4">
            <Link 
              href="https://www.facebook.com/groups/congdongcamtraidanang" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleItemClick}
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-blue-700 transition duration-300 tracking-tight"
            >
              <FacebookIcon />
              <span>Cộng đồng</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}