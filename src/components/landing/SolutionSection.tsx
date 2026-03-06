import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function SolutionSection() {
  const solutions = [
    'Produtos certos para vender mais rápido',
    'Precificação profissional (lucro real, não “achismo”)',
    'Organização da produção para render o dobro',
    'Planejamento para não faltar nem sobrar estoque',
    'Estratégias simples para aumentar ticket médio',
  ];
  return (
    <section id="solucao" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            Não é só receita. É um método completo de lucro.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Você vai aprender:</p>
          <div className="mt-8 inline-block text-left">
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                  <span className="text-xl text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-lg text-muted-foreground">
            Tudo pensado para quem quer ganhar dinheiro de verdade com
            confeitaria, não só cozinhar.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="https://app.bancobabylon.com/payment/checkout/8b1471d4-f8df-4db1-9437-0131a2131459">Quero aplicar o método agora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
