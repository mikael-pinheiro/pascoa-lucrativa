import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';
import Link from 'next/link';

export function UrgencySection() {
  return (
    <section id="urgencia" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <CalendarClock className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            A Páscoa acontece uma vez por ano
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Se você não se preparar agora… vai ter que esperar mais 12 meses.
          </p>
          <p className="mt-4 text-xl font-bold text-foreground">
            Cada dia parado é dinheiro que deixa de entrar.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="#cta">Garanta seu acesso hoje</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
