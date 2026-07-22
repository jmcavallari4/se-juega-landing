import rankingExample from "@/assets/ranking-example.png";
import rankingBg from "@/assets/ranking-bg.jpg";

const RankingSection = () => {
  return (
    <section id="ranking" className="py-16 md:py-24 relative overflow-hidden bg-[hsl(150_22%_3%)]">
      <div className="absolute inset-0">
        <img
          src={rankingBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-[hsl(150_22%_3%)]/85" />
      </div>
      <div className="sj-blob w-[460px] h-[460px] -bottom-40 -left-32 bg-metallic-green/20 opacity-25" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="sj-eyebrow mb-4">El ranking</p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-white">
            El Ranking
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Texto */}
          <div className="space-y-5 md:space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-yellow/20 bg-electric-yellow/10 text-electric-yellow text-sm font-semibold px-4 py-1.5">
              ♟ Sistema ELO · como el ajedrez
            </span>

            <p className="text-lg md:text-xl text-warm-white leading-relaxed">
              Se Juega utiliza un sistema ELO, como el ajedrez o los videojuegos
              competitivos.
            </p>

            <div className="sj-card p-5 md:p-6 border-l-2 border-l-bright-green">
              <h3 className="font-semibold text-warm-white mb-4 text-lg">
                El sistema ajusta el puntaje del equipo según:
              </h3>
              <ul className="space-y-2.5 text-muted-foreground text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-electric-yellow mr-2">•</span>
                  El resultado del partido
                </li>
                <li className="flex items-start">
                  <span className="text-electric-yellow mr-2">•</span>
                  El puntaje de los dos equipos en el ranking al momento del
                  encuentro
                </li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Mientras mayor puntaje tenga el rival, más puntos otorgará una
              victoria sobre él y menos puntos restará una derrota. Los empates
              también pueden sumar o restar puntos.
            </p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              De esta manera, no importa tanto la cantidad de victorias, sino más
              bien su calidad.
            </p>

            <p className="text-base md:text-lg text-warm-white font-medium rounded-2xl p-5 md:p-6 bg-gradient-to-r from-electric-yellow/10 to-bright-green/10 border border-border">
              Este sistema ayuda a tener un ranking que refleje el verdadero
              nivel de todos los equipos.
            </p>
          </div>

          {/* Imagen */}
          <div className="flex justify-center">
            <div className="sj-card p-3 md:p-4">
              <img
                src={rankingExample}
                alt="Ejemplo de ranking ELO de equipos de fútbol"
                className="w-full max-w-md h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
