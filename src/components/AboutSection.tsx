import { Music, Heart, Users } from "lucide-react";

interface HighlightCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const highlights: HighlightCard[] = [
  {
    icon: <Music size={24} />,
    title: "Música sacra",
    description:
      "Repertório cuidadosamente selecionado entre clássicos da música sacra.",
  },
  {
    icon: <Heart size={24} />,
    title: "Celebração da fé",
    description:
      "Uma experiência espiritual que une a beleza da música à profundidade da mensagem pascal.",
  },
  {
    icon: <Users size={24} />,
    title: "Evento gratuito",
    description:
      "O evento é aberto ao público e oferecido gratuitamente à população.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-pink-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-pink-300 tracking-[0.3em] text-xs uppercase mb-3">
            Sobre o Evento
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#a76f61] mb-6">
            Uma tarde especial
          </h2>
          <div className="w-16 h-px bg-pink-300 mx-auto mb-6" />
          <p className="text-[#a76f61]/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Apresentando obras de nobres compositores como Johann Sebastian Bach
            e Georg Friedrich Händel o Concerto de Páscoa da Catedral
            Metropolitana de Fortaleza será realizado no dia{" "}
            <span className="font-bold text-[#a76f61] mr-1">
              11 de Abril de 2026 às 16:30h. 
            </span>
            O Concerto se destaca pela riqueza, pela harmonia e pelo repertório
            que transmitirá ao público o verdadeiro sentido da Páscoa, a Paixão
            de Cristo para salvação da humanidade.
            <br />
            Uma orquestra de cordas, com violinos, violas e violoncelos é a
            atração principal do Concerto de Páscoa e se desenvolverá durante 90
            minutos com regência do Maestro{" "}
            <span className="font-bold text-[#a76f61]">
              Nadilson Martins Gama.
            </span>
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white border border-pink-200 p-8 flex flex-col items-center text-center gap-4 hover:border-pink-300/80 transition-colors duration-300"
            >
              <span className="text-pink-300">{icon}</span>
              <h3 className="font-serif text-[#a76f61] text-xl">{title}</h3>
              <p className="text-[#a76f61]/70 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
