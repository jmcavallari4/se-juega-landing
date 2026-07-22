
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-football.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    category: "",
    zone: "",
    contact: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Intentar enviar el formulario
      await fetch("https://submit-form.com/za8f9qXUy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Nombre del equipo": formData.teamName,
          "Categoría": formData.category,
          "Zona/Barrio": formData.zone,
          "Contacto": formData.contact
        }),
      });
    } catch (error) {
      // Ignorar cualquier error
    }

    // Redirigir a página de agradecimiento
    navigate("/gracias");
  };

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };
  return (
    <section id="cta" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="sj-blob w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 bg-bright-green/15 opacity-40" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-white mb-5 leading-tight">
            Registrate ahora y accedé a la versión beta
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Los{" "}
            <span className="sj-grad-text font-semibold">
              primeros 100 equipos registrados
            </span>{" "}
            obtendrán el rango de{" "}
            <span className="text-electric-yellow font-semibold">
              "miembro fundador"
            </span>{" "}
            con acceso al plan premium completo,{" "}
            <span className="sj-grad-text font-semibold">gratis para siempre!</span>
          </p>
        </div>

        <div className="sj-card p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="team-name" className="text-warm-white">
                  Nombre del equipo
                </Label>
                <Input
                  id="team-name"
                  type="text"
                  placeholder="Ingresá el nombre de tu equipo"
                  className="bg-muted border-border text-warm-white placeholder:text-muted-foreground h-12 rounded-xl"
                  value={formData.teamName}
                  onChange={handleInputChange('teamName')}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-warm-white">
                  Categoría
                </Label>
                <Input
                  id="category"
                  type="text"
                  placeholder="Masculino, Femenino o Mixto"
                  className="bg-muted border-border text-warm-white placeholder:text-muted-foreground h-12 rounded-xl"
                  value={formData.category}
                  onChange={handleInputChange('category')}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zone" className="text-warm-white">
                Zona/Barrio <span className="ml-2 text-xs text-muted-foreground">(Solo disponible en CABA y GBA por ahora.)</span>
              </Label>
              <Input
                id="zone"
                type="text"
                placeholder="¿De qué zona son?"
                className="bg-muted border-border text-warm-white placeholder:text-muted-foreground h-12 rounded-xl"
                value={formData.zone}
                onChange={handleInputChange('zone')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact" className="text-warm-white">
                WhatsApp o mail de contacto
              </Label>
              <Input
                id="contact"
                type="text"
                placeholder="Tu número de WhatsApp o email"
                className="bg-muted border-border text-warm-white placeholder:text-muted-foreground h-12 rounded-xl"
                value={formData.contact}
                onChange={handleInputChange('contact')}
                required
              />
            </div>

            <div className="text-center pt-2">
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="text-base md:text-lg px-12 py-4 h-auto w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registrando..." : "Registrá tu equipo Gratis!"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
