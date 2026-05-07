import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quem precisa do AVCB ou CLCB?",
    a: "Toda edificação comercial ou multifamiliar acima de 200 m² precisa de regularização junto ao Corpo de Bombeiros para obtenção do AVCB ou CLCB; para uma verificação mais assertiva, entre em contato conosco que analisamos a necessidade conforme as características do seu imóvel e atividade.",
  },
  {
    q: "Quanto tempo leva para obter o AVCB ou CLCB?",
    a: "O prazo pode variar conforme a complexidade da edificação e as adequações necessárias, mas geralmente o processo leva entre 20 e 45 dias.",
  },
  {
    q: "Quando é necessário elaborar ou alterar um Projeto de Incêndio?",
    a: "A elaboração do Projeto de Incêndio é necessária em edificações acima de 200m², porém a aprovação é exigida apenas quando a edificação possui área superior a 930m²; já a alteração do projeto deve ser feita quando há mudanças no layout, ampliação da área ou alteração da atividade do imóvel, garantindo que todas as medidas de segurança estejam conforme as normas vigentes.",
  },
  {
    q: "O que é o treinamento de Brigada de Incêndio e quem precisa?",
    a: "É a capacitação dos responsáveis pelo atendimento inicial em situações de emergência, sendo exigida para diversas empresas e edificações, garantindo mais segurança aos ocupantes e atendimento às exigências do Corpo de Bombeiros.",
  },
  {
    q: "Quando é possível obter a dispensa de AVCB ou CLCB?",
    a: "A dispensa pode ser aplicada a edificações de baixo risco que possuam área inferior a 200 m², desde que atendam aos critérios definidos pelo Corpo de Bombeiros; para uma análise correta, avaliamos as características do seu imóvel.",
  },
  {
    q: "O que acontece se meu estabelecimento não estiver regularizado junto ao Corpo de Bombeiros?",
    a: "O imóvel pode sofrer penalidades como multas, interdição e impedimento de funcionamento, além de riscos à segurança das pessoas, sendo essencial manter a regularização em dia.",
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
