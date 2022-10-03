import { ArrowRightSharp, CalendarViewDay } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Event = () => {
  return (
    <Container>
      <Left>
        <Title>Birthday Bash</Title>
        <Host>Hosted by ELysia</Host>
        <ScheduleContainer>
          <IconWrapper>
            <CalendarViewDay />
          </IconWrapper>
          <ScheduleTitleWrapper>
            <BoldScheduleTitle>18 August 6:00Pm</BoldScheduleTitle>
            <ScheduleTitle>
              to <Span>19 August 1:00PM</Span> UTC +10
            </ScheduleTitle>
          </ScheduleTitleWrapper>
          <ArrowRightSharp />
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
    </Container>
  );
};

export default Event;

const Container = styled.main``;

const Left = styled.section``;

const Right = styled.section``;

const ImageContainer = styled.section`
  width: 100%;
  height: 30vh;
  display: flex;
  align-item: center;
  justify-content: center;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 2.21875rem;
  border-top-left-radius: 2.21875rem;
`;

const InfoContainer = styled.section`
  padding: 1rem;
`;

const Title = styled.h1`
  color: #240d57;
  font-size: 2rem;
`;

const Host = styled.span`
  color: #828282;
  font-weight: 500;
`;

const ScheduleContainer = styled.article`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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
  align-self: left;
`;

const ScheduleTitle = styled.span`
  color: #4f4f4f;
  font-size: 1.1rem;
`;

const Span = styled.strong``;
