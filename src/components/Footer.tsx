import solutionBg from "@/assets/solution-bg.jpg";

const Footer = () => {
  return (
    <footer className="bg-[hsl(150_22%_3%)] border-t border-border py-12 md:py-16 relative overflow-hidden">
      <img
        src={solutionBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.06]"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h3 className="font-display text-xl md:text-2xl font-bold text-warm-white">
            <span className="text-bright-green">Se</span> Juega
          </h3>

          <div className="flex justify-center gap-6 md:gap-8">
            <a
              href="https://www.instagram.com/sejuega_app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric-yellow transition-colors text-sm md:text-base"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/17AE6ddkeR/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric-yellow transition-colors text-sm md:text-base"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/5491147810254"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric-yellow transition-colors text-sm md:text-base"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 text-sm">
            <a
              href="/politica-de-privacidad.html"
              className="text-muted-foreground/70 hover:text-electric-yellow transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="/terminos-y-condiciones.html"
              className="text-muted-foreground/70 hover:text-electric-yellow transition-colors"
            >
              Términos y Condiciones
            </a>
            <a
              href="/cookies.html"
              className="text-muted-foreground/70 hover:text-electric-yellow transition-colors"
            >
              Política de Cookies
            </a>
          </div>
          <p className="text-muted-foreground/70 text-sm">
            © 2024 Se Juega. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
