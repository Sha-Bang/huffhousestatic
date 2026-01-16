import React from "react";
import founderImage from "../assets/founder.jpg";

const MeetFounder = ({ onOpenContact }) => {
  return (
    <section className="bg-huff-beige border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-stretch min-h-[500px]">
        <div className="w-full md:w-1/2 h-[400px] md:h-auto">
          <img
            alt="Portrait of the founder"
            className="w-full h-full object-cover"
            src={founderImage}
          />
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-white">
          <h2 className="font-serif text-3xl mb-6 text-huff-dark-brown italic">
            Meet Kayla
          </h2>
          <p className="font-light font-serif text-lg leading-relaxed text-gray-700 mb-8">
            Kayla’s love of hosting began at a young age, watching her mother
            thoughtfully welcome family and friends around their table. Growing
            up in the South shaped her appreciation for gracious hospitality and
            the beauty found in making others feel at home. A former career that
            took her around the world deepened that understanding, revealing
            that across cultures, true hospitality always begins with a
            welcoming heart. Today, whether she’s planning events, hosting
            gatherings, or celebrating her children with over-the-top birthday
            parties, Kayla’s passion remains the same: bringing beauty into
            everyday moments so people feel seen, valued, and truly welcomed.
          </p>
          <div className="mt-4 pt-8 border-t border-gray-100">
            <h3 className="font-bold text-sm uppercase tracking-widest text-huff-slate mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-3">kayla@huff.house</p>
            {/* <p className="text-gray-600 mb-6">+1 (xxx) yyy-zzzz</p> */}
            <button
              onClick={() => onOpenContact("General")}
              className="inline-block border border-huff-dark-brown text-huff-dark-brown py-3 px-8 text-sm uppercase tracking-widest hover:bg-huff-dark-brown hover:text-white transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetFounder;
