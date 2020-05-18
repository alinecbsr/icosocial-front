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
  const myRefs = { aboutRef, missionRef };

  return (
    <>
      <Hero />
      <NavBar rfs={myRefs} />
      <About rfs={aboutRef} />
      <Definitions rfs={missionRef} />
      <OurStory />
      <FAQ />
    </>
  );
}

export default Main;
