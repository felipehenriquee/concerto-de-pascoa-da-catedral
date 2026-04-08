import { Mail } from "lucide-react";
import sesc from "../assets/images/patrocinio/1.sesc.svg";
import dibra from "../assets/images/patrocinio/2.dibra.svg";
import marquise from "../assets/images/patrocinio/3.marquise.svg";
import ecofor from "../assets/images/patrocinio/4.ecofor.svg";
import shalom from "../assets/images/patrocinio/5.shalom.svg";

const sponsors = [
  { src: sesc,     size: 'h-40 md:h-48' },
  { src: dibra,    size: 'h-40 md:h-48' },
  { src: marquise, size: 'h-12 md:h-16' },
  { src: ecofor,   size: 'h-12 md:h-16' },
  { src: shalom,   size: 'h-12 md:h-16' },
];

export default function SponsorshipSection() {
  return (
    <section id="sponsorship" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brown-900 mb-6">Patrocínio</h2>
          <div className="w-16 h-px bg-pink-300 mx-auto" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {sponsors.map(({ src, size }, i) => (
            <img
              key={i}
              src={src}
              alt={`Patrocinador ${i + 1}`}
              className={`${size} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200`}
            />
          ))}
        </div>

        {/* Contact */}
        <div className="text-center border-t border-pink-200 pt-12 mt-16">
          <p className="text-brown-700/60 text-sm mb-6">
            Concerto de Páscoa da Catedral
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-brown-700/80 text-sm">
            <a
              href="mailto:concertodepascoadacatedral@gmail.com"
              className="flex items-center gap-2 hover:text-pink-300 transition-colors"
            >
              <Mail size={16} className="text-pink-300" />
              concertodepascoadacatedral@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
