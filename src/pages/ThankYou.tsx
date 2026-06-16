import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Disparar evento de Meta Pixel para registro completo
    if ((window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <CheckCircle className="w-24 h-24 text-electric-yellow" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-electric-yellow">
            ¡Registro Exitoso!
          </h1>
          <p className="text-xl md:text-2xl text-warm-white/90">
            Tu equipo ha sido registrado correctamente
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
          <p className="text-lg text-warm-white/80 leading-relaxed">
            Nos pondremos en contacto pronto para la próxima fase del proyecto.
          </p>
          <p className="text-base text-warm-white/70">
            Como parte de los primeros equipos registrados, tendrás acceso prioritario 
            a todas las funciones premium cuando lancemos la plataforma.
          </p>
        </div>

        <Button
          onClick={() => navigate("/")}
          className="bg-electric-yellow hover:bg-electric-yellow/90 text-deep-black font-bold text-lg px-8 py-6"
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;