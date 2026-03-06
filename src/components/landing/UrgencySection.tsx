'use client';

import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function UrgencySection() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    setCurrentDate(today.toLocaleDateString('pt-BR', options));
  }, []);

  return (
    <section id="urgencia" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <CalendarClock className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            Oferta válida somente hoje
          </h2>
          {currentDate && (
            <p className="mt-4 text-2xl font-bold text-primary">
              {currentDate}
            </p>
          )}
           <div className="my-8">
            <p className="text-2xl text-muted-foreground line-through">
              De R$99,99
            </p>
            <p className="text-5xl font-bold text-primary sm:text-6xl">
              por R$15,99
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Pagamento único, acesso vitalício.
            </p>
          </div>
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
