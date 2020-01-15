import React from "react";
import { FaGithub } from "react-icons/fa";

import Title from "./components/Title";
import data from "./labData";
import { colours } from "./theme";
import meImg from "./assets/me.jpg";

function Lab({ name, img, description, githubLink, appLink }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "2em"
      }}
    >
      <img
        src={meImg}
        alt={name}
        style={{
          maxHeight: 300,
          maxWidth: 300
        }}
        href={appLink}
      />
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <div
          style={{
            display: "flex"
          }}
        >
          <a href={appLink}>View</a>
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
      </div>
    </div>
  );
}

export default function Labs() {
  return (
    <div
      style={{
        color: colours.secondary,
        // backgroundColor: colours.primary,
        padding: "1em"
      }}
    >
      <Title
        style={{
          textAlign: "center",
          marginBottom: "1em"
        }}
      >
        Labs
      </Title>
      {data.map((dat, i) => (
        <Lab {...dat} key={i} />
      ))}
    </div>
  );
}
