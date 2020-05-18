import React, { createRef } from 'react';
import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';
import About from '../../components/About';
import Definitions from '../../components/Definitions';
import OurStory from '../../components/OurStory';
import FAQ from '../../components/Faq';

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
    </>
  );
}

export default Main;
