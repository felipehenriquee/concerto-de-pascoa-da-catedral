import { Mail, Phone, Star } from 'lucide-react'

interface SponsorTier {
  name: string
  price: string
  benefits: string[]
  highlight: boolean
}

const sponsorTiers: SponsorTier[] = [
  {
    name: 'Bronze',
    price: 'R$ 500',
    highlight: false,
    benefits: [
      'Nome no programa impresso',
      'Menção no encerramento',
      '2 ingressos cortesia',
    ],
  },
  {
    name: 'Prata',
    price: 'R$ 1.500',
    highlight: false,
    benefits: [
      'Logo no banner do evento',
      'Nome no programa impresso',
      'Menção no encerramento',
      '5 ingressos cortesia',
    ],
  },
  {
    name: 'Ouro',
    price: 'R$ 3.000',
    highlight: true,
    benefits: [
      'Logo em destaque no banner',
      'Logo no programa impresso',
      'Menção especial no palco',
      'Post nas redes sociais',
      '10 ingressos VIP',
      'Mesa reservada',
    ],
  },
]

export default function SponsorshipSection() {
  return (
    <section id="sponsorship" className="py-24 bg-pink-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        {/* <div className="text-center mb-16">
          <p className="text-pink-300 tracking-[0.3em] text-xs uppercase mb-3">Apoie o Evento</p>
          <h2 className="font-serif text-4xl md:text-5xl text-brown-900 mb-6">Patrocínio</h2>
          <div className="w-16 h-px bg-pink-300 mx-auto mb-6" />
          <p className="text-brown-700/70 text-base max-w-xl mx-auto leading-relaxed">
            Associe sua marca a um evento cultural de impacto. Escolha o nível de patrocínio
            ideal para sua empresa e faça parte desta celebração.
          </p>
        </div> */}

        {/* Tiers */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 border transition-all duration-300 ${
                tier.highlight
                  ? 'bg-pink-300/10 border-pink-300 scale-105'
                  : 'bg-white border-pink-200 hover:border-pink-300/60'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-pink-300 text-white text-xs font-bold tracking-widest uppercase px-3 py-1">
                  <Star size={11} />
                  Recomendado
                </span>
              )}

              <h3 className={`font-serif text-2xl mb-1 ${tier.highlight ? 'text-pink-300' : 'text-brown-900'}`}>
                {tier.name}
              </h3>
              <p className="text-3xl font-bold text-brown-900 mb-6">{tier.price}</p>

              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-brown-700/80 text-sm">
                    <span className="text-pink-300 mt-0.5">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ${
                  tier.highlight
                    ? 'bg-pink-300 hover:bg-pink-400 text-white'
                    : 'bg-transparent border border-pink-300 text-pink-300 hover:bg-pink-300/10'
                }`}
              >
                Quero Patrocinar
              </button>
            </div>
          ))}
        </div> */}

        {/* Contact */}
        <div className="text-center border-t border-pink-200 pt-12">
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
            {/* <a
              href="tel:+5500000000000"
              className="flex items-center gap-2 hover:text-pink-300 transition-colors"
            >
              <Phone size={16} className="text-pink-300" />
              (00) 00000-0000
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}
