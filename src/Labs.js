import React from "react";
import { FaGithub } from "react-icons/fa";

import Title from "./components/Title";
import labData from "./labData";
import { colours } from "./theme";
import meImg from "./assets/me.jpg";

function Lab({ name, img, description, githubLink, appLink }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "2em"
      }}
    >
      <div
        style={{
          width: "30%",
          minHeight: "400px"
        }}
      >
        <img
          src={meImg}
          alt={name}
          style={{
            maxHeight: 300,
            maxWidth: 300,
            height: "auto",
            width: "auto"
          }}
          href={appLink}
        />
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            fontSize: "2em",
            fontWeight: "bold",
            marginBottom: "1em"
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%"
          }}
        >
          <div>{description}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <a href={appLink} target="_blank" rel="noopener noreferrer">
              View
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
        </div>
      </div>
    </div>
  );
}

export default function Labs() {
  return (
    <div style={{ color: colours.secondary }}>
      {/* <Link to="/" style={{ width: 95, position: "fixed", top: 40, left: 20 }}>
        {"<< Back"}
      </Link> */}

      <Title
        style={{
          backgroundColor: colours.primary,
          // borderRadius: 10,
          marginBottom: "0.5em"
        }}
      >
        Labs
      </Title>

      <div
        style={{
          margin: "0 10%"
        }}
      >
        {labData.map((data, i) => (
          <Lab {...data} key={i} />
        ))}
      </div>
    </div>
  );
}
