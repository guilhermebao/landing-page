import heroImage from "@/assets/regularizacao-de-imoveis.jpeg";
import { ClipboardCheck, CheckCircle, ClipboardList, FireExtinguisher, ClipboardMinus, Toilet, CircleUserRound } from "lucide-react";

const WHATSAPP_NUMBER = "5537988339363";

const features = [
  { icon: ClipboardMinus, text: "Elaboração do Projeto Arquitetônico – ProUrb" },
  { icon: ClipboardCheck, text: "Acompanhamento do processo na Lei de Anistia" },
  { icon: ClipboardList, text: "Obtenção do Certificado de Conclusão de Obra (CCO) – Habite-se" },
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
            <span className="text-orange-400">Regularização de Imóveis</span> através da Lei de Anistia
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
          Oferecemos assessoria completa para regularização do seu imóvel junto ao ProUrb — Lei de Regularização Onerosa. Se sua edificação não possui projeto aprovado na Prefeitura ou está com a documentação desatualizada, realizamos a aprovação do novo projeto através da Lei de Anistia, permitindo a averbação do imóvel de forma prática, segura e com acompanhamento técnico especializado. 
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
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-400/15 hover:underline"
                >
                  <f.icon className="h-4 w-4 shrink-0 text-orange-400" />
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
