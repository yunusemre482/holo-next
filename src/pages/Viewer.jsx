import React from 'react';
import {CloseOutlined} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 97%;
  height: 95vh;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 3%;
  background-color: #cfcccc;
`;

const CloseButton = styled.button`
  position: absolute;
  displax: flex;
  width: 50px;
  height: 50px;
  border-width: 0;
  border-radius: 50%;
  top: 30px;
  right: 30px;
  align-items: center;
  justify-content: center;
  background: #ddaa;
`;

const Viewer = ({sceneId}) => {
  return (
    <Container>
      <holonext-viewer sceneId={sceneId}></holonext-viewer>
      <CloseButton
        onClick={() => {
          window.location.pathname = `/holo-next/`;
        }}>
        <CloseOutlined />
      </CloseButton>
    </Container>
  );
};

export default Viewer;
