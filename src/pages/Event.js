import { CalendarToday, ChevronRight, PinDrop } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Event = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Birthday Bash</Title>
          <Host>Hosted by ELysia</Host>
          <ScheduleContainer>
            <IconWrapper>
              <CalendarToday />
            </IconWrapper>
            <ScheduleTitleWrapper>
              <BoldScheduleTitle>18 August 6:00Pm</BoldScheduleTitle>
              <ScheduleTitle>
                to <Span>19 August 1:00PM</Span> UTC +10
              </ScheduleTitle>
            </ScheduleTitleWrapper>
            <ChevronRight />
          </ScheduleContainer>
          <ScheduleContainer>
            <IconWrapper>
              <PinDrop />
            </IconWrapper>
            <ScheduleTitleWrapper>
              <BoldScheduleTitle>Street name</BoldScheduleTitle>
              <ScheduleTitle>Suburb, State, Postcode</ScheduleTitle>
            </ScheduleTitleWrapper>
            <ChevronRight />
          </ScheduleContainer>
        </Left>
        <Right>
          <ImageContainer>
            <Image
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="eventImg"
            />
          </ImageContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Event;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #f6f2ff;
  padding: 100px 200px;
  box-sizing: border-box;
  ${mobile({ width: "100vw", height: "100vh", padding: "0rem" })};
`;

const Wrapper = styled.section`
  display: flex;
  ${mobile({
    width: "100%",
    flexDirection: "column-reverse",
  })};
`;

const Left = styled.section`
  flex: 1;
  ${mobile({ width: "100%" })};
`;

const Right = styled.section`
  flex: 1;
  height: 100%;
  ${mobile({ width: "100%" })};
`;

const ImageContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 60%;
  height: 40vh;
  object-fit: cover;
  ${mobile({ width: "100%" })};
`;

const Title = styled.h1`
  color: #240d57;
  font-size: 3rem;
  ${mobile({ fontSize: "1.5rem" })};
`;

const Host = styled.span`
  color: #828282;
  font-weight: 500;
  font-size: 1.2rem;
  ${mobile({ fontSize: "0.8rem" })};
`;

const ScheduleContainer = styled.article`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const IconWrapper = styled.div`
  flex: 0.5;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  color: #8456ec;
  border-radius: 0.5rem;
  background-color: #ffff;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  align-items: center;
  margin-right: 1rem;
  justify-content: center;
  ${mobile({
    width: "20px",
    height: "20px",
  })};
`;

const ScheduleTitleWrapper = styled.div`
  flex: 3;
  display: flex;
  align-items: left;
  flex-direction: column;
`;

const BoldScheduleTitle = styled.p`
  color: #240d57;
  font-size: 1.3rem;
  font-weight: bold;
  align-self: flex-start;
  ${mobile({ fontSize: "1rem" })};
`;

const ScheduleTitle = styled.span`
  color: #4f4f4f;
  font-size: 1.1rem;
  ${mobile({ fontSize: "1rem" })};
`;

const Span = styled.strong``;
