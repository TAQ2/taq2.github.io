import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

import { colours } from "./theme";
import experienceData from "./experienceData";
import ContentContainer from "./components/ContentContainer";
import Title from "./components/Title";
import Tile from "./components/Tile";

export default function ExperienceTile() {
  return (
    <Tile>
      <Title style={{ backgroundColor: colours.primary }}>Experience</Title>
      <ContentContainer style={{ paddingBottom: "1em" }}>
        {experienceData.map((experience, i) => (
          <div key={i} style={{ marginBottom: "2em" }}>
            <div
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: colours.secondary
              }}
            >
              {experience.jobTitle}
            </div>
            <div
              style={{
                fontSize: "1.5em",
                color: colours.tertiary,
                marginBottom: "0.5em"
              }}
            >
              {experience.company}
            </div>
            <div style={{ marginBottom: "1em" }}>
              <FaRegCalendarAlt style={{ marginRight: "1em" }} />
              <span>{experience.from}</span> - <span>{experience.to}</span>
            </div>
            {experience.description && (
              <div style={{ fontWeight: "bold" }}>{experience.description}</div>
            )}
            <ul>
              {experience.bullets.map((bullet, i) => (
                <li
                  key={i}
                  style={{
                    lineHeight: "1.5em",
                    listStyleType: "square"
                  }}
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ContentContainer>
    </Tile>
  );
}
