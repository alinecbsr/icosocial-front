import React from 'react';

import Hero from '../../components/Hero';
import About from '../../components/About';
import Partners from '../../components/Partners';
import Footer from '../../components/Footer';
import Definitions from '../../components/Definitions';

import cocaCola from '../../assets/image/logomarcas/coca-cola.png';
import facebook from '../../assets/image/logomarcas/facebook.png';
import globo from '../../assets/image/logomarcas/globo.png';
import guaranaAntartica from '../../assets/image/logomarcas/guarana-logo-antartica.png';
import pivotal from '../../assets/image/logomarcas/pivotal.png';
import rocketseat from '../../assets/image/logomarcas/rocketseat.jpg';

function Main() {
  return (
    <>
      <Hero />
      <About />
      <Definitions />
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
      <Footer />
    </>
  );
}

export default Main;
