import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import Title from "./components/Title";
import { colours, screenBreakpoints } from "./theme";
import galleryData from "./galleryData";

// @Cleanup - bad name
const PieceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${screenBreakpoints.maxContentWidth}px;
  margin: 0 5%;
  justify-content: center;

  // @Incomplete - this is only so that the footer looks ok
  // @Incomplete - this is overwridden in the media query
  margin-bottom: 2em;

  @media (min-width: ${screenBreakpoints.maxContentWidth}px) {
    margin: 0 auto;
  }
`;

function Piece({ img, name, githubLink, appLink }) {
  const [isHovered, setIsHovered] = useState(false);

  const animation = useSpring({
    transform: `translateY(${isHovered ? -20 : 0}px)`
  });

  return (
    <animated.div
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
          // @Incomplete - should be 50 but we are relative to the whole container
          top: "47%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10%",
          opacity: isHovered ? 1 : 0,
          zIndex: 1
        }}
      >
        <div
          style={{
            width: "30%",
            textAlign: "center",
            backgroundColor: colours.primary,
            borderRadius: 5,
            padding: 5,
            cursor: "pointer"
          }}
        >
          View
        </div>
        <div
          style={{
            width: "30%",
            textAlign: "center",
            backgroundColor: colours.primary,
            borderRadius: 5,
            padding: 5,
            cursor: "pointer"
          }}
        >
          Code
        </div>
      </div>
      <img
        alt={name}
        src={img}
        style={{
          height: "100%",
          width: "100%",
          maxHeight: 300,
          maxWidth: 300,
          borderRadius: "50%",
          filter: isHovered && "grayscale(50%)"
        }}
      />
      <div style={{ textAlign: "center", fontWeight: "bold" }}>{name}</div>
    </animated.div>
  );
}

export default function Gallery() {
  return (
    <div style={{ color: colours.secondary }}>
      <Title
        style={{
          textAlign: "center",
          marginBottom: "0.5em",
          backgroundColor: colours.primary
        }}
      >
        Gallery
      </Title>
      <PieceContainer>
        {/* @Cleanup - this div doesn't belong in the piece container */}
        <div style={{ marginBottom: "1em" }}>
          Here is where I do programmatic art stuff using p5.js. Here is where I
          do programmatic art stuff using p5.jsHere is where I do programmatic
          art stuff using p5.jsHere is where I do programmatic art stuff using
          p5.js
        </div>
        {galleryData.map((data, i) => (
          <Piece {...data} key={i} />
        ))}
      </PieceContainer>
    </div>
  );
}
