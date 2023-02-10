import React from 'react'
import AboutPanel from '../components/AboutPanel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const About = () => {
  return (
    <div>
        <Navbar />
        <AboutPanel />
        <Footer />
    </div>
  );
}

export default About;