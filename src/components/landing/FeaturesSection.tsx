import { BookOpen, CircleDollarSign, CookingPot, Instagram, ListChecks } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function FeaturesSection() {
  const modules = [
    { icon: BookOpen, title: 'Módulo 1: Introdução ao Negócio', description: 'O plano completo para iniciar seu negócio de páscoa lucrativa.' },
    { icon: CookingPot, title: 'Módulo 2: Ovos Tradicionais e Gourmet', description: 'Receitas que vendem e técnicas para uma produção perfeita.' },
    { icon: CookingPot, title: 'Módulo 3: Ovos de Colher de Sucesso', description: 'Os segredos dos recheios cremosos e montagem que encanta.' },
    { icon: CircleDollarSign, title: 'Módulo 4: Precificação Inteligente', description: 'Aprenda a calcular seus preços para ter lucro de verdade.' },
    { icon: Instagram, title: 'Módulo 5: Como Vender no Instagram', description: 'Crie um perfil atrativo e transforme seguidores em clientes.' },
    { icon: ListChecks, title: 'Módulo 6: Organização e Vendas', description: 'Controle de pedidos, estoque e atendimento para não ter caos.' },
  ];

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            O Que Você Vai Aprender Passo a Passo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Um caminho claro e direto para você seguir, desde a primeira receita até a última venda.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((feature) => (
              <Card key={feature.title} className="text-center flex flex-col">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardTitle className="text-xl font-bold font-headline">
                    {feature.title}
                  </CardTitle>
                  <p className="mt-2 text-muted-foreground flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
