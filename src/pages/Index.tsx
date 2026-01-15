import { useState } from 'react';
import Header from '@/components/sections/Header';
import HeroAndProblems from '@/components/sections/HeroAndProblems';
import ServicesAndTestimonials from '@/components/sections/ServicesAndTestimonials';
import ContactAndFooter from '@/components/sections/ContactAndFooter';

const Index = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroAndProblems />
      <ServicesAndTestimonials />
      <ContactAndFooter 
        privacyOpen={privacyOpen}
        setPrivacyOpen={setPrivacyOpen}
        offerOpen={offerOpen}
        setOfferOpen={setOfferOpen}
      />
    </div>
  );
};

export default Index;
