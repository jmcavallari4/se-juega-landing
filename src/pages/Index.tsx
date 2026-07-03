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
      <section className="py-16 md:py-24 bg-[hsl(150_22%_3%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden text-center rounded-3xl p-10 md:p-16 border border-white/10 bg-gradient-to-b from-[hsl(150_40%_9%)] to-[hsl(150_40%_5%)]">
            <div className="sj-blob w-[500px] h-[500px] -top-52 left-1/2 -translate-x-1/2 bg-bright-green/20 opacity-30" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-warm-white mb-4">
                ¡Es hora de jugar!
              </h3>
              <p className="text-muted-foreground mb-8 text-base md:text-lg max-w-xl mx-auto">
                No esperes más. Registrá tu equipo y comenzá a vivir la experiencia Se Juega.
              </p>
              <Button variant="cta" size="lg" className="text-base md:text-lg px-10 md:px-12 py-4 h-auto">
                <a href="#cta">Registrá tu Equipo Ahora Gratis!</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
