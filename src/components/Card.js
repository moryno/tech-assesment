import {
  ArrowRightSharp,
  CalendarToday,
  Link,
  PinDrop,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="cardImg"
        />
      </ImageContainer>
      <InfoContainer>
        <Title>Movie night</Title>
        <HostDescription> Hosted by Elysia</HostDescription>
        <ResponseContainer>
          <Responses>14 responses</Responses>
          <Guests>see guests</Guests>
          <InviteButton>Invite</InviteButton>
        </ResponseContainer>
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
          <ArrowRightSharp />
        </ScheduleContainer>
        <ScheduleContainer>
          <IconWrapper>
            <PinDrop />
          </IconWrapper>
          <ScheduleTitleWrapper>
            <BoldScheduleTitle>Stret name</BoldScheduleTitle>
            <ScheduleTitle>301 Rowes Lane, WA, 7183</ScheduleTitle>
          </ScheduleTitleWrapper>
          <ArrowRightSharp />
        </ScheduleContainer>
        <ScheduleContainer>
          <IconWrapper>
            <Link />
          </IconWrapper>
          <ScheduleTitleWrapper>
            <BoldScheduleTitle>Link</BoldScheduleTitle>
            <ScheduleTitle>netflix.com</ScheduleTitle>
          </ScheduleTitleWrapper>
          <ArrowRightSharp />
        </ScheduleContainer>
      </InfoContainer>
    </Container>
  );
};

export default Card;

const Container = styled.main`
  width: 50%;
  background-color: #f6f2ff;
  border: none;
  border-radius: 2.21875rem;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
`;

const ImageContainer = styled.section`
  width: 100%;
  height: 40vh;
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

const HostDescription = styled.span`
  color: #828282;
  font-weight: 500;
`;

const ResponseContainer = styled.article`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1.1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const Responses = styled.span`
  color: #240d57;
`;

const Guests = styled.span`
  color: #501fc1;
`;

const InviteButton = styled.button`
  border: none;
  border-radius: 0.6rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;
  background-color: #8456ec;
  color: #ede5ff;
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
  justify-self: start;
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
