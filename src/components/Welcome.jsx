import React from "react";

const Welcome = () => {
  return (
    <section className="bg-huff-slate text-white py-[60px] px-5 text-center">
      <div className="max-w-[800px] mx-auto">
        <h1 className="font-serif text-3xl md:text-[2.5rem] mb-6 italic">
          Welcome to Huff House
        </h1>
        <p className="font-serif font-light text-lg leading-relaxed text-gray-100">
          With a discerning eye for warm, inviting interiors and a genuine
          passion for gracious hospitality, we create spaces—and moments—that
          truly feel like home.
          <br />
          <br />
          An intimate gathering around a beautifully set table is about so much
          more than what meets the eye. Thoughtfully designed spaces invite
          family and friends into intentional moments—to linger longer, laugh
          louder, and connect more deeply. At Huff House, we set your table and
          style your home to reflect your heart for hospitality, creating an
          atmosphere where meaningful memories naturally unfold.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
