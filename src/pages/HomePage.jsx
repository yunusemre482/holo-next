import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import Slider from '../components/Slider';

const HomePage = () => {
  return (
    <div className="App">
      <Slider />
      <HamburgerMenu />
    </div>
  );
};

export default HomePage;
