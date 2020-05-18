import React, { createRef } from 'react';
import Hero from '../../components/Hero';
import FAQ from '../../components/Faq';
import About from '../../components/About';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import OurStory from '../../components/OurStory';
import Definitions from '../../components/Definitions';

function Main() {
  const aboutRef = createRef();
  const missionRef = createRef();
  const faqRef = createRef();

  const myRefs = { aboutRef, missionRef, faqRef };

  return (
    <>
      <Hero />
      <NavBar rfs={myRefs} />
      <About rfs={aboutRef} />
      <Definitions rfs={missionRef} />
      <OurStory />
      <FAQ rfs={faqRef} />
      <Footer />
    </>
  );
}

export default Main;
