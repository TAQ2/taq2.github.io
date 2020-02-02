import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

import ContentContainer from "./components/ContentContainer";
import Title from "./components/Title";
import labData from "./labData";
import { colours, screenBreakpoints } from "./theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4em;
  margin-right: 2em;
  margin-left: 2em;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
  }
`;

const ImageContainer = styled.a`
  width: 350px;
  min-width: 300px;
  max-width: 100%;
  margin-bottom: 2em;
  margin-right: 2em;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    margin-right: 0em;
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
            border: "5px solid #eee"
          }}
          href={appLink}
        />
      </ImageContainer>
      <div>
        <div
          style={{
            marginBottom: "0.5em",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "2em",
            alignContent: "center"
          }}
        >
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: "bold",
              color: colours.secondary,
              textDecoration: "none"
            }}
          >
            {name}
          </a>
          <a
            href={githubLink}
            style={{
              color: "black"
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div>{description}</div>
      </div>
    </Container>
  );
}

export default function Labs({ labsRef }) {
  return (
    <div style={{ color: colours.secondary }} ref={labsRef}>
      <Title
        style={{
          backgroundColor: "white"
        }}
      >
        Labs
      </Title>
      <ContentContainer>
        <div style={{ marginBottom: "2.5em" }}>
          This showcases the apps that I have built, designed and deployed on my
          own. I generally find building front-end applications with React and
          deploying them on github pages to be the most interesting workflow and
          also demonstrates my interest in design.
        </div>
        {labData.map((data, i) => (
          <Lab {...data} key={i} />
        ))}
      </ContentContainer>
    </div>
  );
}
