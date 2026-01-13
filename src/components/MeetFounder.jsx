import React from 'react';
import founderImage from '../assets/founder.jpg';

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
          <h2 className="font-serif text-3xl mb-6 text-huff-dark-brown italic">Meet the Founder</h2>
          <p className="font-light text-lg leading-relaxed text-gray-700 mb-8">
            With a passion for preserving the beauty of nature and the warmth of a well-loved home,
            our founder curated Huff House to be a bridge between traditional craftsmanship and modern living.
            Every piece tells a story of intentionality, slow living, and the simple joy of an aesthetic environment.
          </p>
          <div className="mt-4 pt-8 border-t border-gray-100">
            <h3 className="font-bold text-sm uppercase tracking-widest text-huff-slate mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-2">info@huffhouse.com</p>
            <p className="text-gray-600 mb-6">+1 (555) 123-4567</p>
            <button
              onClick={() => onOpenContact('founder')}
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
