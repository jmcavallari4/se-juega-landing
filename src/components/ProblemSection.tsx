import problemBg from "@/assets/problem-bg.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProblemSection = () => {
  const problems = [
    {
      question: "¿Te cuesta armar partidos?",
      description: "No juntan 10, cuesta encontrar rivales o terminan siempre jugando contra los mismos."
    },
    {
      question: "¿Te frustra la experiencia?",
      description: "Mala leche, partidos desparejos o sin competencia real."
    },
    {
      question: "¿Querés más emoción?",
      description: "Nuevos desafíos y partidos en serio, no solo una juntada."
    }
  ];

  return (
    <section className="py-6 md:py-8 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={problemBg} 
          alt="Fútbol background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 md:mb-10">
          <p className="text-base md:text-lg text-electric-yellow mb-4 md:mb-6 font-semibold">
            Armar un buen partido hoy es más difícil de lo que parece.
          </p>
          
          <h3 className="text-base md:text-lg font-bold text-warm-white mb-4 md:mb-6">
            ¿Te pasó alguna de estas?
          </h3>
          
          <div className="max-w-3xl mx-auto mb-6 md:mb-10">
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border hover:border-metallic-green transition-all duration-300 hover:shadow-glow">
              <div className="space-y-4 md:space-y-5 text-warm-white text-sm md:text-base">
                {problems.map((problem, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <h4 className="font-semibold text-warm-white">{problem.question}</h4>
                    <p className="text-warm-white/80 text-sm md:text-base leading-relaxed pl-4">{problem.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-base md:text-lg font-bold text-electric-yellow mb-3 md:mb-4 text-center">
            Hoy en día, existen dos formas de competir
          </h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="torneos" className="border-border">
              <AccordionTrigger className="text-base md:text-lg font-bold text-warm-white hover:text-electric-yellow">
                <div className="flex items-center">
                  <span className="text-lg md:text-xl mr-2">🏆</span>
                  <span className="underline">Torneos convencionales</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 md:space-y-3 text-warm-white/90 text-xs md:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">❌</span>
                    Quedás atado a días y horarios fijos.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">❌</span>
                    Tenés pocos rivales y de niveles muy dispares.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">❌</span>
                    Exigen inscripción anticipada y depósito por posibles ausencias.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">❌</span>
                    Priorizan el negocio por sobre la experiencia deportiva.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rivales" className="border-border">
              <AccordionTrigger className="text-base md:text-lg font-bold text-warm-white hover:text-electric-yellow">
                <div className="flex items-center">
                  <span className="text-lg md:text-xl mr-2">🔍</span>
                  <span className="underline">Buscar rivales por redes o contactos</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 md:space-y-3 text-warm-white/90 text-xs md:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">❌</span>
                    Cuesta encontrar un rival que se acomode a tus horarios y zona
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">❌</span>
                    Que el partido sea parejo es cuestión de suerte.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">❌</span>
                    No sabés con quién vas a jugar ni cómo se comportan
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">❌</span>
                    No existe una competencia continua, cada partido es aislado
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;