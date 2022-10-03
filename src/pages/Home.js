import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import LandingInfo from "../components/LandingInfo";
import { mobile } from "../responsive";

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
  padding: 60px 160px;
  box-sizing: border-box;
  ${mobile({
    width: "100vw",
    flexDirection: "column-reverse",
    padding: "1rem",
  })};
`;

const Left = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "100%" })};
`;

const Right = styled.section`
  flex: 1;
  ${mobile({ width: "100%" })};
`;
