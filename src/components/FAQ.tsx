import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import solutionBg from "@/assets/solution-bg.jpg";

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
    <section id="faq" className="py-16 md:py-24 bg-[hsl(150_22%_3%)] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={solutionBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-[hsl(150_22%_3%)]/85" />
      </div>
      <div className="sj-blob w-[400px] h-[400px] -bottom-40 -right-24 bg-metallic-green/20 opacity-25" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="sj-eyebrow mb-4">Dudas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Resolvé todas tus dudas sobre Se Juega
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="sj-card border px-5 md:px-6"
            >
              <AccordionTrigger className="text-warm-white hover:text-electric-yellow hover:no-underline text-left text-base md:text-lg font-medium py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
