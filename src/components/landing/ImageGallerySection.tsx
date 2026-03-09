import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ImageGallerySection() {
  const imageIds = [
    'ovo-colher-aberto', 
    'ovos-gourmet', 
    'processo-producao', 
    'ingredientes-chocolate', 
    'pessoas-produzindo',
    'mesa-cheia-ovos',
    'embalagem-final'
  ];

  const galleryImages = PlaceHolderImages.filter(img => imageIds.includes(img.id));
  
  // Ensure the main image is always first
  const sortedGalleryImages = [...galleryImages].sort((a, b) => {
    if (a.id === 'ovo-colher-aberto') return -1;
    if (b.id === 'ovo-colher-aberto') return 1;
    return imageIds.indexOf(a.id) - imageIds.indexOf(b.id);
  });

  const mainImage = sortedGalleryImages.length > 0 ? sortedGalleryImages[0] : null;
  const otherImages = sortedGalleryImages.slice(1, 7);


  return (
    <section id="galeria" className="w-full bg-[#FFF6E5] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-4 md:grid-rows-2">
          {mainImage && (
            <div
              className="group relative col-span-2 row-span-2 h-auto min-h-96 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={mainImage.imageUrl}
                alt={mainImage.description}
                data-ai-hint={mainImage.imageHint}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}
          {otherImages.map((image) => (
            <div
              key={image.id}
              className="group relative h-full min-h-[12rem] w-full overflow-hidden rounded-lg shadow-lg md:min-h-0"
            >
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
