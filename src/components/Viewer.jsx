import React, {useState} from 'react';
import {CloseOutlined} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const CloseButton = styled.div``;

const Viewer = (props) => {
  const [sceneId, setSceneId] = useState(props.sceneId);
  return (
    <Container className="viewer">
      <holonext-viewer
        style={{height: '97vh', width: '99vw'}}
        sceneId={sceneId}></holonext-viewer>
      <CloseButton>
        <CloseOutlined />
      </CloseButton>
    </Container>
  );
};

export default Viewer;
