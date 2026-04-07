import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="MVM Engenharia" className="h-10" />
        </a>
        <a
          href="#contato"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
};

export default Header;
