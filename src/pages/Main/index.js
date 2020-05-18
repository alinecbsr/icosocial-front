import React from 'react';
import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';
import About from '../../components/About';
import Definitions from '../../components/Definitions';
import OurStory from '../../components/OurStory';

function Main() {
  return (
    <>
      <Hero />
      <NavBar />
      <About />
      <Definitions />
      <OurStory />
    </>
  );
}

export default Main;
