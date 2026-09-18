import React from 'react';
import { HeroSection } from '../../components/ui/hero-section-2';

export default function HeroSectionDemo() {
  return (
    <div className="w-full">
      <HeroSection
        logo={{
          url: "https://cdn.21st.dev/assets/mirror/c9/c9babfd70e9056d8223e9d2eda28c4c7cc6c3555d666e10ef656b70a49f67a48.png",
          alt: "Company Logo",
          text: "Your Logo"
        }}
        slogan="ELEVATE YOUR PERSPECTIVE"
        title={
          <>
            Each Peak <br />
            <span className="text-primary">Teaches Something</span>
          </>
        }
        subtitle="Discover breathtaking landscapes and challenge yourself with our guided mountain expeditions. Join a community of adventurers."
        callToAction={{
          text: "JOIN US TO EXPLORE",
          href: "#explore",
        }}
        backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
        contactInfo={{
          website: "yourwebsite.com",
          phone: "+1 (555) 123-4567",
          address: "20 Fieldstone Dr, Roswell, GA",
        }}
      />
    </div>
  );
}
