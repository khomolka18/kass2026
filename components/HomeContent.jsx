"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import IntroReveal from "@/components/IntroReveal";

const HomeContent = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <IntroReveal onReveal={() => setRevealed(true)} />
      <Navigation />
      <Hero revealed={revealed} />
      <About />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default HomeContent;
