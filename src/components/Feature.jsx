import React from 'react';

const Feature = () => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row h-auto lg:h-[400px]">
      {/* Left Column (25%) */}
      <div className="w-full lg:w-1/4 h-[300px] lg:h-full relative">
        <img
          alt="Tall vertical floral arrangement"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoxndvTo3r9lI9BqnPTVmew_BeviefdEcShxMhEsAvA4Fo-SQKucFHVcm6uTKA2SH8cbO6lXdUTXBk6hdTJTzBIrNXJQae-5re3lP7P1LWMF80rdYhq7G7YE2BWhMfls5nMC7sRww7g7NrpAeMbFztZeLd-14DD4SxDeB2EVVUX7Kbwhwf8J4-twDRW782XO4ZpmFcCzwsOAhsNkuQQOFrX8A7QsgJgDZuRGpIqsFtJKQth-mrJk4RIsusQ6MpPMcntbeK8mt2wKab"
        />
      </div>

      {/* Middle Column (50%) */}
      <div className="w-full lg:w-1/2 bg-huff-brown flex items-center relative py-10 lg:py-0 overflow-hidden">
        {/* Inner Container for Flex Alignment */}
        <div className="w-full flex flex-row items-center h-full">
          {/* Inner Image (45% Width, 80% Height, Left Margin 5%) */}
          <div className="ml-[5%] w-[45%] h-[80%] shadow-xl">
            <img
              alt="Overhead view of elegant dinner place setting"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoLrG9EoVFdj5Es9jeW_FvYMwGhQVJc1EHH4fTVF3wvTZnbunzGffAkad1dGSLOwPD60rlb3JA8F6MTWuJwA88w1aTan0d45yLf5CUtc5lKVM1GVJfami9tlLvpkV8XFO-Zgi_koHXuzsEt042YfF0BMbaA-TwoFZoLAbp4QyRLlWO1bgx48lpt3yJ-SexChy43hoFF7Wkc2jU_WQWDN_uMrN8qPxwYg6Gk--26_AzbZ2YTDEdV90tNCUD3oHEgCx-4eZtzrEwsUH2"
            />
          </div>

          {/* Inner Text (45% Width, Padding) */}
          <div className="w-[45%] px-[5%] text-white">
            <h3 className="font-serif text-2xl mb-4 italic">The Table Series</h3>
            <ul className="list-disc list-inside mb-6 font-light space-y-2 text-sm">
              <li>Handcrafted Ceramics</li>
              <li>Vintage Gold Cutlery</li>
              <li>Linen Napkins</li>
            </ul>
            <button className="bg-huff-dark-brown text-white py-2 px-5 text-sm hover:bg-black/40 transition-colors cursor-pointer">
              Shop Look
            </button>
          </div>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex space-x-2">
          <div className="pagination-bar active"></div>
          <div className="pagination-bar"></div>
          <div className="pagination-bar"></div>
        </div>
      </div>

      {/* Right Column (25%) */}
      <div className="w-full lg:w-1/4 bg-huff-sage flex flex-col justify-center items-center p-10 text-white text-center h-auto lg:h-full">
        <h3 className="font-serif text-3xl mb-4">Events</h3>
        <p className="font-light text-sm leading-6 mb-6">
          Join us for seasonal workshops on floral arrangement and table setting.
        </p>
        <a className="underline underline-offset-4 decoration-1 hover:text-gray-200" href="#">View Calendar</a>
      </div>
    </section>
  );
};

export default Feature;
