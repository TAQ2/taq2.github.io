import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import useWindowSize from "./hooks/useScreenSize";
import { colours, screenBreakpoints } from "./theme";
import meImg from "./assets/me.jpg";

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

const Title = styled.div`
  font-size: 4em;
  font-weight: bold;

  @media (max-width: ${screenBreakpoints.small}px) {
    font-size: 3em;
  }
`;

// @Cleanup - Tile and Container is unreadable
const Tile = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ colour }) => colour};
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 0 2.5%;
  margin: 0 auto;
  max-width: 1250px;

  @media (max-width: ${screenBreakpoints.desktop}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ImgContainer = styled(animated.div)`
  width: 47.5%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${screenBreakpoints.desktop}px) {
    width: 70%;
    height: 50%;
  }

  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 90%;
    height: 50%;
  }

  @media (max-width: ${screenBreakpoints.small}px) {
    width: 100%;
  }
`;

const TextContainer = styled(animated.div)`
  width: 47.5%;
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

const Quote = styled.i`
  margin-bottom: 4em;
  text-align: center;

  @media (max-width: ${screenBreakpoints.small}px) {
    margin-bottom: 2em;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
`;

// @Cleanup - change this
const backgroundPattern =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVQoU2NkIAIs1lr8n5GQOpCi2GuxjHgVwhSBDMOpEFkRToXoirAqxKYIQyEuRSgK8SmCKySkCKyQGEUghQCVBiZ60LnT4AAAAABJRU5ErkJggg==";

export default function Home() {
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
      <Tile
        colour={colours.secondary}
        style={{
          // http://bit.ly/2QRg4FQ #a32aa3
          background: `url(${backgroundPattern})repeat`
        }}
      >
        <Container>
          <ImgContainer style={imgAnimation}>
            <Image src={meImg} alt="me" />
          </ImgContainer>
          <div style={{ width: "5%" }} />
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
            <Quote>
              "Finding solutions to business problems is more interesting and
              important than the art of code."
            </Quote>
            <LinkContainer>
              <Link>Info</Link>
              <Link>Labs</Link>
              <Link>Gallery</Link>
            </LinkContainer>
          </TextContainer>
        </Container>
      </Tile>
    </>
  );
}
