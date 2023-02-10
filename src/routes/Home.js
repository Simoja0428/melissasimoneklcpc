import React from 'react';
import Footer from '../components/Footer';
import HomePanel from '../components/HomePanel';
import Navbar from '../components/Navbar';

export const Home = () => {
  return (
    <div>
    <Navbar />
    <HomePanel />
    <Footer />
    </div>
  );
}

export default Home;