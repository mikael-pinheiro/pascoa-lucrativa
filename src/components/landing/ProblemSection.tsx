import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, AlertTriangle, Clock, PackageX, Angry } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    { text: 'vende e não sobra dinheiro', icon: DollarSign },
    { text: 'erra no preço', icon: AlertTriangle },
    { text: 'trabalha dobrado', icon: Clock },
    { text: 'perde encomendas por falta de organização', icon: PackageX },
    { text: 'termina exausta e frustrada', icon: Angry },
  ];

  return (
    <section id="problema" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
            A verdade que ninguém te conta…
          </h2>
          <p className="mt-4 text-xl font-bold text-foreground md:text-2xl">
            Fazer ovos e doces gostosos não garante lucro.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Muita gente na Páscoa:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <problem.icon className="h-8 w-8 text-primary" />
                  <p className="text-center font-medium">{problem.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-xl font-bold text-foreground">
            E no fim… parece que todo mundo lucra, menos você.
          </p>
        </div>
      </div>
    </section>
  );
}
