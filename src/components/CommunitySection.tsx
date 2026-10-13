import { COMMUNITY_URL, trackAppClick } from "@/lib/app-link";

const steps = [
  { icon: "👋", title: "Presentá tu equipo", text: "Zona, días, horarios y modalidad." },
  { icon: "🤝", title: "Arreglá el partido", text: "Hablás con el capitán rival y acuerdan lugar, día y hora." },
  { icon: "🏆", title: "Cargá el resultado en la app", text: "Así suma al ranking de tu zona." },
];

const CommunitySection = () => {
  return (
    <section id="comunidad" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#25D366]/40 bg-gradient-to-br from-[#25D366]/15 to-[hsl(150_40%_6%)] p-8 md:p-14">
          <div className="sj-blob w-[420px] h-[420px] -top-40 -right-24 bg-[#25D366]/30 opacity-40" />
          <div className="relative z-10 text-center">
            <p className="sj-eyebrow mb-4">Comunidad de WhatsApp</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-white leading-tight mb-4">
              Los partidos se coordinan en la{" "}
              <span className="text-[#25D366]">comunidad de WhatsApp</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Ahí están todos los equipos de Se Juega. Buscás rival, arreglás
              el partido con el otro capitán y después cargan el resultado en
              la app.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-10 text-left">
              {steps.map((s, i) => (
                <div key={i} className="sj-card p-6 bg-background/60">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-warm-white mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>

            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAppClick("comunidad_seccion")}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] text-[#06301a] font-bold text-lg md:text-xl px-8 py-4 shadow-[0_8px_30px_-6px_rgba(37,211,102,.6)] hover:-translate-y-0.5 transition-all"
            >
              💬 Entrá a la comunidad para coordinar partidos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
