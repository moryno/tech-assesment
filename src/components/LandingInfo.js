import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const LandingInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Imagine if</Title>
        <TitleGradient>Snapchat</TitleGradient>
        <Title>had events</Title>
        <Description>
          Easily host and share events with your friends
        </Description>
        <Description>across any social media</Description>
        <Button>
          <Link to={"/create"}>🎉Create my event</Link>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default LandingInfo;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "100%", textAlign: "center" })};
`;

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mobile({ width: "100%" })};
`;

const Title = styled.h1`
  font-size: 6rem;
  color: #240d57;
  letter-spacing: 3px;
  line-height: 1.5;
  align-self: flex-end;
  &:last-child {
    margin-bottom: 1.5rem;
    ${mobile({ marginBottom: "1rem" })};
  }
  ${mobile({ fontSize: "2.5rem", alignSelf: "center", lineHeight: "1" })};
`;

const TitleGradient = styled.h1`
  font-size: 6rem;
  letter-spacing: 3px;
  line-height: 1.5;
  align-self: flex-end;
  background: -webkit-linear-gradient(#8456ec, #e87bf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${mobile({ fontSize: "2.5rem", alignSelf: "center", lineHeight: "1" })};
`;

const Description = styled.p`
  align-self: flex-end;
  color: #828282;
  font-size: 1.5rem;
  line-height: 1.5;
  ${mobile({ alignSelf: "center", lineHeight: "1" })};
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 1.1rem 2rem;
  color: #fff;
  align-self: flex-end;
  font-size: 1.7rem;
  font-weight: 600;
  background-image: linear-gradient(to right, #8456ec, #e87bf8);
  margin-top: 2rem;
  cursor: pointer;
  ${mobile({
    alignSelf: "center",
    position: "absolute",
    bottom: "3%",
  })};
`;
