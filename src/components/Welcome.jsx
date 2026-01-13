import React from 'react';

const Welcome = () => {
  return (
    <section className="bg-huff-slate text-white py-[60px] px-5 text-center">
      <div className="max-w-[800px] mx-auto">
        <h1 className="font-sans text-3xl md:text-[2.5rem] mb-6">Welcome to Huff House</h1>
        <p className="font-sans font-light text-lg leading-relaxed text-gray-100">
          With a discerning eye for warm and inviting interiors and a passion for gracious hospitality, we create spaces and moments that invite people home (or bring people together). 
          <br />
          <br />
          Our unique approach allows us to meet you wherever you are in your hosting needs. It can be as simple as needing a statement floral arrangement to welcome guests or an elevated charcuterie spread for a gathering. Perhaps you need a bit more help in setting an elegant table for an intimate gathering. Let us set your table and wow your company. While we truly believe any home can be hospitable, if you’re looking for a room refresh or full scale renovation project, we love working closely with you to make your house into an inviting, joy-filled home.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
