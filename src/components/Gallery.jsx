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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChJgG1pm94Nd8_E5wLD-Yr75NMenReQidx0bxIlyPByN62KmZyPJelV-3iflP89m0DPW7pgIK3Sy-znCbR5gd0anoQNYw4_GNR_CDhPMbO_C6f60FLZQXt5LShIhUT0TjFQxiq0NZjwBBIUe2iKlx1Zd5SUlfWBWhY_6gA6Wd1yPePrD6BBXMVq7tle6aGlthG30DOrBLQKtU8xtCeNuPxwDdk4TFKJUFtHdNAgSgFjCA0gR-iM4IBhbwA60LUNRLoGafuUDXe_6DP',
      alt: 'Rustic market basket with garlic and bread'
    },
    {
      id: 4,
      label: 'Interiors',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZJ5dp6g2oSltT0SNLbY9YUqzP5i99jpSjLe6KiBDr_22u5mjQid6pNBN0O6RVip4aaEv12NMnUPOHZCEzSRrTpuBha1vuQpHnNVaoaAhtwsqysaQm48M_syZNfWvaOvGl8Vgpksf27WmDgryd4HF9NdLFgDY39flBQjq8lT32ZmEJDZmxFI38DEtNzCbXrTXUBHgP8wZgRNgEsIKjtxj4YYnWrbL7qW8YeeDt1NFxQq_cO4ai6K4edMDDbi4Y_XSbjeIX1fcI7bdf',
      alt: 'Elegant wooden dresser interior design'
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
