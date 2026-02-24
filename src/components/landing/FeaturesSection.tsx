import {
  Video,
  Table,
  ListChecks,
  CalendarDays,
  Sparkles,
  PackagePlus,
  MonitorPlay,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    { icon: Video, title: 'Aulas práticas passo a passo' },
    { icon: Table, title: 'Planilhas de precificação automática' },
    { icon: ListChecks, title: 'Checklist de produção' },
    { icon: CalendarDays, title: 'Cronograma da Páscoa' },
    { icon: Sparkles, title: 'Ideias de produtos campeões de venda' },
    { icon: PackagePlus, title: 'Estratégias de combos e kits' },
  ];

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            O que você recebe
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dentro do programa você terá acesso a:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <feature.icon className="mx-auto h-10 w-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-lg bg-accent p-8">
            <MonitorPlay className="h-12 w-12 text-primary" />
            <p className="text-xl font-bold text-foreground">
              Acesso online imediato
            </p>
            <p className="max-w-md text-center text-muted-foreground">
              Tudo organizado para você assistir e aplicar no mesmo dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
