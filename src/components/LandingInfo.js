import React from "react";
import styled from "styled-components";

const LandingInfo = () => {
  return (
    <Container>
      <Title>Imagine if</Title>
      <Title>Scapchat</Title>
      <Title>had events</Title>
      <Description>
        Easily host and share events with your friends across any social media
      </Description>
      <Button>Create my event</Button>
    </Container>
  );
};

export default LandingInfo;

const Container = styled.main``;

const Title = styled.h1``;

const Description = styled.p``;

const Button = styled.button``;
