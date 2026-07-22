import { Button } from "@/components/ui/button";
import solutionBg from "@/assets/solution-bg.jpg";

const SolutionSection = () => {
  const benefits = [
    {
      icon: "🎯",
      text: "Una gran variedad de equipos para desafiar, de todas las zonas y niveles.",
      span: "md:col-span-2",
    },
    {
      icon: "📊",
      text: "Un ranking dinámico que refleja el nivel real de cada equipo.",
      span: "",
    },
    {
      icon: "🗓️",
      text: "Libertad para escoger la fecha, el horario y el lugar que más te convenga para jugar.",
      span: "",
    },
    {
      icon: "🛡️",
      text: "Un sistema de reputación que filtra equipos con mala actitud y promueve el juego limpio.",
      span: "",
    },
    {
      icon: "💸",
      text: "Todo esto, sin pagar el costo extra de un torneo.",
      span: "",
      feat: true,
    },
  ];

  return (
    <section
      id="ventajas"
      className="py-16 md:py-24 relative overflow-hidden bg-[hsl(150_22%_3%)]"
    >
      <div className="absolute inset-0">
        <img
          src={solutionBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-[hsl(150_22%_3%)]/85" />
      </div>
      <div className="sj-blob w-[500px] h-[500px] top-0 -right-36 bg-metallic-green/20 opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-base md:text-lg text-muted-foreground mb-3">
            Por este motivo creamos
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            <span className="text-bright-green">SE</span>{" "}
            <span className="text-electric-yellow">JUEGA</span>
          </h2>
        </div>

        {/* Bento de beneficios */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`sj-card p-7 md:p-8 flex flex-col justify-between min-h-[180px] ${benefit.span} ${
                benefit.feat
                  ? "bg-gradient-to-br from-bright-green/[0.14] to-electric-yellow/[0.04] border-bright-green/20"
                  : ""
              }`}
            >
              <span className="text-3xl">{benefit.icon}</span>
              <p className="mt-6 text-base md:text-lg text-warm-white leading-snug">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex mb-5">
            <span className="sj-pill">
              <span className="sj-dot" />
              Ya hay 52 equipos en la waitlist
            </span>
          </div>
          <div>
            <Button variant="cta" size="lg" className="text-base md:text-lg px-10 py-4 h-auto">
              <a href="#cta">Registrá tu Equipo Ahora Gratis!</a>
            </Button>
          </div>
        </div>

        {/* Qué es Se Juega */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-electric-yellow mb-5">
            ¿Qué es Se Juega?
          </h3>
          <p className="text-lg md:text-xl text-warm-white leading-relaxed mb-5">
            Se juega es una comunidad de equipos amateur que quieren competir de
            manera equilibrada y sin conflictos.
          </p>
          <p className="text-lg md:text-xl text-warm-white leading-relaxed">
            Acá jugás{" "}
            <span className="sj-grad-text font-semibold">cuando</span> querés,{" "}
            <span className="sj-grad-text font-semibold">donde</span> querés, y{" "}
            <span className="sj-grad-text font-semibold">contra</span> quien
            querés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
