import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCtaSection() {
  return (
    <section
      id="cta-final"
      className="w-full bg-[#3B1F1F] py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Sua Chance de Ter a Melhor Páscoa da Sua Vida Começa Agora
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Chega de vender sem lucro. Chega de trabalhar até a exaustão sem ver a cor do dinheiro. É hora de trabalhar com método.
          </p>
          <div className="my-8 text-white">
            <p className="text-2xl line-through opacity-70">
              De R$99,99
            </p>
            <p className="text-sm">Por apenas</p>
            <p className="text-6xl font-bold text-primary sm:text-7xl">
              R$15,99
            </p>
            <p className="mt-1 text-sm opacity-80">
              Pagamento único
            </p>
          </div>
          <div className="mt-10">
            <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-10 sm:w-auto animate-pulse" asChild>
              <Link href="https://app.bancobabylon.com/payment/checkout/8b1471d4-f8df-4db1-9437-0131a2131459">🔴 QUERO LUCRAR NESSA PÁSCOA</Link>
            </Button>
            <p className="mt-4 text-sm text-gray-300">
              Acesso imediato e vitalício. Compre com 100% de segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
