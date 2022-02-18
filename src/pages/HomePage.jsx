import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import Slider from '../components/Slider';
import Viewer from './Viewer';
const HomePage = ({sceneId}) => {
  return (
    <div className="App">
      {sceneId ? <Viewer sceneId={sceneId} /> : null}
      <Slider />
      <HamburgerMenu />
    </div>
  );
};

export default HomePage;
