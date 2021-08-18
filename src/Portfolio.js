import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components/macro";

import ContentContainer from "./components/ContentContainer";
import Title from "./components/Title";
import portfolioData from "./portfolioData";
import { colours, screenBreakpoints } from "./theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4em;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
  }
`;

const ImageContainer = styled.a`
  width: 50%;
  min-width: 300px;
  max-width: 100%;
  margin-right: 2em;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 80%;
    margin-bottom: 2em;
    margin-right: 0em;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 80%;
  }
`;

function Lab({ name, img, description, githubLink, appLink }) {
  return (
    <Container>
      <ImageContainer href={appLink} target="_blank" rel="noopener noreferrer">
        <img
          src={img}
          alt={name}
          style={{
            width: "100%",
            border: "5px solid #eee",
          }}
          href={appLink}
        />
      </ImageContainer>
      <TextContainer>
        <div
          style={{
            marginBottom: "0.5em",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "2em",
            alignContent: "center",
          }}
        >
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: "bold",
              color: colours.secondary,
              textDecoration: "none",
            }}
          >
            {name}
          </a>
          <a
            href={githubLink}
            style={{
              color: "black",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div>{description}</div>
      </TextContainer>
    </Container>
  );
}

export default function Portfolio() {
  return (
    <div style={{ color: colours.secondary }}>
      <Title style={{ backgroundColor: colours.primary }}>Portfolio</Title>
      <ContentContainer>
        <div
          style={{
            margin: "1em 0 3em 0",
            fontWeight: "bold",
            textAlign: "justify",
          }}
        >
          This showcases the apps that I have built in my spare time, designed
          and deployed on my own. These examples use React and are deployed on
          github pages. I like to provoke my interest in design by making apps
          look simple but beautiful and responsive.
        </div>
        {portfolioData.map((data, i) => (
          <Lab {...data} key={i} />
        ))}
      </ContentContainer>
    </div>
  );
}
