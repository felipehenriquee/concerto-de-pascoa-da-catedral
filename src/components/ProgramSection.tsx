import { Music } from 'lucide-react'

interface ProgramItem {
  number: number
  title: string
  composer: string
}

const programItems: ProgramItem[] = [
  { number: 1,  title: 'Glória',                              composer: 'Vivaldi'        },
  { number: 2,  title: 'Ária',                                composer: 'Bach'           },
  { number: 3,  title: 'Jesus Alegria dos Homens',            composer: 'Bach'           },
  { number: 4,  title: 'Adágio de Albinoni',                  composer: 'Remo Giazotto'  },
  { number: 5,  title: 'Concerto para 2 Violinos — I mov.',   composer: 'Vivaldi'        },
  { number: 6,  title: 'Panis Angelicus',                     composer: 'César Franck'   },
  { number: 7,  title: 'Sheep May Safely',                    composer: 'Bach'           },
  { number: 8,  title: 'Concerto para 2 Violinos — II mov.',  composer: 'Bach'           },
  { number: 9,  title: 'Ombra Mai Fu',                        composer: 'Händel'         },
  { number: 10, title: 'Lascia Ch\'io Pianga',                composer: 'Händel'         },
  { number: 11, title: 'Inverno',                             composer: 'Vivaldi'        },
  { number: 12, title: 'Aleluia — O Messias',                 composer: 'Händel'         },
]

export default function ProgramSection() {
  return (
    <section id="program" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-pink-300 tracking-[0.3em] text-xs uppercase mb-3">Concerto</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#a76f61] mb-6">Programação Musical</h2>
          <div className="w-16 h-px bg-pink-300 mx-auto" />
        </div>

        {/* Program list */}
        <ol className="flex flex-col divide-y divide-pink-200">
          {programItems.map(({ number, title, composer }) => (
            <li
              key={number}
              className="flex items-center gap-5 py-4 group"
            >
              {/* Number */}
              <span className="text-pink-300 font-serif text-sm w-6 text-right shrink-0">
                {number}.
              </span>

              {/* Icon */}
              <Music size={14} className="text-pink-300/60 shrink-0" />

              {/* Title & composer */}
              <div className="flex flex-1 items-baseline justify-between gap-4 min-w-0">
                <span className="font-serif text-[#a76f61] text-base leading-snug">
                  {title}
                </span>
                <span className="text-[#a76f61]/80 text-xs tracking-wide whitespace-nowrap">
                  {composer}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
