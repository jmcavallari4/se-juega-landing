import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-football.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-8 md:pb-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Fútbol competitivo" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Pre-headline */}
            <p className="text-electric-yellow text-lg md:text-xl font-medium mb-4 animate-fade-in">
              ¿Jugás al fútbol y querés partidos de calidad?
            </p>

            {/* Main headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-white mb-4 md:mb-6 leading-tight animate-fade-in">
              Jugá contra{" "}
              <span className="text-transparent bg-gradient-hero bg-clip-text">
                equipos de tu nivel
              </span>
              . Cuando quieras. Donde quieras.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-warm-white/90 mb-6 md:mb-8 leading-relaxed animate-fade-in">
              Se Juega te conecta con rivales cerca tuyo, a tu nivel, para que compitas en un ranking que se actualiza partido a partido.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto shadow-glow">
                <a href="#cta">🔘 Registrá tu Equipo Gratis!</a>
              </Button>
              <div className="inline-flex items-center gap-2 bg-bright-green/10 border border-bright-green/40 text-bright-green font-semibold text-sm md:text-base rounded-full px-4 py-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-bright-green shadow-neon"></span>
                52 equipos ya en la waitlist — quedan 48 cupos fundador
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs md:max-w-md space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-metallic border-2 border-metallic-green">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=diytyojwg&public_id=prototipo_2_wsdkhh&profile=cld-looping&controls=false&autoplay=true&muted=true"
                  title="Se Juega - Demo"
                  className="w-full h-full pointer-events-none"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;