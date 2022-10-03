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
        <HostDescription>Hosted by Elysia</HostDescription>
        <ResponseContainer>
          <Responses>14 responses</Responses>
          <Guests>see guests</Guests>
          <InviteButton>Invite</InviteButton>
        </ResponseContainer>
        <ScheduleContainer>
          <IconWrapper>Icon</IconWrapper>
          <ScheduleTitleWrapper>
            <BoldScheduleTitle>18 August 6:00Pm</BoldScheduleTitle>
            <ScheduleTitle>to 19 August 1:00PM UTC +10</ScheduleTitle>
          </ScheduleTitleWrapper>
        </ScheduleContainer>
      </InfoContainer>
    </Container>
  );
};

export default Card;

const Container = styled.main`
  width: 20%;
  background-color: teal;
`;

const ImageContainer = styled.section``;

const Image = styled.img``;

const InfoContainer = styled.section``;

const Title = styled.h2``;

const HostDescription = styled.span``;

const ResponseContainer = styled.article``;

const Responses = styled.span``;

const Guests = styled.span``;

const InviteButton = styled.button``;

const ScheduleContainer = styled.article``;

const IconWrapper = styled.div``;

const ScheduleTitleWrapper = styled.div``;

const BoldScheduleTitle = styled.span``;

const ScheduleTitle = styled.span``;
