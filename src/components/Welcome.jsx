import React from 'react';

const Welcome = () => {
  return (
    <section className="bg-huff-slate text-white py-[60px] px-5 text-center">
      <div className="max-w-[800px] mx-auto">
        <h1 className="font-sans text-3xl md:text-[2.5rem] mb-6">Welcome to Huff House</h1>
        <p className="font-sans font-light text-lg leading-relaxed text-gray-100">
          With a discerning eye for warm and inviting interiors and a passion for gracious hospitality, we work with clients to create spaces and moments that bring people together.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
