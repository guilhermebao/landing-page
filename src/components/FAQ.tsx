import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "5537988339363";

const faqs = [
  {
    q: "Quem precisa tirar o Alvará Sanitário?",
    a: "Qualquer empresa ou profissional que exerça atividade que possa impactar a saúde pública precisa do Alvará Sanitário, incluindo clínicas, consultórios, farmácias, serviços de estética, academias, restaurantes e comércios que realizam manipulação de alimentos; para uma verificação mais assertiva, entre em contato conosco que analisamos a necessidade conforme o CNAE vinculado ao CNPJ da sua empresa.",
  },
  {
    q: "Quanto tempo leva para obter a Alvará Sanitário?",
    a: "O prazo pode variar de acordo com o município e a complexidade do negócio. Geralmente, o processo leva entre 20 à 60 dias após a entrada da documentação completa.",
  },
  {
    q: "O que é o projeto básico arquitetônico e quando ele é necessário?",
    a: "É o projeto que organiza os ambientes conforme as exigências sanitárias, garantindo fluxos adequados, separação de áreas, locais de moveis e equipamentos, tudo em conformidade com as normas e RDCs; ele é necessário para aprovação junto à Vigilância Sanitária em atividades de Nível III como clínicas odontológicas, consultórios e clinicas de estética com procedimentos invasivos, distribuidoras de medicamentos, entre outros, para uma verificação mais assertiva, entre em contato conosco que analisamos a necessidade conforme o CNAE vinculado ao CNPJ da sua empresa.",
  },
  {
    q: "O que são Manuais, POPs e RQs e por que são importantes?",
    a: "São documentos que padronizam os processos do estabelecimento, garantindo organização, qualidade e segurança nas atividades do dia a dia, além de serem exigidos pela Vigilância Sanitária para comprovar que os procedimentos seguem normas e RDCs adequadas.",
  },
  {
    q: "O que é o PGRSS e quem precisa dele?",
    a: "O PGRSS é o Plano de Gerenciamento de Resíduos de Serviços de Saúde, obrigatório para estabelecimentos que geram resíduos com potencial risco à saúde ou ao meio ambiente, como clínicas, consultórios, laboratórios e serviços de estética.",
  },
  {
    q: "Quando preciso renovar o Alvará Sanitário?",
    a: "O Alvará Sanitário possui validade e deve ser renovado periodicamente conforme as exigências do município, sendo importante manter a regularidade para evitar multas e problemas com a fiscalização.",
  },
  {
    q: "O que acontece se meu estabelecimento não estiver em conformidade?",
    a: "O descumprimento das normas sanitárias pode resultar em multas, interdição do estabelecimento e até mesmo processos judiciais. Nossa assessoria ajuda a evitar esses problemas.",
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
