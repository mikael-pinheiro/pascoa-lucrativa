import Link from "next/link";
import { Cookie } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-muted py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start">
         <div className="flex items-center gap-2">
            <Cookie className="h-6 w-6 text-secondary" />
            <span className="font-bold font-headline text-lg text-secondary">
                Páscoa Lucrativa
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Páscoa Lucrativa. Todos os direitos reservados.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline" prefetch={false}>
            Termos de Serviço
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline" prefetch={false}>
            Política de Privacidade
          </Link>
           <Link href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline" prefetch={false}>
            Contato
          </Link>
        </nav>
      </div>
    </footer>
  );
}
