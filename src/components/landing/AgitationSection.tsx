import { XCircle } from 'lucide-react';

export function AgitationSection() {
  const points = [
    'vende barato demais',
    'compra ingredientes errados',
    'perde tempo produzindo o que não sai',
    'fica refém de descontos',
    'trabalha muito para ganhar pouco',
  ];

  return (
    <section id="agitacao" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-headline text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">
            Sem estratégia você:
          </h3>
          <ul className="mt-6 inline-grid grid-cols-1 gap-4 text-left md:grid-cols-2">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
                <span className="text-lg text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border-2 border-primary bg-card p-6 shadow-lg">
            <p className="text-xl font-bold text-primary">
              A Páscoa passa rápido…
            </p>
            <p className="mt-2 text-lg text-foreground">
              e perder essa data pode significar meses de faturamento jogados
              fora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
