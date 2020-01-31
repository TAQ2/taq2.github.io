import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

import Link from "./components/Link";
import ContentContainer from "./components/ContentContainer";
import Title from "./components/Title";
import labData from "./labData";
import { colours, screenBreakpoints } from "./theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
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
  width: 100%;
  min-width: 300px;
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

export default function Labs() {
  return (
    <div style={{ color: colours.secondary }}>
      <Link
        to="/"
        style={{ position: "absolute", top: 5, left: 5, border: "unset" }}
      >
        <FaHome size={30} />
      </Link>
      <Title
        style={{
          backgroundColor: colours.primary,
          marginBottom: "0.5em"
        }}
      >
        Labs
      </Title>
      <ContentContainer>
        {labData.map((data, i) => (
          <Lab {...data} key={i} />
        ))}
      </ContentContainer>
    </div>
  );
}
