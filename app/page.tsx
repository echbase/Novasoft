import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ExpertiseGrid from '@/components/ExpertiseGrid';
import Method from '@/components/Method';
import Stats from '@/components/Stats';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ScrollExperience from '@/components/ScrollExperience';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="contenu" className="relative z-[2]">
        <div id="top" />
        <Hero />
        <Marquee />
        <ExpertiseGrid />
        <Method />
        <Stats />
        <Works />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
      <ScrollExperience />
    </>
  );
}
