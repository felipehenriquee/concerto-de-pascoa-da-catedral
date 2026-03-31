import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-white overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-100 to-white opacity-90" />

      {/* Decorative cross */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" className="w-[600px] h-[600px]" fill="none" stroke="#6A3E37" strokeWidth="2">
          <line x1="100" y1="20" x2="100" y2="180" />
          <line x1="40" y1="70" x2="160" y2="70" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <p className="text-pink-300 tracking-[0.4em] text-xs uppercase mb-4">
          Uma tarde de fé e música
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-brown-900 leading-tight mb-6">
          Concerto de<br />
          <span className="text-pink-300">Páscoa da Catedral</span>
        </h1>
        <p className="text-brown-700/70 text-lg md:text-xl mb-3">
          Sábado, 11 de Abril de 2026
        </p>
        <p className="text-brown-700/50 text-sm tracking-widest uppercase mb-10">
          Catedral Metropolitana de Fortaleza — 16:30h
        </p>
        <a
          href="#about"
          className="inline-block bg-pink-300 hover:bg-pink-400 text-white font-semibold text-sm tracking-widest uppercase px-8 py-3 transition-colors duration-200"
        >
          Saiba Mais
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-pink-300/60 hover:text-pink-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
