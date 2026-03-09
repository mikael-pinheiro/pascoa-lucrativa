import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp } from "lucide-react";


export function SolutionSection() {
    const products = [
        { name: 'Ovo Tradicional 250g', cost: 'R$ 12,00', sale: 'R$ 35,00', profit: 'R$ 23,00' },
        { name: 'Ovo de Colher 350g', cost: 'R$ 18,00', sale: 'R$ 55,00', profit: 'R$ 37,00' },
        { name: 'Caixa 6 Brigadeiros Gourmet', cost: 'R$ 9,00', sale: 'R$ 25,00', profit: 'R$ 16,00' },
    ]
  return (
    <section id="lucro" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            Veja na Prática o Lucro Que te Espera
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Precificar corretamente é a diferença entre trabalhar muito por pouco e ter lucro de verdade. Veja uma simulação simples:
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border shadow-lg">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Produto</TableHead>
                        <TableHead className="font-bold">Custo</TableHead>
                        <TableHead className="font-bold">Venda</TableHead>
                        <TableHead className="font-bold text-primary">Lucro por Unidade</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map(p => (
                        <TableRow key={p.name}>
                            <TableCell>{p.name}</TableCell>
                            <TableCell>{p.cost}</TableCell>
                            <TableCell>{p.sale}</TableCell>
                            <TableCell className="font-bold text-primary">{p.profit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
          </div>
           <div className="mt-8 rounded-lg bg-accent p-6 text-center">
            <TrendingUp className="mx-auto h-10 w-10 text-secondary" />
            <p className="mt-4 text-2xl font-bold text-foreground">
              Vendendo apenas 50 ovos de colher, você pode lucrar <span className="text-primary">R$1.850,00!</span>
            </p>
            <p className="mt-2 text-muted-foreground">Isso é mais que um salário mínimo trabalhando de casa, em poucas semanas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
