import React, { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import Feature from './components/Feature';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSource, setContactSource] = useState('');

  const handleOpenContact = (source) => {
    setContactSource(source);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setContactSource('');
  };

  return (
    <div className="font-sans antialiased m-0 p-0 text-base">
      <Header />
      <Welcome />
      <Gallery onOpenContact={handleOpenContact} />
      <Feature />

      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        source={contactSource}
      />
    </div>
  );
}

export default App;
