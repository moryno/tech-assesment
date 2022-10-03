import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Home = () => {
  return (
    <Container>
      <Left>
        <Card />
      </Left>
      <Right>Right</Right>
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
  padding: 3.75rem 6.25rem;
  box-sizing: border-box;
`;

const Left = styled.section`
  flex: 1;
`;

const Right = styled.section`
  flex: 1;
`;
