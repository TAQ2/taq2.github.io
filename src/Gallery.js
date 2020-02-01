import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { FaHome } from "react-icons/fa";

import Link from "./components/Link";
import Title from "./components/Title";
import { colours, screenBreakpoints } from "./theme";
import galleryData from "./galleryData";
import ContentContainer from "./components/ContentContainer";

const Container = styled(animated.div)`
  padding: 1em;
  margin-bottom: 1em;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    transform: translateY(0px) !important; // removes the animation
  }
`;

function Piece({ img, name, githubLink, appLink }) {
  const [isHovered, setIsHovered] = useState(false);

  const animation = useSpring({
    transform: `translateY(${isHovered ? -20 : 0}px)`
  });

  return (
    <Container
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{
        padding: "1em",
        marginBottom: "1em",
        ...animation
      }}
    >
      <div
        style={{
          position: "relative",
          top: "50%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10%",
          opacity: isHovered ? 1 : 0,
          zIndex: 1
        }}
      >
        <a
          style={{
            width: "30%",
            textAlign: "center",
            backgroundColor: colours.primary,
            borderRadius: 5,
            padding: 5,
            textDecoration: "none"
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={appLink}
        >
          View
        </a>
        <a
          style={{
            width: "30%",
            textAlign: "center",
            backgroundColor: colours.primary,
            borderRadius: 5,
            padding: 5,
            textDecoration: "none"
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={githubLink}
        >
          Code
        </a>
      </div>
      <img
        alt={name}
        src={img}
        style={{
          height: 300,
          width: 300,
          borderRadius: "50%",
          filter: isHovered && "grayscale(50%)",
          border: `5px solid ${colours.secondaryLight}`
        }}
      />
      <div style={{ textAlign: "center", fontWeight: "bold" }}>{name}</div>
    </Container>
  );
}

export default function Gallery() {
  return (
    <div style={{ color: colours.secondary, marginBottom: "1em" }}>
      <Link
        to="/"
        style={{ position: "absolute", top: 5, left: 5, border: "unset" }}
      >
        <FaHome size={30} />
      </Link>
      <Title style={{ backgroundColor: colours.primary }}>Gallery</Title>
      <ContentContainer
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <div style={{ marginBottom: "1em" }}>
          I find making programmatic art is a relaxing hobby. Just doing web
          development makes me narrow-minded so I use basic physics and
          animation concepts in p5.js which helps me flex my coding variability.
        </div>
        {galleryData.map((data, i) => (
          <Piece {...data} key={i} />
        ))}
      </ContentContainer>
    </div>
  );
}
