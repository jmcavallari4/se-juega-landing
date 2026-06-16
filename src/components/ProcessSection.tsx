import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import busquedaHover from "@/assets/busqueda-hover.png";
import desafioHover from "@/assets/desafio-hover.png";
import rankingHover from "@/assets/ranking-hover.png";
import registroHover from "@/assets/registro-hover.png";
import coordinaHover from "@/assets/coordina-hover.png";
import calificaHover from "@/assets/califica-hover.png";

const ProcessSection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [openSteps, setOpenSteps] = useState<{ [key: number]: boolean }>({});

  const steps = [
    {
      number: "1",
      title: "Registrá tu equipo",
      description: "indicá tu categoría (masculino/femenino/mixto), tu zona y tus días/horarios preferidos.",
      hoverImage: registroHover
    },
    {
      number: "2", 
      title: "Buscá rivales",
      description: "usá filtros por zona, disponibilidad y nivel... o desafiá a quien quieras.",
      hoverImage: busquedaHover
    },
    {
      number: "3",
      title: "Coordiná el partido",
      description: "hablá con el capitán rival y organizá lugar, día y hora.",
      hoverImage: coordinaHover
    },
    {
      number: "4",
      title: "Cargá el desafío",
      description: "agendalo en la app, el rival lo confirma.",
      hoverImage: desafioHover
    },
    {
      number: "5",
      title: "Jugá y calificá",
      description: "después del partido, ambos capitanes cargan el resultado y puntúan el comportamiento del rival.",
      hoverImage: calificaHover
    },
    {
      number: "6",
      title: "Competí en el ranking",
      description: "subí posiciones y convertite en el mejor de tu zona.",
      hoverImage: rankingHover
    }
  ];

  return (
    <section id="como-funciona" className="py-8 md:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-electric-yellow mb-2 md:mb-4">
            ¿Cómo funciona?
          </h2>
        </div>

        {/* Desktop Version - Grid Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Steps Column */}
            <div className="space-y-1.5 md:space-y-3">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-lg p-2 md:p-3 border border-border shadow-metallic hover:shadow-glow transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredStep(step.hoverImage ? index : null)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-hero rounded-full flex items-center justify-center text-background font-bold text-xs flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs md:text-sm font-bold text-electric-yellow mb-0.5 md:mb-1">
                        {step.title}
                      </h3>
                      <p className="text-warm-white/90 text-xs leading-tight md:leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Column */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-48 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                {hoveredStep !== null && steps[hoveredStep]?.hoverImage && (
                  <img 
                    src={steps[hoveredStep].hoverImage} 
                    alt={`Preview de ${steps[hoveredStep].title}`}
                    className="w-full h-full object-contain animate-fade-in"
                  />
                )}
                {hoveredStep === null && (
                  <div className="w-full h-full bg-card/50 border border-border rounded-xl flex items-center justify-center">
                    <p className="text-warm-white/60 text-center text-sm md:text-lg px-4">
                      Pasa el mouse sobre los pasos para ver las capturas de pantalla
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Version - Accordion Layout */}
        <div className="lg:hidden max-w-4xl mx-auto">
          <div className="space-y-2">
            {steps.map((step, index) => (
              <Collapsible 
                key={index}
                open={openSteps[index] || false}
                onOpenChange={(open) => setOpenSteps(prev => ({ ...prev, [index]: open }))}
              >
                <CollapsibleTrigger className="w-full">
                  <div className="bg-card rounded-lg p-2 md:p-3 border border-border shadow-metallic hover:shadow-glow transition-all duration-300">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-hero rounded-full flex items-center justify-center text-background font-bold text-sm flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="min-w-0 flex-1 text-left">
                        <h3 className="text-sm md:text-base font-bold text-electric-yellow mb-1 md:mb-1">
                          {step.title}
                        </h3>
                        <p className="text-warm-white/90 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-warm-white/60 transition-transform duration-200 data-[state=open]:rotate-180" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden">
                  <div className="mt-2 rounded-lg overflow-hidden bg-card/50 border border-border">
                    <img 
                      src={step.hoverImage} 
                      alt={`Preview de ${step.title}`}
                      className="w-full h-48 md:h-64 object-contain bg-background/50"
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;