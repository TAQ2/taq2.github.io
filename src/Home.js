import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import useWindowSize from "./hooks/useScreenSize";
import { colours, screenBreakpoints } from "./theme";
import meImg from "./assets/me.jpg";
import "./App.css";

// @Cleanup - move this into a different file
// ############################################################
// LINK
// ############################################################
const StyledLink = styled(animated.div)`
  cursor: pointer;
  background-color: ${colours.primary};
  color: ${colours.secondary};
  border: 2px solid ${colours.secondaryDark};
  text-align: center;
  width: 30%;
  border-radius: 10px;
  padding: 5px;
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

function Link({ children, href }) {
  const [isHovered, setIsHovered] = useState(false);

  const animation = useSpring({
    transform: `scale(${isHovered ? 1.05 : 1})`
  });

  return (
    <StyledLink
      style={animation}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </StyledLink>
  );
}

// ############################################################
// ############################################################
// ############################################################

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 0 2.5%;

  @media (max-width: ${screenBreakpoints.desktop}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  // http://bit.ly/2QRg4FQ #a32aa3
  background: url(
    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVQoU2NkIAIs1lr8n5GQOpCi2GuxjHgVwhSBDMOpEFkRToXoirAqxKYIQyEuRSgK8SmCKySkCKyQGEUghQCVBiZ60LnT4AAAAABJRU5ErkJggg==
       )
    repeat;
`;

const ImgContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;

  @media (max-width: ${screenBreakpoints.desktop}px) {
    width: 70%;
  }

  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 90%;
  }

  @media (max-width: ${screenBreakpoints.small}px) {
    width: 100%;
  }
`;

const TextContainer = styled(animated.div)`
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

const Tile = styled.div`
  width: 100%;
  height: 100vh;
`;

function Home() {
  const screenWidth = useWindowSize().width;

  const imgAnimation = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0.3)" },
    config: { duration: 700 }
  });

  const textAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 900,
    config: { duration: 1200 }
  });

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
            <animated.div style={imgAnimation}>
              <img
                src={meImg}
                alt="me"
                style={{
                  borderRadius: "50%",
                  paddingTop: "0%",
                  width: "100%"
                }}
              />
            </animated.div>
          </ImgContainer>
          <div style={{ width: "2.5%" }} />
          <TextContainer style={textAnimation}>
            <Title>Arjun Gupta</Title>
            <div
              style={{
                fontSize: "1.6em",
                marginBottom: "1.5em"
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
              "Finding solutions to business problems is more interesting and
              important than the art of code."
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

export default Home;
