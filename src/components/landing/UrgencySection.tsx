'use client';

import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

export function UrgencySection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderer = ({ hours, minutes, seconds, completed }: { hours: number, minutes: number, seconds: number, completed: boolean }) => {
    if (completed) {
      return <p className="text-2xl font-bold text-primary">A OFERTA TERMINOU!</p>;
    } else {
      return (
        <div className="flex justify-center gap-4">
            <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-primary">{String(hours).padStart(2, '0')}</span>
                <span className="text-sm text-muted-foreground">Horas</span>
            </div>
            <span className="text-4xl md:text-5xl font-bold text-primary">:</span>
             <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-primary">{String(minutes).padStart(2, '0')}</span>
                <span className="text-sm text-muted-foreground">Minutos</span>
            </div>
             <span className="text-4xl md:text-5xl font-bold text-primary">:</span>
             <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-primary">{String(seconds).padStart(2, '0')}</span>
                <span className="text-sm text-muted-foreground">Segundos</span>
            </div>
        </div>
      );
    }
  };

  const getEndOfDay = () => {
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    return endOfDay;
  };


  return (
    <section id="urgencia" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Zap className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            Esta Oferta Termina em...
          </h2>
          <div className="my-8">
            {isClient && <Countdown date={getEndOfDay()} renderer={renderer} />}
          </div>
           <div className="my-8">
            <p className="text-2xl text-muted-foreground line-through">
              De R$99,99
            </p>
            <p className="text-sm text-muted-foreground">Por apenas</p>
            <p className="text-5xl font-bold text-primary sm:text-6xl">
              R$15,99
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
             Pagamento único. O preço vai subir.
            </p>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            Se você não se preparar agora… vai ter que esperar mais 12 meses para a próxima Páscoa.
          </p>
          <p className="mt-4 text-xl font-bold text-foreground">
            Cada dia parado é dinheiro que você está deixando de ganhar.
          </p>
          <div className="mt-8">
            <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-10 sm:w-auto" asChild>
              <Link href="https://app.bancobabylon.com/payment/checkout/8b1471d4-f8df-4db1-9437-0131a2131459">GARANTIR MEU DESCONTO</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
