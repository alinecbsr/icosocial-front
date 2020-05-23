/* eslint-disable no-unused-vars */
import React, { Component, createRef } from 'react';
import NavFixed from '../../components/NavFixed';
import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';
import About from '../../components/About';
import Definitions from '../../components/Definitions';
import OurStory from '../../components/OurStory';
import WhyWeDo from '../../components/WhyWeDo';
import Participate from '../../components/Participate';
import Partners from '../../components/Partners';
import FAQ from '../../components/Faq';
import Footer from '../../components/Footer';

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
    window.addEventListener('scroll', this.onMoveScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onMoveScroll);
  }

  onMoveScroll = (e) => {
    this.setState({ scrollTop: document.documentElement.scrollTop });
  };

  render() {
    let isShow = false;
    const { scrollTop } = this.state;
    const maxScroll = 751;
    const heroRef = createRef();
    const aboutRef = createRef();
    const byWhoRef = createRef();
    const participateRef = createRef();
    const partnersRef = createRef();
    const faqRef = createRef();

    const myRefs = {
      aboutRef,
      partnersRef,
      faqRef,
      heroRef,
      participateRef,
      byWhoRef,
    };

    if (scrollTop >= maxScroll) {
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
        <WhyWeDo rfs={byWhoRef} />
        <Participate rfs={participateRef} />
        <Partners
          /* rfs={partnersRef} */
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
