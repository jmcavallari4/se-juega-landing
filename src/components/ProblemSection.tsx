import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProblemSection = () => {
  const problems = [
    {
      icon: "📵",
      question: "¿Te cuesta armar partidos?",
      description: "No juntan 10, cuesta encontrar rivales o terminan siempre jugando contra los mismos."
    },
    {
      icon: "😤",
      question: "¿Te frustra la experiencia?",
      description: "Mala leche, partidos desparejos o sin competencia real."
    },
    {
      icon: "🔥",
      question: "¿Querés más emoción?",
      description: "Nuevos desafíos y partidos en serio, no solo una juntada."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="sj-eyebrow mb-4">El problema</p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-4 leading-tight">
            Armar un buen partido hoy es más difícil de lo que parece.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            ¿Te pasó alguna de estas?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16 md:mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="sj-card p-7 md:p-8 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-electric-yellow/10 border border-electric-yellow/20 flex items-center justify-center text-2xl mb-5">
                {problem.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-warm-white mb-2">
                {problem.question}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg md:text-xl font-bold text-electric-yellow mb-5 text-center">
            Hoy en día, existen dos formas de competir
          </h3>

          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="torneos" className="sj-card border px-5 md:px-6">
              <AccordionTrigger className="text-base md:text-lg font-bold text-warm-white hover:text-electric-yellow hover:no-underline">
                <div className="flex items-center">
                  <span className="text-lg md:text-xl mr-3">🏆</span>
                  <span>Torneos convencionales</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
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

            <AccordionItem value="rivales" className="sj-card border px-5 md:px-6">
              <AccordionTrigger className="text-base md:text-lg font-bold text-warm-white hover:text-electric-yellow hover:no-underline">
                <div className="flex items-center">
                  <span className="text-lg md:text-xl mr-3">🔍</span>
                  <span>Buscar rivales por redes o contactos</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
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
