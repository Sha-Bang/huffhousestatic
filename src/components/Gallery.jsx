import React from 'react';

const Gallery = ({ onOpenContact }) => {
  const items = [
    {
      id: 1,
      label: 'Tablescapes',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5XXL8sa9PqjDUi3iGC52eUMUBxcQnav7VDs5UFR0MhWfSlNO7ifqQnpTYqpGTlWE3J2-mBa5UBOORpP4tu0HfpkZRWYckp30Is5b46E0yI1YgAR3eY0vUyp-tIKbonjWnBCzvbCgYrUxXE_0leniWm8UolmXAoJ7KDH-M_l3OGtBWwGD5OvcSb4uNlIMwQc1KdY6crYuUqLWuDXchB75qoqSU0cdKkGMmFzTD10x7KCWmcPeaIZ0GUK8M3xN6GO8cUS9C2O9iXaaa',
      alt: 'Rustic outdoor dining table setting'
    },
    {
      id: 2,
      label: 'Floral',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_nmrk5JpZ1dZp1dS998cJkue_50oaeE_boXA85G2IUDv50zr2wfyGXUFKafq95BOyeRbtE33pFGYspQ1vkBnBnpHVfGbpw6KPSVwYKeiHXSnrMAJP49ZT5184WNBKXASP2wxD8k6azEUT3lUHJSGy5MntRUIxeY7ngKYAgmRjuwOALX6XvYbnE-SQZqXgmn6ZL88BZwFYQlVQEXQmxR9Lm9fbeiOcQYni6xSlYJw2RqMa0EABcfZGWXNuQwM6VMsk2rrYlbraNpJJ',
      alt: 'Beautiful bouquet of pink and white flowers'
    },
    {
      id: 3,
      label: 'Charcuterie',
      image: 'https://images.unsplash.com/photo-1565661834093-b749691b6c82?w=800&q=80',
      alt: 'Extravagant grazing table with cheeses, meats, and crackers'
    },
    {
      id: 4,
      label: 'Interiors',
      image: 'https://images.unsplash.com/photo-1759774314108-7453725bc05c?w=800&q=80',
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
