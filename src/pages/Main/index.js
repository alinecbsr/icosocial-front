import React, { Component } from 'react';

import NavFixed from '../../components/NavFixed';
import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';
import About from '../../components/About';
import Definitions from '../../components/Definitions';
import OurStory from '../../components/OurStory';
import WhatWeDo from '../../components/WhatWeDo';
import WhyWeDo from '../../components/WhyWeDo';
import Participate from '../../components/Participate';
import Partners from '../../components/Partners';
import FAQ from '../../components/Faq';
import Footer from '../../components/Footer';

import {
  heroRef,
  aboutRef,
  byWhatRef,
  byWhoRef,
  participateRef,
  partnersRef,
  faqRef,
  myRefs,
} from '../../helpers/create-refs';

import cocaCola from '../../assets/image/logomarcas/coca-cola.png';
import facebook from '../../assets/image/logomarcas/facebook.png';
import globo from '../../assets/image/logomarcas/globo.png';
import guaranaAntartica from '../../assets/image/logomarcas/guarana-logo-antartica.png';
import pivotal from '../../assets/image/logomarcas/pivotal.png';
import rocketseat from '../../assets/image/logomarcas/rocketseat.jpg';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
    localStorage.removeItem('user.email');
    window.addEventListener('scroll', this.onMoveScroll);
  }

  componentWillUnmount() {
    localStorage.removeItem('user.email');
    window.removeEventListener('scroll', this.onMoveScroll);
  }

  onMoveScroll = () => {
    this.setState({ scrollTop: document.documentElement.scrollTop });
  };

  render() {
    const { scrollTop } = this.state;

    let isShow = false;

    if (scrollTop >= window.innerHeight) {
      isShow = true;
    } else {
      isShow = false;
    }

    return (
      <>
        <NavFixed visible={isShow} rfs={myRefs} />
        <Hero rfs={heroRef} />
        <NavBar rfs={myRefs} />
        <About rfs={aboutRef} />
        <Definitions />
        <OurStory />
        <WhatWeDo rfs={byWhatRef} />
        <WhyWeDo rfs={byWhoRef} />
        <Participate rfs={participateRef} />
        <Partners
          rfs={partnersRef}
          images={[
            cocaCola,
            facebook,
            globo,
            guaranaAntartica,
            pivotal,
            rocketseat,
          ]}
        />
        <FAQ rfs={faqRef} />
        <Footer />
      </>
    );
  }
}

export default Main;
