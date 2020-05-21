/* eslint-disable no-unused-vars */
import React, { Component, createRef } from 'react';
import NavFixed from '../../components/NavFixed';
import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';
import About from '../../components/About';
import Definitions from '../../components/Definitions';
import OurStory from '../../components/OurStory';
import FAQ from '../../components/Faq';
import Footer from '../../components/Footer';
import Partners from '../../components/Partners';

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
    const partnersRef = createRef();
    const faqRef = createRef();

    const myRefs = { aboutRef, partnersRef, faqRef, heroRef };

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
        <Partners rfs={partnersRef} />
        <FAQ rfs={faqRef} />
        <Footer />
      </>
    );
  }
}

export default Main;
