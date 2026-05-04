import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { SwagChallenge } from "./components/SwagChallenge";
import { Feedback } from "./components/Feedback";
import { SectionDivider } from "./components/SectionDivider";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider label="Community Hub" />
        <BentoGrid />
        <SectionDivider label="Challenge" />
        <SwagChallenge />
        <SectionDivider label="Feedback" />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}
