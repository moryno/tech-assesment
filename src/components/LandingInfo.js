import React from "react";
import styled from "styled-components";

const LandingInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Imagine if</Title>
        <Title>Scapchat</Title>
        <Title>had events</Title>
        <Description>
          Easily host and share events with your friends
        </Description>
        <Description>across any social media</Description>
        <Button>Create my event</Button>
      </Wrapper>
    </Container>
  );
};

export default LandingInfo;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #240d57;
  align-self: flex-end;
  &:last-child {
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  align-self: flex-end;
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 2rem;
  color: #fff;
  align-self: flex-end;
  font-size: 1.2rem;
  background-image: linear-gradient(to right, #8456ec, #e87bf8);
  margin-top: 2rem;
`;
