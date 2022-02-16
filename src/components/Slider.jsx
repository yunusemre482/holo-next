import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState}from "react";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "12px"};
  right: ${(props) => props.direction === "right" && "12px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.gridIndex * -100}vw);
`;



const Title=styled.div`
`;


const Slider = () => {
  const [gridIndex, setgridIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setgridIndex(gridIndex > 0 ? gridIndex - 1 : 2);
    }else if(direction ==="right") {
      setgridIndex(gridIndex < 2 ? gridIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper gridIndex={gridIndex}>
            <Title>Temporay slides{gridIndex}</Title>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;