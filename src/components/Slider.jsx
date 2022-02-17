import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';
import {useState} from 'react';
import React from 'react';
import styled from 'styled-components';
import {items} from '../constants/data';
import {mobile} from '../responsive/mobile';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ddddaa;
  border-radius: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '12px'};
  right: ${(props) => props.direction === 'right' && '12px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
`;


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.gridIndex * -100}vw);
`;
const ItemContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({display: "none"})}
  background-color: ${(props) => props.backColor};
`;

const Image = styled.img`

  margin-left:30px;
  height: 80%;
  width: 100%;
  border-radius: 5;
`;

const Title = styled.div`
  font-size:36px;
  font-weight:600;
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 60px;
`;
const Description = styled.div`
  margin: 50px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.4px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  border-radius: 12%;
  border-color:#aad;
  background-color: transparent;
  cursor: pointer;
`;
const Slider = () => {
  const [gridIndex, setgridIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setgridIndex(gridIndex > 0 ? gridIndex - 1 : items.length - 1);
    } else if (direction === 'right') {
      setgridIndex(gridIndex < 2 ? gridIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined style={{fontSize: 40}} />
      </Arrow>
      <Wrapper gridIndex={gridIndex}>
        {items.map((item) => (
          <ItemContainer backColor={item.backColor} key={item.id}>
            <ImageContainer>{console.log(item.backColor)}
              <Image src={item.image} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button >VIEW IN 3D </Button>
            </InfoContainer>
          </ItemContainer>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined style={{fontSize: 40}} />
      </Arrow>
    </Container>
  );
};

export default Slider;

