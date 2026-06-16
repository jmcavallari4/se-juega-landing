import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿El servicio es pago?",
      answer: "Los primeros 100 equipos registrados obtienen el rango de \"miembro fundador\": acceso completo al plan premium, gratis para siempre. A partir del equipo 101, el acceso tiene un costo de USD 5 por equipo al mes."
    },
    {
      question: "¿Qué pasa si no encuentro rival al principio?",
      answer: "Si en tus primeros 15 días registrado no conseguís ningún equipo rival para coordinar un partido a través de Se Juega, te conectamos personalmente con equipos de tu zona."
    },
    {
      question: "¿Se Juega funciona en cualquier lugar?",
      answer: "Por el momento solo funcionará en el Area Metropolitana de Buenos Aires (AMBA) con la idea de expandirse a futuro"
    },
    {
      question: "¿Sólo es para jugar fútbol 5?",
      answer: "No, la modalidad del partido la arreglan con el rival. Más adelante se implementarán Rankings para cada tamaño de cancha"
    },
    {
      question: "¿Sólo pueden jugar equipos masculinos?",
      answer: "No, habrá tres categorías y, por tanto, tres rankings: masculino, femenino y mixto."
    },
    {
      question: "¿Cómo confío en que el otro equipo cargará el resultado si perdió?",
      answer: "Si hay una discrepancia en la carga del resultado, el sistema dejará el partido como pendiente. Si un equipo acumula tres discrepancias, todos sus resultados pendientes se le darán por perdidos y se asignarán los puntos a sus rivales."
    },
    {
      question: "¿Qué pasa si el otro equipo no se presenta al partido?",
      answer: "Podés reportar la inasistencia desde la app. Si un equipo no se presenta sin aviso en más de una ocasión, se le asignará la derrota automática y su reputación se verá afectada."
    },
    {
      question: "¿Qué pasa con los equipos con mala reputación?",
      answer: "Los equipos con baja calificación aparecen menos en los resultados de búsqueda y tienen menos chances de ser desafiados. La reputación es clave para mantenerse activo y visible en la comunidad."
    },
    {
      question: "¿Puedo tener más de un equipo?",
      answer: "Sí. Los registros son por equipo, no por persona. Podés registrar todos los equipos en los que participás."
    },
    {
      question: "¿Puedo jugar más de un partido por semana?",
      answer: "Sí. No hay límite de desafíos por semana. Podés coordinar tantos partidos como quieras, siempre que los rivales acepten. Sin embargo, si desafiás al mismo equipo más de una vez en el mismo mes, solo el primer partido contará para el ranking, para evitar que se organicen encuentros repetidos con el fin de alterar posiciones."
    },
  ];

  return (
    <section id="faq" className="py-6 md:py-8 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-electric-yellow mb-3 md:mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg md:text-xl text-warm-white/80">
            Resolvé todas tus dudas sobre Se Juega
          </p>
        </div>

        <div className="bg-card rounded-2xl p-4 md:p-6 border border-border shadow-metallic">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-warm-white hover:text-electric-yellow text-left text-base md:text-lg font-medium py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-warm-white/80 text-sm md:text-base leading-relaxed pb-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;