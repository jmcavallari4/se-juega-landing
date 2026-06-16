
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ctaBg from "@/assets/cta-bg.jpg";
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
    <section id="cta" className="py-8 md:py-12 bg-card relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ctaBg} 
          alt="CTA background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-card/80"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-electric-yellow mb-6 md:mb-8">
            Registrate ahora y accedé a la versión beta
          </h2>
          <p className="text-lg md:text-xl text-warm-white/90 leading-relaxed">
            Los{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text font-bold">
              primeros 100 equipos registrados
            </span>
            {" "}obtendrán el rango de{" "}
            <span className="text-electric-yellow font-bold">
              "miembro fundador"
            </span>
            {" "}con acceso al plan premium completo,{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text font-bold">gratis para siempre!</span>
          </p>
        </div>

        <div className="bg-background rounded-2xl p-4 md:p-8 lg:p-12 border border-border shadow-metallic">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="team-name" className="text-warm-white text-lg">
                  Nombre del equipo
                </Label>
                <Input
                  id="team-name"
                  type="text"
                  placeholder="Ingresá el nombre de tu equipo"
                  className="bg-muted border-border text-warm-white placeholder:text-warm-white/60"
                  value={formData.teamName}
                  onChange={handleInputChange('teamName')}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-warm-white text-lg">
                  Categoría
                </Label>
                <Input
                  id="category"
                  type="text"
                  placeholder="Masculino, Femenino o Mixto"
                  className="bg-muted border-border text-warm-white placeholder:text-warm-white/60"
                  value={formData.category}
                  onChange={handleInputChange('category')}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zone" className="text-warm-white text-lg">
                Zona/Barrio <span className="ml-2 text-xs text-muted-foreground">(Solo disponible en CABA y GBA por ahora.)</span>
              </Label>
              <Input
                id="zone"
                type="text"
                placeholder="¿De qué zona son?"
                className="bg-muted border-border text-warm-white placeholder:text-warm-white/60"
                value={formData.zone}
                onChange={handleInputChange('zone')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact" className="text-warm-white text-lg">
                WhatsApp o mail de contacto
              </Label>
              <Input
                id="contact"
                type="text"
                placeholder="Tu número de WhatsApp o email"
                className="bg-muted border-border text-warm-white placeholder:text-warm-white/60"
                value={formData.contact}
                onChange={handleInputChange('contact')}
                required
              />
            </div>

            <div className="text-center pt-4">
              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="text-lg px-12 py-4 h-auto shadow-glow"
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
