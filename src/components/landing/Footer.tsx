import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-muted py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Páscoa Lucrativa Essencial. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Termos de Serviço
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
