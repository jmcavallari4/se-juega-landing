const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-electric-yellow mb-6 md:mb-8">Se Juega</h3>
          
          <div className="flex justify-center space-x-6 md:space-x-8 mb-6 md:mb-8">
            <a 
              href="https://www.instagram.com/sejuega_app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-white/80 hover:text-electric-yellow transition-colors text-base md:text-lg"
            >
              Instagram
            </a>
            <a 
              href="https://www.facebook.com/share/17AE6ddkeR/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-white/80 hover:text-electric-yellow transition-colors text-base md:text-lg"
            >
              Facebook
            </a>
            <a 
              href="https://wa.me/5491147810254" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-white/80 hover:text-electric-yellow transition-colors text-base md:text-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 text-sm">
            <a 
              href="/politica-de-privacidad.html" 
              className="text-warm-white/60 hover:text-electric-yellow transition-colors"
            >
              Política de Privacidad
            </a>
            <a 
              href="/terminos-y-condiciones.html" 
              className="text-warm-white/60 hover:text-electric-yellow transition-colors"
            >
              Términos y Condiciones
            </a>
            <a 
              href="/cookies.html" 
              className="text-warm-white/60 hover:text-electric-yellow transition-colors"
            >
              Política de Cookies
            </a>
          </div>
          <p className="text-warm-white/60">
            © 2024 Se Juega. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;