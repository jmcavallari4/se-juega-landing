import { Button } from "@/components/ui/button";

const PriorityAccessSection = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border shadow-metallic backdrop-blur-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-electric-yellow/20 rounded-full mb-4 md:mb-6">
            <span className="text-2xl md:text-3xl">🚀</span>
          </div>
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-electric-yellow mb-4 md:mb-6">
            ¡Acceso Prioritario Exclusivo!
          </h3>
          
          <p className="text-lg text-warm-white/80 mb-4">
            Ya hay{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text font-bold">
              50 equipos en la waitlist
            </span>
          </p>

          <p className="text-lg md:text-xl text-warm-white/90 mb-6 md:mb-8 leading-relaxed">
            Los{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text font-bold">
              primeros 100 equipos registrados
            </span>
            {" "}obtendrán el rango de{" "}
            <span className="text-electric-yellow font-bold">
              "miembro fundador"
            </span>
            {" "}con acceso al plan premium completo,{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text font-bold text-xl md:text-2xl">
              gratis para siempre!
            </span>
          </p>

          <p className="text-base md:text-lg text-warm-white/70 mb-6 md:mb-8">
            Además, sumás un lugar permanente al frente del ranking de tu zona y acceso a un canal directo con el fundador para proponer mejoras al producto.
          </p>
          
          <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto shadow-glow animate-pulse">
            <a href="#cta">¡Asegurar mi lugar ahora!</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PriorityAccessSection;