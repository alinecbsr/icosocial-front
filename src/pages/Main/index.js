import React, { createRef } from 'react';

import FAQ from '../../components/Faq';
import Hero from '../../components/Hero';
import About from '../../components/About';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import OurStory from '../../components/OurStory';
import Partners from '../../components/Partners';
import Definitions from '../../components/Definitions';

import cocaCola from '../../assets/image/logomarcas/coca-cola.png';
import facebook from '../../assets/image/logomarcas/facebook.png';
import globo from '../../assets/image/logomarcas/globo.png';
import guaranaAntartica from '../../assets/image/logomarcas/guarana-logo-antartica.png';
import pivotal from '../../assets/image/logomarcas/pivotal.png';
import rocketseat from '../../assets/image/logomarcas/rocketseat.jpg';

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
      <Partners
        images={[
          cocaCola,
          facebook,
          globo,
          guaranaAntartica,
          pivotal,
          rocketseat,
        ]}
      />
    </>
  );
}

export default Main;
