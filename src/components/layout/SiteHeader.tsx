import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-white sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-wide text-emerald-300">
          ĐiĐi Adventure
        </Link>
        <ul className="flex flex-wrap items-center gap-4 text-sm md:gap-6 md:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-emerald-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
