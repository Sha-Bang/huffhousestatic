import React, { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import MeetFounder from './components/MeetFounder';
import Footer from './components/Footer';
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
      <MeetFounder onOpenContact={handleOpenContact} />
      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        source={contactSource}
      />
    </div>
  );
}

export default App;
