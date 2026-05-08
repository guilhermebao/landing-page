import logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "5537988339363";

const Header = () => {
  const handleWhatsApp = () => {
    const message = "MVM Engenharia gostaria de saber sobre o serviço de projeto de incêndio.";
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="MVM Engenharia" className="h-10" />
        </a>
        <button
          onClick={handleWhatsApp}
          className="rounded-lg bg-destructive px-5 py-2.5 text-sm font-semibold text-destructive-foreground transition hover:opacity-90"
        >
          Fale Conosco
        </button>
      </div>
    </header>
  );
};

export default Header;
