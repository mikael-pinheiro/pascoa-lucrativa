import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function SocialProofSection() {
  const testimonials = [
    {
      quote: 'Faturei R$3.200 na primeira Páscoa, nunca imaginei! O curso me deu o caminho das pedras pra precificar e vender sem medo.',
      name: 'Juliana S.',
      image: PlaceHolderImages.find(p => p.id === 'depoimento-juliana'),
    },
    { 
      quote: 'Comecei sem experiência nenhuma e vendi 80 ovos. A planilha de lucro é uma mão na roda, me salvou da bagunça.',
      name: 'Mariana R.',
      image: PlaceHolderImages.find(p => p.id === 'depoimento-mariana'),
    },
    {
      quote:
        'Parei de vender barato com medo de não ter cliente. Meu lucro praticamente dobrou e a agenda lotou antes do esperado.',
      name: 'Carla F.',
      image: PlaceHolderImages.find(p => p.id === 'depoimento-carla'),
    },
  ];

  return (
    <section
      id="social-proof"
      className="w-full bg-background py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            Quem Já Aplicou, Já Lucrou
          </h2>
           <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Veja o que confeiteiras como você estão dizendo sobre o método.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between rounded-lg bg-card shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary" />
                  ))}
                </div>
                <p className="mt-4 text-base text-foreground">
                  “{testimonial.quote}”
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 p-6 pt-0">
                <Avatar>
                  {testimonial.image && <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} />}
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="font-bold text-foreground">{testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
