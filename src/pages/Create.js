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
          <Button>Create</Button>
        </Form>
        <Button>Next</Button>
      </Wrapper>
    </Container>
  );
};

export default Create;

const Container = styled.main``;

const Wrapper = styled.section``;

const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;
