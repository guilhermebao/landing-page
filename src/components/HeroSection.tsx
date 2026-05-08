import heroImage from "@/assets/bombeiro.jpeg";
import { Shield, CheckCircle, ClipboardList, FireExtinguisher, ClipboardMinus } from "lucide-react";

const WHATSAPP_NUMBER = "5537988339363";

const features = [
  { icon: Shield, text: " Obtenção e Renovação do AVCB e CLCB" },
  { icon: FireExtinguisher, text: "Treinamento e Capacitação da Brigada de Incêndio" },
  { icon: ClipboardList, text: "Obtenção da Dispensa de AVCB e CLCB" },
  { icon: CheckCircle, text: "Elaboração de Laudos Estanqueidade" },
  { icon: ClipboardMinus, text: "Assessoria Especializada" },
  { icon: FireExtinguisher, text: "Elaboração e Alteração do Projeto de Incêndio" },
];

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = "MVM Engenharia gostaria de saber sobre o serviço de vigilância sanitária.";
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-card">
      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="animate-fade-in-up space-y-6">
          {/* <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            Vigilância Sanitária
          </span> */}
          <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Soluções em{" "}
            <span className="text-destructive">Projeto de incêndio</span> para sua
            empresa
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
          Oferecemos assessoria completa para regularização junto ao Corpo de Bombeiros, através da obtenção de AVCB/CLCB, elaboração de Projetos e confecção dos documentos complementares. Garanta a conformidade do seu negócio e edificação. 
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {features.map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-2 rounded-lg bg-[#ef444430] px-4 py-2 text-sm font-medium text-destructive"
              >
                <f.icon className="h-4 w-4 text-destructive" />
                {f.text}
              </div>
            ))}
          </div>
          <button
            onClick={handleWhatsApp}
            className="mt-2 inline-block rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground transition hover:opacity-90"
          >
            Solicitar Orçamento
          </button>
        </div>
        <div className="animate-fade-in-up [animation-delay:200ms] opacity-0">
          <img
            src={heroImage}
            alt="Profissional realizando inspeção sanitária"
            width={1280}
            height={720}
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
