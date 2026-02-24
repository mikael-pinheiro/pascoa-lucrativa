import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCtaSection() {
  return (
    <section
      id="cta"
      className="w-full bg-secondary py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Sua melhor Páscoa pode começar hoje
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Pare de vender sem lucro. Pare de improvisar. Comece a trabalhar com
            estratégia.
          </p>
          <div className="my-8 h-px w-24 bg-primary-foreground/50 mx-auto" />
          <p className="text-xl font-bold text-primary-foreground">
            💰 Transforme sua produção em lucro de verdade.
          </p>
          <div className="mt-10">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="#">QUERO LUCRAR NESTA PÁSCOA AGORA</Link>
            </Button>
            <p className="mt-2 text-sm text-secondary-foreground/70">
              Acesso imediato após a inscrição.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
