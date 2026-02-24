import Link from 'next/link';
import { Cookie } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-center px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Cookie className="h-6 w-6 text-secondary" />
          <span className="font-bold font-headline text-lg text-secondary">
            Páscoa Lucrativa
          </span>
        </Link>
      </div>
    </header>
  );
}
