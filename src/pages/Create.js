import React from "react";
import styled from "styled-components";

const Create = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create Event</Title>
        <Form>
          <Input placeholder="Event name" name="eventName" />
          <Input placeholder="Host name" type="hostname" />
          <Input placeholder="Start time" type="start" />
          <Input placeholder="End time/date" type="end" />
          <Input placeholder="Location" type="location" />
          <Input placeholder="Event photo" type="photo" />
          <Button position="left">Create</Button>
        </Form>
        <Button position="right">Next</Button>
      </Wrapper>
    </Container>
  );
};

export default Create;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f6f2ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  color: #240d57;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.625rem 0;
  padding: 0.625rem;
  &::placeholder {
    color: #8456ec;
  }
`;

const Button = styled.button`
  color: #fff;

  background-image: linear-gradient(to right, #8456ec, #e87bf8);
  width: 40%;

  padding: 15px 20px;
  cursor: pointer;
  border: none;
`;
