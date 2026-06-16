import rankingBg from "@/assets/ranking-bg.jpg";
import rankingExample from "@/assets/ranking-example.png";

const RankingSection = () => {
  return (
    <section id="ranking" className="py-8 md:py-12 bg-card relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={rankingBg} 
          alt="Ranking background" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-card/85"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-electric-yellow mb-6">
            El Ranking
          </h2>
        </div>

        {/* Single Box with Text and Image */}
        <div className="bg-background rounded-2xl p-4 md:p-8 lg:p-12 border border-border shadow-metallic max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 text-warm-white/90 text-base md:text-lg leading-relaxed">
              <p className="text-lg md:text-xl">
                Se Juega utiliza un sistema ELO, como el ajedrez o los videojuegos competitivos.
              </p>
              
              <div className="bg-muted rounded-xl p-4 md:p-6 border-l-4 border-metallic-green">
                <h3 className="font-semibold text-warm-white mb-3 md:mb-4 text-lg md:text-xl">El sistema ajusta el puntaje del equipo según:</h3>
                <ul className="space-y-2 text-warm-white/90 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">•</span>
                    El resultado del partido
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">•</span>
                    El puntaje de los dos equipos en el ranking al momento del encuentro
                  </li>
                </ul>
              </div>

              <p className="text-sm md:text-lg">
                Mientras mayor puntaje tenga el rival, más puntos otorgará una victoria sobre él y menos puntos restará una derrota. Los empates también pueden sumar o restar puntos.
              </p>

              <p className="text-sm md:text-lg">
                De esta manera, no importa tanto la cantidad de victorias, sino más bien su calidad.
              </p>

              <p className="text-base md:text-lg text-center text-warm-white font-medium bg-gradient-to-r from-electric-yellow/20 to-neon-green/20 rounded-xl p-4 md:p-6">
                Este sistema ayuda a tener un ranking que refleje el verdadero nivel de todos los equipos.
              </p>
            </div>

            {/* Ranking Image */}
            <div className="flex justify-center">
              <img 
                src={rankingExample} 
                alt="Ejemplo de ranking ELO de equipos de fútbol" 
                className="w-full max-w-md h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;