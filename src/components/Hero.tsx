import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-football.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24"
    >
      {/* Foto de fondo */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fútbol competitivo"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
      </div>

      {/* Blob de acento */}
      <div className="sj-blob w-[500px] h-[500px] -top-52 right-0 bg-bright-green/25 opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <div className="inline-flex animate-fade-in">
              <span className="sj-pill">
                <span className="sj-dot" />
                ¿Jugás al fútbol y querés partidos de calidad?
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white leading-[1.05] animate-fade-in">
              Jugá contra{" "}
              <span className="sj-grad-text">equipos de tu nivel</span>. Cuando
              quieras. Donde quieras.
            </h1>

            <p className="mt-5 md:mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in">
              Se Juega te conecta con rivales cerca tuyo, a tu nivel, para que
              compitas en un ranking que se actualiza partido a partido.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start animate-fade-in">
              <Button variant="hero" size="lg" className="text-base md:text-lg px-8 py-4 h-auto">
                <a href="#cta">🔘 Registrá tu Equipo Gratis!</a>
              </Button>
            </div>

            <div className="mt-7 flex items-center gap-3 justify-center lg:justify-start animate-fade-in">
              <div className="flex -space-x-3">
                {["⚽", "🥅", "🏆"].map((e, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-metallic-green/40 to-bright-green/40 flex items-center justify-center text-sm"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                <span className="text-warm-white font-semibold">52 equipos</span>{" "}
                ya en la waitlist — quedan{" "}
                <span className="text-warm-white font-semibold">48 cupos fundador</span>
              </p>
            </div>
          </div>

          {/* Visual: video demo en marco tipo teléfono */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 -z-10 blur-3xl bg-bright-green/20 rounded-full scale-90" />
              <div className="w-[270px] md:w-[300px] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[hsl(150_30%_10%)] to-[hsl(150_30%_5%)] p-3 shadow-metallic">
                <div className="rounded-[2rem] overflow-hidden border border-border aspect-[9/16] bg-background">
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
      </div>
    </section>
  );
};

export default Hero;
