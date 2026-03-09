import { Gift, FileSpreadsheet, List, Truck, Image as ImageIcon } from 'lucide-react';

export function BonusSection() {
  const bonuses = [
    { icon: FileSpreadsheet, title: 'Planilha Automática de Lucro', description: 'Saiba exatamente seu custo e lucro sem precisar de matemática.' },
    { icon: ImageIcon, title: 'Artes Prontas para Instagram', description: 'Templates profissionais para divulgar seus produtos e vender mais.' },
    { icon: List, title: '50 Receitas de Recheios', description: 'Os recheios mais pedidos para você variar seu cardápio.' },
    { icon: Truck, title: 'Lista de Fornecedores Baratos', description: 'Economize na compra dos ingredientes e aumente seu lucro.' },
  ];

  return (
    <section id="bonus" className="w-full bg-accent py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">
            <Gift className="mr-2 h-5 w-5" />
            Você Ainda Leva 4 Bônus Exclusivos
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Acesso Imediato a Ferramentas Que Vão Acelerar Seu Lucro
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
            {bonuses.map((bonus) => (
              <div key={bonus.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <bonus.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{bonus.title}</h3>
                  <p className="text-muted-foreground">{bonus.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg border-2 border-dashed border-primary p-6">
            <p className="text-lg font-semibold text-muted-foreground line-through">
              Valor total dos bônus: R$ 297,00
            </p>
            <p className="text-2xl font-bold text-primary">
              Hoje você leva tudo de graça.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
