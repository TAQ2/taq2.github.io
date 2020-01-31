import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

import { colours } from "../theme";
import experienceData from "./experienceData";

// @Cleanup - does it make sense to use the content container and not the Tile component?
// When you navigate from the landing tile, because ContentContainer is not 100vh it looks weird
// should we just ignore the scroll and go to a new page
import ContentContainer from "../components/ContentContainer";
import Title from "../components/Title";

export default function InfoTile({ infoSectionRef }) {
  return (
    <ContentContainer ref={infoSectionRef}>
      <Title style={{ marginTop: "0.5em" }}>Experience</Title>
      {experienceData.map((experience, i) => (
        <div key={i}>
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
          <div
            style={{
              marginBottom: "1em"
            }}
          >
            <FaRegCalendarAlt style={{ marginRight: "1em" }} />
            <span>{experience.from}</span> - <span>{experience.to}</span>
          </div>
          {experience.description && (
            <div
              style={{
                fontWeight: "bold"
              }}
            >
              {experience.description}
            </div>
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
  );
}
