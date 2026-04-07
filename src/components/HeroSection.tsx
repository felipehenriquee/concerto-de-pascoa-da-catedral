import { ChevronDown } from "lucide-react";
import bgImage from "../assets/images/background.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background image — cross on right; shifts toward center on smaller screens */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[88%_70%] md:object-[72%_70%] lg:object-[right_0%] pointer-events-none select-none"
      />

      {/* Gradient overlay: strong on left for text legibility, fades out toward the cross */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent md:from-white/85 md:via-white/25 md:to-transparent" />

      {/* Content — left-aligned on desktop, centered on mobile */}
      <div className="relative z-10 w-full px-6 md:px-14 lg:px-24">
        <div className="max-w-lg text-center md:text-left rounded-xl px-6 py-8 md:px-0 md:py-0 bg-white/50 backdrop-blur-[2px] md:bg-transparent md:backdrop-blur-none">
          <p className="text-brown-900 tracking-[0.4em] text-xs uppercase mb-4">
            Uma tarde de fé e música
          </p>
          <h1 className="font-serif text-[36px] md:text-7xl font-bold text-[#a76f61] leading-tight mb-6">
            Concerto de
            <br />
            <span className="text-[#a76f61] font-bold">Páscoa da Catedral</span>
          </h1>
          <p className="text-[#a76f61] text-lg md:text-xl mb-3">
            Sábado, 11 de Abril de 2026
          </p>
          <p className="text-[#a76f61] text-sm tracking-widest uppercase mb-10">
            Catedral Metropolitana de Fortaleza — 16:30h
          </p>
          <a
            href="#about"
            className="inline-block bg-[#a76f61] hover:bg-[#a07d6a] text-white font-semibold text-sm tracking-widest uppercase px-8 py-3 transition-colors duration-200"
          >
            Saiba Mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#a76f61]/60 hover:text-[#a76f61] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
