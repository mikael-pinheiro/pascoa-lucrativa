import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AuthoritySection() {
  const authorityImage = PlaceHolderImages.find(
    (img) => img.id === 'authority-portrait'
  );

  return (
    <section id="autoridade" className="w-full bg-accent py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center">
            {authorityImage && (
              <Image
                src={authorityImage.imageUrl}
                alt={authorityImage.description}
                data-ai-hint={authorityImage.imageHint}
                width={400}
                height={400}
                className="h-72 w-72 rounded-full object-cover shadow-2xl ring-4 ring-secondary/50"
              />
            )}
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl">
              Aprenda com quem vive isso na prática
            </h2>
            <p className="text-xl font-bold text-foreground">Viviane De Castro</p>
            <p className="text-lg text-muted-foreground">
              Já ajudou centenas de confeiteiras a transformarem datas sazonais
              em picos de faturamento.
            </p>
            <p className="font-semibold text-foreground">
              Nada de teoria complicada. Só o que realmente funciona no dia a dia
              da produção para gerar lucro de verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
