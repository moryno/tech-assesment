import {
  ArrowRightSharp,
  CalendarToday,
  CalendarViewDay,
  ChevronRight,
  PinDrop,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

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
              <ScheduleTitle>301 Rowes Lane, WA, 7183</ScheduleTitle>
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
  width: 100vw;
  height: 100vh;
  background-color: #f6f2ff;
  padding: 60px 100px;
  box-sizing: border-box;
`;

const Wrapper = styled.section`
  display: flex;
`;

const Left = styled.section`
  flex: 1;
`;

const Right = styled.section`
  flex: 1;
  height: 100%;
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
  height: 60vh;
  object-fit: cover;
`;

const Title = styled.h1`
  color: #240d57;
  font-size: 3rem;
`;

const Host = styled.span`
  color: #828282;
  font-weight: 500;
  font-size: 1.2rem;
`;

const ScheduleContainer = styled.article`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const IconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
`;

const ScheduleTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BoldScheduleTitle = styled.p`
  color: #240d57;
  font-size: 1.3rem;
  font-weight: bold;
  align-self: flex-start;
`;

const ScheduleTitle = styled.span`
  color: #4f4f4f;
  font-size: 1.1rem;
`;

const Span = styled.strong``;
