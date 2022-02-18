import React, {useState} from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import Slider from '../components/Slider';
import Viewer from './Viewer';

const HomePage = () => {
  return (
    <div className="App">
      <Slider />
      <HamburgerMenu />
    </div>
  );
};

export default HomePage;
