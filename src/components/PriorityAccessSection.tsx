import { Button } from "@/components/ui/button";

const PriorityAccessSection = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-background to-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.2fr_1fr] rounded-2xl border border-border shadow-metallic overflow-hidden">
          {/* Left side - message */}
          <div className="bg-card p-6 md:p-10 flex flex-col justify-center">
            <p className="text-electric-yellow text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
              Acceso fundador
            </p>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-warm-white mb-4">
              Quedan{" "}
              <span className="text-electric-yellow">48 lugares</span>{" "}
              de los 100 gratis para siempre
            </h3>

            <p className="text-base md:text-lg text-warm-white/80 mb-6 leading-relaxed">
              Los miembros fundadores acceden al plan premium completo sin costo, un lugar permanente al frente del ranking de su zona y un canal directo con el fundador para proponer mejoras al producto.
            </p>

            <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto shadow-glow self-start">
              <a href="#cta">¡Asegurar mi lugar ahora!</a>
            </Button>
          </div>

          {/* Right side - counter */}
          <div className="bg-gradient-to-br from-bright-green/10 to-metallic-green/5 border-t md:border-t-0 md:border-l border-border p-6 md:p-10 flex flex-col justify-center items-start">
            <div className="text-4xl md:text-5xl font-extrabold text-bright-green leading-none">
              52/100
            </div>
            <p className="text-sm text-warm-white/70 mt-2">
              cupos fundador ocupados
            </p>

            <div className="w-full h-2 bg-warm-white/10 rounded-full mt-5 overflow-hidden">
              <div
                className="h-full bg-gradient-hero rounded-full"
                style={{ width: "52%" }}
              />
            </div>

            <p className="text-xs text-warm-white/60 mt-3">
              Después del cupo 100, USD 5/equipo/mes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriorityAccessSection;
