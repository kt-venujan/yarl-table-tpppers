"use client";

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ImageSlider } from "./components/ImageSlider";
import { GamesTeaser } from "./components/GamesTeaser";
import { CTABanner } from "./components/CTABanner";
import { MerchTeaser } from "./components/MerchTeaser";
import { SwagChallenge } from "./components/SwagChallenge";
import { Feedback } from "./components/Feedback";
import { SectionDivider } from "./components/SectionDivider";
import { GameRequest } from "./components/GameRequest";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { GOLD } from "./components/tokens";

export default function Home() {
  const [requestModalOpen, setRequestModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Meetup Image Slider */}
        <ImageSlider />

        {/* 3. Games We Have */}
        <GamesTeaser />

        {/* 4. CTA Banner — Request a Game */}
        <CTABanner
          title="Looking to learn a new game?"
          subtitle="We're always expanding our collection. Request a game and we'll try to bring it to the next meetup."
          buttonText="Request a Game"
          onClick={() => setRequestModalOpen(true)}
        />

        <div className="py-8" />

        {/* 5. Merch Teaser */}
        <MerchTeaser />

        {/* 6. CTA Banner — Expo Booth */}
        <CTABanner
          title="Bring Yarl Table Toppers to Your Next Event?"
          subtitle="We bring the games, the vibes, and the community. Let's make your event unforgettable."
          buttonText="Contact Us"
          onClick={() => window.open("https://chat.whatsapp.com/KJ9suk1FSgW9N42JfJFKUE", "_blank")}
          variant="large"
        />

        <div className="py-8" />

        {/* 7. Swag Challenge */}
        <SectionDivider label="Challenge" />
        <SwagChallenge />

        {/* 8. Feedback */}
        <SectionDivider label="Feedback" />
        <Feedback />
      </main>
      <Footer />

      {/* Game Request Modal */}
      <GameRequest isOpen={requestModalOpen} onClose={() => setRequestModalOpen(false)} />
    </>
  );
}
