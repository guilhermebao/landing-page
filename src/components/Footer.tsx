import logo from "@/assets/logo.png";
import { Instagram, Facebook, PhoneForwarded } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/mvmengdivi", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/mvmengdiv", label: "Facebook" },
  { icon: PhoneForwarded, href: "https://api.whatsapp.com/send/?phone=5537988339363&text=MVM+Engenharia+gostaria+de+saber+sobre+o+servi%C3%A7o+de+projeto+de+inc%C3%AAndio.&type=phone_number&app_absent=0", label: "PhoneForwarded" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground py-10">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
        <img src={logo} alt="MVM Engenharia" className="h-8 brightness-0 invert" />

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition hover:bg-background/20"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-background/60">
          © {new Date().getFullYear()} MVM Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
