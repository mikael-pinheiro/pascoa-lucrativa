import { Card, CardContent } from '@/components/ui/card';
import { Home, Zap, Clock, Instagram, BarChart } from 'lucide-react';

export function AgitationSection() {
  const desires = [
    { icon: Home, text: 'Trabalhar de casa, perto da sua família' },
    { icon: Zap, text: 'Ter uma fonte de renda extra rápida na Páscoa' },
    { icon: Clock, text: 'Otimizar sua produção e ter mais tempo livre' },
    { icon: Instagram, text: 'Vender seus doces pelo Instagram com confiança' },
    { icon: BarChart, text: 'Alcançar um alto lucro por cada unidade vendida' },
  ];

  return (
    <section id="desejo" className="w-full bg-accent py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Imagine Conquistar Tudo Isso Nesta Páscoa
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">O que você pode alcançar com o método certo:</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {desires.map((desire, index) => (
              <Card
                key={index}
                className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <desire.icon className="h-12 w-12 text-secondary" />
                  <p className="text-center text-lg font-medium text-foreground">
                    {desire.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
