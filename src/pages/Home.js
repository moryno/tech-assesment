import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import LandingInfo from "../components/LandingInfo";

const Home = () => {
  return (
    <Container>
      <Left>
        <Card />
      </Left>
      <Right>
        <LandingInfo />
      </Right>
    </Container>
  );
};

export default Home;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f6f2ff;
  align-items: center;

  box-sizing: border-box;
`;

const Left = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.section`
  flex: 1;
`;
