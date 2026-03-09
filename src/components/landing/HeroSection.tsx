'use client';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-[#3B1F1F] py-20 text-white md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl items-center gap-6 text-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Como faturar de R$2.000 a R$10.000 vendendo ovos de Páscoa artesanais mesmo começando do zero
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl">
              Receitas testadas + estratégia de vendas + planilha de lucro pronta.
            </p>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-4">
             <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary/80 text-primary" />
                </div>
                <p className="font-semibold">4.8/5 (Mais de 1.287 alunas)</p>
             </div>
            <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-10 sm:w-auto" asChild>
              <Link href="https://app.bancobabylon.com/payment/checkout/8b1471d4-f8df-4db1-9437-0131a2131459">🔴 QUERO COMEÇAR A VENDER HOJE</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
