import React, {useState} from 'react';
import {CloseOutlined} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffff;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 9999;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Viewer = ({id, changeId}) => {
  return id ? (
    <Container className="viewer">
      {console.log(id)}
      <holonext-viewer
        style={{height: '97vh', width: '99vw'}}
        sceneId={id}></holonext-viewer>
      <CloseButton
        onClick={() => {
          changeId(null);
        }}>
        <CloseOutlined />
      </CloseButton>
    </Container>
  ) : null;
};

export default Viewer;
