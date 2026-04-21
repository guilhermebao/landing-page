import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5537988339363";

const ContactForm = () => {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleWhatsApp = () => {
    let message = "MVM Engenharia gostaria de saber sobre o serviço de vigilância sanitária.";

    if (nome) message += `\n\nNome - ${nome}`;
    if (cnpj) message += `\nCNPJ - ${cnpj}`;
    if (endereco) message += `\nEndereço - ${endereco}`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="bg-accent/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Entre em Contato
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Preencha os dados abaixo (opcional) e fale conosco pelo WhatsApp.
          </p>

          <div className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-lg">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Nome
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                CNPJ
              </label>
              <input
                type="text"
                value={cnpj}
                onChange={(e) => {
                  const apenasNumeros = e.target.value.replace(/\D/g, "");
                  if (apenasNumeros.length <= 14) {
                    setCnpj(apenasNumeros);
                  }
                }}
                placeholder="00000000000000"
                maxLength={14}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Endereço
              </label>
              <input
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                placeholder="Rua, número, bairro, cidade"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <button
              onClick={handleWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-bold text-secondary-foreground transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              Falar pelo WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
