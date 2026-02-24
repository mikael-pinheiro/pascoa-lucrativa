import { Button } from '@/components/ui/button';
import { PackageCheck, MoreHorizontal, Wallet, Workflow } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl items-center gap-6 text-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Transforme sua Páscoa na época mais lucrativa do seu ano
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Aprenda exatamente o que produzir, quanto cobrar e como organizar
              sua produção para faturar alto — mesmo começando do zero.
            </p>
            <p className="text-sm font-semibold tracking-wide text-secondary md:text-base">
              Ideias práticas de produtos + precificação inteligente + método de
              produção enxuta.
            </p>
          </div>
          <div className="mx-auto mt-4 flex w-full max-w-md flex-col items-center gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#cta">Quero lucrar nesta Páscoa agora</Link>
            </Button>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <Wallet className="h-5 w-5 text-primary" />
              <span className="font-semibold">Venda mais</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <Workflow className="h-5 w-5 text-primary" />
              <span className="font-semibold">Trabalhe menos</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <PackageCheck className="h-5 w-5 text-primary" />
              <span className="font-semibold">Produza sem desperdícios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
