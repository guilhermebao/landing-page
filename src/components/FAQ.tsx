import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "5537988339363";

const faqs = [
  {
    q: "Quem precisa obter o Certificado de Acessibilidade?",
    a: "Todo estabelecimento com CNPJ necessita do Certificado de Acessibilidade para obtenção do Alvará de Localização e Funcionamento, conforme as exigências do município e das normas de acessibilidade vigentes.",
  },
  {
    q: "Quanto tempo leva para obter o Certificado de Acessibilidade?",
    a: "O prazo pode variar conforme a complexidade da edificação e das adequações necessárias, mas geralmente o processo leva em média 30 dias.",
  },
  {
    q: "Posso obter um prazo para executar as medidas de acessibilidade e mesmo assim estar regular?",
    a: "Sim, é possível solicitar o aprazamento do Certificado de Acessibilidade, permitindo a regularização do imóvel enquanto as adequações são executadas; dependendo da complexidade da obra, os prazos podem variar entre um, três e até sete anos.",
  },
  {
    q: "Qual a finalidade do Projeto de Acessibilidade?",
    a: "O Projeto de Acessibilidade é um projeto complementar diretamente ligado ao projeto arquitetônico, com a finalidade de garantir que a edificação atenda às normas de acessibilidade, contemplando itens como sanitários acessíveis, rampas, corrimãos, largura de corredores, sinalização tátil e demais critérios previstos na NBR 9050.",
  },
  {
    q: "O que acontece se o estabelecimento não atender às normas de acessibilidade?",
    a: "O estabelecimento pode ter dificuldades para obter o Alvará de Localização e Funcionamento, além de estar sujeito a fiscalizações, notificações, autuações e outras penalidades pelos órgãos competentes.",
  },
  {
    q: "Quando preciso renovar o Alvará Sanitário?",
    a: "O Alvará Sanitário possui validade e deve ser renovado periodicamente conforme as exigências do município, sendo importante manter a regularidade para evitar multas e problemas com a fiscalização.",
  },
];

const FAQ = () => {
  const handleWhatsApp = () => {
    const message = "MVM Engenharia gostaria de saber sobre o serviço de projeto de incêndio.";
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-card py-16 md:py-24">
      <section>
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços de projeto de incêndio
          </p>

          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-background px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <div className="container mx-auto flex justify-center px-4">
        <button
          onClick={handleWhatsApp}
          className="w-full max-w-2xl mt-4 inline-block rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground transition hover:opacity-90"
        >
          Solicitar Orçamento
        </button>
      </div>
    </div>
  );
};

export default FAQ;
