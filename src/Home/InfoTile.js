import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

import { colours } from "../theme";
import Tile from "../components/Tile";
import experienceData from "./experienceData";

export default function InfoTile({ infoSectionRef }) {
  return (
    <Tile ref={infoSectionRef}>
      {experienceData.map(experience => (
        <div>
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
              color: colours.tertiary
            }}
          >
            {experience.company}
          </div>
          <div>
            <FaRegCalendarAlt style={{ marginRight: "1em" }} />
            <span>{experience.from}</span> - <span>{experience.to}</span>
          </div>
          <div
            style={{
              // color: colours.tertiary,
              fontWeight: "bold"
            }}
          >
            {experience.description}
          </div>
          <ul>
            {experience.bullets.map(bullet => (
              <li>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </Tile>
  );
}
