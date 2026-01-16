import React from 'react';
import huffHouseLogo from '../assets/huff-house-white-logo.png';
import bannerImage from '../assets/banner-image.jpeg';


const Header = () => {
  return (
    <header
      className="relative w-full flex items-center justify-center bg-cover bg-center md:bg-[center_60%] bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >

        <img
          alt="Huff House Logo"
          className="relative max-w-[30%] md:max-w-[15%] h-auto mt-[5vw] md:mt-[1.5vw] mb-[33vw] md:mb-[12vw]"
          src={huffHouseLogo}
        />
      {/* </div> */}
    </header>
  );
};

export default Header;
