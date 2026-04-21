import heroImage from "@/assets/hero-service.jpg";
import { Shield, CheckCircle, ClipboardList } from "lucide-react";

const WHATSAPP_NUMBER = "5537988339363";

const features = [
  { icon: Shield, text: "Licenciamento Sanitário" },
  { icon: CheckCircle, text: "Adequação às Normas" },
  { icon: ClipboardList, text: "Consultoria Especializada" },
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
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            Vigilância Sanitária
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Soluções em{" "}
            <span className="text-primary">Vigilância Sanitária</span> para sua
            empresa
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Oferecemos consultoria completa para adequação sanitária, obtenção de
            licenças e cumprimento das exigências legais. Garanta a conformidade
            do seu negócio.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {features.map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
              >
                <f.icon className="h-4 w-4 text-primary" />
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
