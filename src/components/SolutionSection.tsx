import { Button } from "@/components/ui/button";
import solutionBg from "@/assets/solution-bg.jpg";

const SolutionSection = () => {
  const benefits = [
    "Una gran variedad de equipos para desafiar, de todas las zonas y niveles.",
    "Libertad para escoger la fecha, el horario y el lugar que más te convenga para jugar.",
    "Un ranking dinámico que refleja el nivel real de cada equipo.",
    "Un sistema de reputación que filtra equipos con mala actitud y promueve el juego limpio.",
    "Todo esto, sin pagar el costo extra de un torneo."
  ];

  return (
    <section id="ventajas" className="py-8 md:py-12 bg-card relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={solutionBg} 
          alt="Solution background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-card/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-lg md:text-xl text-warm-white mb-4">
            Por este motivo creamos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 uppercase">
            <span className="text-bright-green">SE</span>{" "}
            <span className="text-electric-yellow">JUEGA</span>
          </h2>
        </div>

        {/* Benefits */}
        <div className="mb-8 md:mb-12">
          <div className="bg-background rounded-2xl p-4 md:p-8 border border-border shadow-metallic">
            <h3 className="text-xl md:text-2xl font-bold text-electric-yellow mb-6 md:mb-8 text-center">
              Con Se Juega vas a tener:
            </h3>
            <div className="space-y-4 md:space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xl">⚽</span>
                  </div>
                  <p className="text-warm-white text-base md:text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-lg text-warm-white/80 mb-4">
            Ya hay{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text font-bold">
              50 equipos en la waitlist
            </span>
          </p>
          <Button variant="cta" size="lg" className="text-lg px-12 py-4 h-auto shadow-glow">
            <a href="#cta">Registrá tu Equipo Ahora Gratis!</a>
          </Button>
        </div>

        {/* What is Se Juega */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-electric-yellow mb-4 md:mb-6">
            ¿Qué es Se Juega?
          </h3>
          <p className="text-lg md:text-xl text-warm-white max-w-4xl mx-auto leading-relaxed mb-4 md:mb-6">
            Se juega es una comunidad de equipos amateur que quieren competir de manera equilibrada y sin conflictos.
          </p>
          <p className="text-lg md:text-xl text-warm-white max-w-4xl mx-auto leading-relaxed">
            Acá jugás{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text font-semibold">cuando</span>{" "}
            querés,{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text font-semibold">donde</span>{" "}
            querés, y{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text font-semibold">contra</span>{" "}
            quien querés.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;