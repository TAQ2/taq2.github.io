import React from "react";
import styled from "styled-components";

import useWindowSize from "./hooks/useScreenSize";
import { colours, screenBreakpoints } from "./theme";
import meImg from "./assets/me.jpg";
import "./App.css";

const Link = styled.div`
  cursor: pointer;
  background-color: ${colours.primary};
  color: ${colours.secondary};
  text-align: center;
  width: 30%;
  border-radius: 10px;
  padding: 5px;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 0 2.5%;

  @media (max-width: ${screenBreakpoints.desktop}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ImgContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;

  @media (max-width: ${screenBreakpoints.desktop}px) {
    width: 70%;
  }

  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colours.primary};

  @media (max-width: ${screenBreakpoints.desktop}px) {
    width: 70%;
  }

  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 4em;
  font-weight: bold;

  @media (max-width: ${screenBreakpoints.small}px) {
    font-size: 3em;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  font-size: 2em;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${screenBreakpoints.small}px) {
    font-size: 1.5em;
  }
`;

function App() {
  const screenWidth = useWindowSize().width;

  return (
    <>
      {/* @Cleanup - having this div doesn't make sense in terms of the Container
      styled component */}
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto"
        }}
      >
        <Container>
          <ImgContainer>
            <div>
              <img
                src={meImg}
                alt="me"
                style={{
                  borderRadius: "50%",
                  paddingTop: "0%",
                  width: "100%"
                }}
              />
            </div>
          </ImgContainer>
          <div style={{ width: "2.5%" }} />
          <TextContainer>
            <Title>Arjun Gupta</Title>
            <div
              style={{
                fontSize: "1.6em",
                marginBottom: "1em"
              }}
            >
              React Developer
            </div>
            <i
              style={{
                marginBottom: "4em",
                textAlign: "center"
              }}
            >
              Some kind of comment that says what I'm good at things but also
              long enough
            </i>
            <LinkContainer>
              <Link>Info</Link>
              <Link>Labs</Link>
              <Link>Gallery</Link>
            </LinkContainer>
          </TextContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
