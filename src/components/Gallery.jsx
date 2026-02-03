import React from 'react';
import tablescapesImg from '../assets/tablescapes.webp';
import floralImg from '../assets/floral.webp';
import charcuterieImg from '../assets/charcuterie.webp';
import interiorsImg from '../assets/interiors.webp';

const Gallery = ({ onOpenContact }) => {
  const items = [
    {
      id: 1,
      label: 'Tablescapes',
      image: tablescapesImg,
      alt: 'Rustic outdoor dining table setting'
    },
    {
      id: 2,
      label: 'Florals',
      image: floralImg,
      alt: 'Beautiful bouquet of pink and white flowers'
    },
    {
      id: 3,
      label: 'Charcuterie',
      image: charcuterieImg,
      alt: 'Extravagant grazing table with cheeses, meats, and crackers'
    },
    {
      id: 4,
      label: 'Interiors',
      image: interiorsImg,
      alt: 'Classic southern living room with antique furniture and floral arrangement'
    }
  ];

  return (
    <section className="bg-huff-beige py-[60px] px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1000px] mx-auto">
        {items.map((item) => (
          <article key={item.id} className="relative w-full aspect-square group overflow-hidden shadow-sm">
            <img
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={item.image}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button
                className="gallery-btn"
                onClick={() => onOpenContact && onOpenContact(item.label)}
              >
                {item.label}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
