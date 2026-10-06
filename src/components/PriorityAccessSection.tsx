import { Button } from "@/components/ui/button";
import rankingBg from "@/assets/ranking-bg.jpg";
import { getAppUrl, trackAppClick } from "@/lib/app-link";

const PriorityAccessSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-bright-green/20 bg-gradient-to-br from-bright-green/10 to-electric-yellow/[0.03] p-8 md:p-14">
          <img
            src={rankingBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.10]"
          />
          <div className="sj-blob w-[400px] h-[400px] -top-40 -right-24 bg-metallic-green/40 opacity-30" />

          <div className="relative z-10 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 items-center">
            {/* Mensaje */}
            <div>
              <p className="sj-eyebrow mb-4">Acceso fundador</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-white mb-4 leading-tight">
                Registrate en <span className="text-electric-yellow">octubre</span> y
                las funciones premium son gratis para siempre
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-7 leading-relaxed">
                Los equipos que se registren durante octubre son fundadores:
                acceden gratis para siempre a todas las funciones premium que
                se sumen en el futuro, tienen un lugar permanente al frente del
                ranking de su zona y un canal directo con el fundador para
                proponer mejoras.
              </p>
              <Button asChild variant="cta" size="lg" className="text-base md:text-lg px-8 py-4 h-auto">
                <a href={getAppUrl()} onClick={() => trackAppClick("acceso_fundador")}>Ingresá a la app</a>
              </Button>
            </div>

            {/* Contador */}
            <div className="text-center rounded-2xl border border-border bg-background/50 backdrop-blur-sm p-7 md:p-8">
              <p className="text-sm text-muted-foreground mb-3">
                Último día para entrar como fundador
              </p>
              <div className="font-display text-5xl md:text-6xl font-bold leading-none sj-grad-text">
                31/10
              </div>
              <p className="text-xs text-muted-foreground/70 mt-4">
                Arrancamos en noviembre
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriorityAccessSection;
