import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "5537988339363";

const faqs = [
  {
    q: "O que é a Lei de Anistia ou ProUrb?",
    a: "A Lei de Regularização Onerosa, também conhecida como ProUrb ou Lei de Anistia, é um programa de regularização que permite legalizar imóveis construídos em desacordo com o projeto aprovado ou sem aprovação na Prefeitura, possibilitando que a edificação fique regular perante o município.",
  },
  {
    q: "Quais imóveis podem ser regularizados pelo ProUrb?",
    a: "Podem ser regularizados imóveis residenciais, comerciais, multifamiliares e industriais que possuam irregularidades construtivas, ampliações não aprovadas ou ausência de projeto regularizado junto à Prefeitura.",
  },
  {
    q: "Quais as vantagens de regularizar meu imóvel?",
    a: "A regularização permite averbar o imóvel, facilitar financiamentos, vendas e transferências, além de evitar multas, notificações e problemas junto à Prefeitura Municipal.",
  },
  {
    q: "Meu imóvel não possui projeto aprovado, ainda assim posso regularizar?",
    a: "Sim, em muitos casos é possível realizar a regularização mesmo sem projeto aprovado anteriormente, desde que a edificação atenda aos critérios estabelecidos pela Lei de Anistia vigente.",
  },
  {
    q: "Quanto tempo leva para regularizar um imóvel?",
    a: "O prazo pode variar conforme a complexidade da edificação e a documentação disponível, mas geralmente o processo leva entre 60 e 120 dias.",
  },
  {
    q: "O imóvel regularizado pode ser averbado no cartório?",
    a: "Sim, após a aprovação da regularização junto à Prefeitura, o imóvel poderá ser averbado no cartório, atualizando oficialmente a matrícula da edificação.",
  },
  {
    q: "O que acontece se o imóvel permanecer irregular?",
    a: "O imóvel pode sofrer multas, notificações e dificuldades para venda, f inanciamento, inventário e transferência, além de impedir a averbação correta da construção junto ao cartório; em imóveis de caráter comercial, a irregularidade também pode gerar dificuldades ou até impossibilitar a obtenção do Alvará de Localização e Funcionamento das empresas instaladas no local.",
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
