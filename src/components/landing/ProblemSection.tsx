import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProblemSection() {
  const images = [
    'ovo-colher-aberto', 'ovos-gourmet', 'processo-producao', 
    'ingredientes-chocolate', 'mesa-cheia-ovos', 'embalagem-final'
  ];

  const galleryImages = PlaceHolderImages.filter(img => images.includes(img.id));

  return (
    <section id="galeria" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative h-64 w-full overflow-hidden rounded-lg shadow-lg ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              {image && <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
