import heroImage from "@/assets/acessibilidade.jpeg";
import { ClipboardCheck, CheckCircle, ClipboardList, FireExtinguisher, ClipboardMinus, Toilet, CircleUserRound } from "lucide-react";

const WHATSAPP_NUMBER = "5537988339363";

const features = [
  { icon: ClipboardMinus, text: "Elaboração do Laudo de Acessibilidade" },
  { icon: ClipboardCheck, text: "Obtenção do Certificado de Acessibilidade" },
  { icon: ClipboardList, text: "Elaboração de Projetos de Acessibilidade" },
  { icon: CheckCircle, text: "Obtenção do Aprazamento para Implementação da Acessibilidade" },
  { icon: CircleUserRound, text: "Assessoria Especializada" },
];

const buildWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message =
      "MVM Engenharia gostaria de saber sobre o serviço de projeto de acessibilidade.";
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-card">
      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="animate-fade-in-up space-y-6">
          {/* <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            Projeto de Incêndio
          </span> */}
          <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Soluções em{" "}
            <span className="text-secondary">Acessibilidade</span> para sua empresa e edificação
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
          Oferecemos assessoria completa para regularização para Elaboração de Laudos de Acessibilidade, Projetos e Assessoria Especializada. Garanta a conformidade do seu negócio e edificação. 
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {features.map((f) => {
              const waMessage = `MVM Engenharia gostaria de saber sobre ${f.text.trim()}.`;
              return (
                <a
                  key={f.text}
                  href={buildWhatsAppUrl(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary transition hover:bg-secondary/15 hover:underline"
                >
                  <f.icon className="h-4 w-4 shrink-0 text-secondary" />
                  {f.text.trim()}
                </a>
              );
            })}
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
