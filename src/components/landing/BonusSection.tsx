import { Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileSpreadsheet, List, Truck, MessageCircle } from 'lucide-react';

export function BonusSection() {
  const bonuses = [
    { icon: FileSpreadsheet, text: 'Planilha de controle de custos' },
    { icon: List, text: 'Tabela de preços sugeridos' },
    { icon: Truck, text: 'Lista de fornecedores' },
    { icon: MessageCircle, text: 'Modelos de mensagens para vendas no WhatsApp' },
  ];

  return (
    <section id="bonus" className="w-full bg-accent py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
            <Gift className="mr-2 h-4 w-4" />
            Bônus
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Bônus exclusivos
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {bonuses.map((bonus) => (
              <div key={bonus.text} className="flex items-center gap-4 rounded-lg bg-card p-4">
                <bonus.icon className="h-8 w-8 text-secondary" />
                <p className="font-semibold text-foreground">{bonus.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-lg font-semibold text-muted-foreground line-through">
              Valor separado: R$ XXX
            </p>
            <p className="text-xl font-bold text-primary">
              Hoje incluso gratuitamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
