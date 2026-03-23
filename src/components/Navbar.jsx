import React, { useState, useEffect } from 'react'

const SMALogo = () => (
  <div className="flex items-center gap-3">
    <div className="flex items-center">
      {/* Hexagonal icon from brand */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1C6ED5"/>
            <stop offset="100%" stopColor="#1CC5B8"/>
          </linearGradient>
        </defs>
        <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" fill="url(#navGrad)" opacity="0.15" stroke="url(#navGrad)" strokeWidth="1.5"/>
        <polygon points="18,7 27,12 27,24 18,29 9,24 9,12" fill="url(#navGrad)" opacity="0.25"/>
        <circle cx="18" cy="18" r="4" fill="url(#navGrad)"/>
        <line x1="18" y1="7" x2="18" y2="12" stroke="url(#navGrad)" strokeWidth="1" opacity="0.6"/>
        <line x1="18" y1="24" x2="18" y2="29" stroke="url(#navGrad)" strokeWidth="1" opacity="0.6"/>
        <line x1="9" y1="12" x2="13" y2="14.5" stroke="url(#navGrad)" strokeWidth="1" opacity="0.6"/>
        <line x1="23" y1="14.5" x2="27" y2="12" stroke="url(#navGrad)" strokeWidth="1" opacity="0.6"/>
        <line x1="9" y1="24" x2="13" y2="21.5" stroke="url(#navGrad)" strokeWidth="1" opacity="0.6"/>
        <line x1="23" y1="21.5" x2="27" y2="24" stroke="url(#navGrad)" strokeWidth="1" opacity="0.6"/>
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-white font-bold text-base tracking-widest uppercase">SME</span>
      <span className="text-[#7A8599] font-light text-[10px] tracking-[0.25em] uppercase">Alliance</span>
    </div>
  </div>
)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Members', href: '#members' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F14]/95 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <SMALogo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#7A8599] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="text-[#BFC7D5] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Speak to Us
            </a>
            <a
              href="#join"
              className="relative inline-flex items-center px-5 py-2.5 rounded text-sm font-semibold text-white overflow-hidden group"
              style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }}
            >
              <span className="relative z-10">Join the Alliance</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#BFC7D5] hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111827] border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#BFC7D5] hover:text-white text-sm font-medium py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/[0.06] flex flex-col gap-3">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-[#BFC7D5] text-sm font-medium">
                Speak to Us
              </a>
              <a
                href="#join"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }}
              >
                Join the Alliance
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
