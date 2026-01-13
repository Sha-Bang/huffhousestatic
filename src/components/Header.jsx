import React from 'react';
import huffHouseLogo from '../assets/huff_house_logo.png';

const Header = () => {
  return (
    <header
      className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYoPa1_6MTGFVlVkhZs0_QpVFwTXhp_-2Wiz25mZd0rK8XcacQyWnUJlS6w581mgyACYb21BM7Aq7LUH5LSI-Felb81ZepUA07sYv2pPT6e1dCshID3w3nmCSOu9mzRGNB7LtGXBPOlXOCWkMInELBn4k8djVJ4dISV013XvVqH8U2qSSDythGgC39lPtMSXW5cqw1s6uxtNkGTiVfei_iBVq4QMcYawDNrcI4rD69Z_UUIDuFhyQj1Ym8mM1HxfcLozl4T3q1Y_eh')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Logo Container */}
      <div className="relative z-10">
        <img
          alt="Huff House Logo"
          className="hero-logo shadow-lg"
          src={huffHouseLogo}
        />
      </div>
    </header>
  );
};

export default Header;
