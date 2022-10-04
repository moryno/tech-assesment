import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Create = () => {
  const [events, setEvents] = useState([]);
  const [inputs, setInputs] = useState({
    eventName: "",
    hostName: "",
    start: "",
    end: "",
    location: "",
    photo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEvents([...events, inputs]);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create Event</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Event name"
            onChange={handleChange}
            name="eventName"
          />
          <Input
            placeholder="Host name"
            onChange={handleChange}
            name="hostName"
          />
          <Input
            placeholder="Start time"
            onChange={handleChange}
            name="start"
          />
          <Input
            placeholder="End time/date"
            onChange={handleChange}
            name="end"
          />
          <Input
            placeholder="Location"
            onChange={handleChange}
            name="location"
          />
          <Input
            placeholder="Event photo"
            onChange={handleChange}
            name="photo"
          />
          <Button>Create</Button>
        </Form>

        <Link to="/event">
          {" "}
          <NextButton>Next</NextButton>{" "}
        </Link>
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
  ${mobile({ width: "75%" })};
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
const NextButton = styled.button`
  color: #fff;

  background-image: linear-gradient(to right, #8456ec, #e87bf8);
  width: 40%;
  position: absolute;
  width: 25%;
  margin-top: 2rem;
  padding: 15px 20px;
  cursor: pointer;
  border: none;
`;
