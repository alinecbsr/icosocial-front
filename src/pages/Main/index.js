import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Definitions from '../../components/Definitions';

function Main() {
  return (
    <>
      <Hero />
      <div className="container content">
        <About />
        <Definitions />
      </div>
    </>
  );
}

export default Main;
