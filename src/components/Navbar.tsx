import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Programação', href: '#program' },
  { label: 'Patrocínio', href: '#sponsorship' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-sm border-b border-pink-300/30 shadow-sm'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <span className={`font-serif text-lg tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-brown-700' : 'text-brown-900'}`}>
          Concerto de Páscoa
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm tracking-wider text-brown-700/80 hover:text-pink-300 transition-colors duration-200 uppercase"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brown-700/80 hover:text-pink-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-white/95 px-6 pb-4 gap-4">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm tracking-wider text-brown-700/80 hover:text-pink-300 transition-colors uppercase"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
