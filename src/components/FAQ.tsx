import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é vigilância sanitária?",
    a: "A vigilância sanitária é o conjunto de ações voltadas para eliminar, diminuir ou prevenir riscos à saúde. Abrange o controle de bens de consumo, prestação de serviços e ambientes que possam afetar a saúde pública.",
  },
  {
    q: "Quais tipos de negócios precisam de licença sanitária?",
    a: "Restaurantes, clínicas, salões de beleza, academias, farmácias, indústrias alimentícias, hospitais, laboratórios e qualquer estabelecimento que comercialize ou manipule produtos que possam impactar a saúde.",
  },
  {
    q: "Quanto tempo leva para obter a licença sanitária?",
    a: "O prazo pode variar de acordo com o município e a complexidade do negócio. Geralmente, o processo leva entre 15 e 60 dias após a entrada da documentação completa.",
  },
  {
    q: "A consultoria é presencial ou online?",
    a: "Oferecemos ambas as modalidades. Realizamos visitas presenciais quando necessário e também prestamos assessoria remota para análise documental e orientação.",
  },
  {
    q: "O que acontece se meu estabelecimento não estiver em conformidade?",
    a: "O descumprimento das normas sanitárias pode resultar em multas, interdição do estabelecimento e até mesmo processos judiciais. Nossa consultoria ajuda a evitar esses problemas.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          Tire suas dúvidas sobre nossos serviços de vigilância sanitária
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
  );
};

export default FAQ;
