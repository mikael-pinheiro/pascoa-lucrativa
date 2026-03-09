import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section
      id="garantia"
      className="w-full bg-accent py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-lg border-4 border-dashed border-secondary bg-card p-8 text-center shadow-2xl md:p-12">
          <ShieldCheck className="mx-auto h-20 w-20 text-secondary" />
          <h2 className="mt-6 font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="mt-4 text-xl font-bold text-foreground">
            Seu Risco é Absolutamente Zero!
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Acesse o curso completo, assista às aulas, use as planilhas e, se em até 7 dias você não estiver 100% satisfeito, basta nos enviar um único e-mail e devolveremos todo o seu dinheiro. Simples assim.
          </p>
          <p className="mt-6 font-semibold text-foreground">
            Sem perguntas, sem burocracia e sem ressentimentos. Nós confiamos no nosso método e queremos que você se sinta totalmente seguro para transformar sua páscoa.
          </p>
        </div>
      </div>
    </section>
  );
}
