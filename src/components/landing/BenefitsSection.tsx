import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Package,
  Clock,
  TrendingUp,
  Smile,
  CircleDollarSign,
} from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: CircleDollarSign,
      text: 'Saber exatamente quanto vai lucrar antes de começar',
    },
    { icon: Package, text: 'Ter pedidos organizados sem caos' },
    { icon: Clock, text: 'Produzir em menos tempo' },
    { icon: TrendingUp, text: 'Vender mais sem trabalhar mais' },
    {
      icon: Smile,
      text: 'Terminar a Páscoa cansada, mas com o bolso cheio',
    },
  ];

  return (
    <section id="beneficios" className="w-full bg-accent py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            O que muda quando você aplica o método:
          </h2>
          <p className="mt-4 text-2xl text-muted-foreground">Imagine…</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <benefit.icon className="h-10 w-10 text-primary" />
                  <p className="text-center text-lg font-medium text-foreground">
                    {benefit.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 rounded-lg bg-card p-6 shadow-md">
            <p className="text-2xl font-bold text-secondary">
              Isso não é sorte.
            </p>
            <p className="mt-2 text-3xl font-headline font-bold text-primary">
              É estratégia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
