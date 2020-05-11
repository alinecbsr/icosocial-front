import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';

function Main() {
  return (
    <>
      <Hero />
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default Main;
