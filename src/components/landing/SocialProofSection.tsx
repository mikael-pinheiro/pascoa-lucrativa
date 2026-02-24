import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function SocialProofSection() {
  const testimonials = [
    {
      quote: 'Consegui faturar em 15 dias o que levava 3 meses pra ganhar.',
    },
    { quote: 'Parei de vender barato. Meu lucro praticamente dobrou.' },
    {
      quote:
        'Pela primeira vez terminei a Páscoa organizada e com estoque zerado.',
    },
  ];

  return (
    <section
      id="social-proof"
      className="w-full bg-muted py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            Quem já aplicou, já lucrou
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary" />
                  ))}
                </div>
                <p className="mt-4 text-lg text-foreground">
                  “{testimonial.quote}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
