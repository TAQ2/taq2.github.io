import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import { colours } from "./theme";
import ContentContainer from "./components/ContentContainer";

export default function ContactTile({ contactRef }) {
  return (
    <div
      style={{
        backgroundColor: colours.primary,
        paddingTop: "1.5em"
      }}
    >
      <ContentContainer style={{ textAlign: "center" }} ref={contactRef}>
        <div style={{ fontSize: "3em", marginBottom: "0.5em" }}>
          <a href="mailto:arjungupta2110@gmail.com">
            <AiOutlineMail fill="black" />
          </a>
          <a
            href="https://www.github.com/taq2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 1em" }}
          >
            <AiFillGithub fill="black" />
          </a>
          <a
            href="https://www.linkedin.com/in/arjun-gupta-440887184/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin fill="black" />
          </a>
        </div>
        <div style={{ fontSize: "1em" }}>
          Created By Arjun
          {" \u00A9" + new Date().getFullYear()}
        </div>
      </ContentContainer>
    </div>
  );
}
