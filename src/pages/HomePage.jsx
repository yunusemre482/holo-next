import React, {useState} from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import Slider from '../components/Slider';
import Viewer from './Viewer';

const HomePage = () => {
  const [viwerId, setViwerId] = useState(null);

  const changeId = (id) => {
    setViwerId(id);
  };

  return (
    <div style={{height: '100vh', width: '100%',position:"relative"}}>

      <Viewer id={viwerId} changeId={changeId}/>
      <Slider changeId={changeId} />
      <HamburgerMenu />
    </div>
  );
};

export default HomePage;
