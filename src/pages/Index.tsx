import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PriorityAccessSection from "@/components/PriorityAccessSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import RankingSection from "@/components/RankingSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PriorityAccessSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      
      <aside aria-label="Disponibilidad geográfica" className="py-2">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            ⚠️ Por ahora, disponible solo en CABA y GBA. Estamos arrancando por el AMBA para asegurar la mejor experiencia. ¡Pronto en más zonas!
          </p>
        </div>
      </aside>
      <RankingSection />
      <CTASection />
      <FAQ />
      
      {/* Final CTA */}
      <section className="py-4 md:py-8 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-background rounded-xl md:rounded-2xl p-4 md:p-8 border border-border shadow-metallic">
            <h3 className="text-lg md:text-2xl font-bold text-electric-yellow mb-3 md:mb-6">
              ¡Es hora de jugar!
            </h3>
            <p className="text-warm-white/80 mb-4 md:mb-8 text-sm md:text-lg">
              No esperes más. Registrá tu equipo y comenzá a vivir la experiencia Se Juega.
            </p>
            <Button variant="cta" size="default" className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto shadow-glow">
              <a href="#cta">Registrá tu Equipo Ahora Gratis!</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
