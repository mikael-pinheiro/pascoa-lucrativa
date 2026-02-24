import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section
      id="garantia"
      className="w-full bg-muted py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-lg border-2 border-dashed border-secondary bg-card p-8 text-center shadow-lg">
          <ShieldCheck className="mx-auto h-16 w-16 text-secondary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl">
            Risco zero para você
          </h2>
          <p className="mt-4 text-xl text-foreground">
            Teste o método por 7 dias.
          </p>
          <p className="mt-2 text-lg text-muted-foreground">
            Se não achar que valeu a pena, devolvemos 100% do seu dinheiro.
          </p>
          <p className="mt-4 text-sm font-semibold text-foreground">
            Sem perguntas. Sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
