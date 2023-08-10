'use client';

import {
  AboutSection,
  AdvantageSection,
  CTASection,
  HeroSection,
  PartnerSection,
} from '@/components/home';
import theme from '@/theme';
import { Flowbite } from 'flowbite-react';

export default function Home() {
  return (
    <main className="container mx-auto">
      <Flowbite theme={{ theme }}>
        <HeroSection />
        <PartnerSection />
        <AboutSection />
        <AdvantageSection />
        <CTASection />
      </Flowbite>
    </main>
  );
}
