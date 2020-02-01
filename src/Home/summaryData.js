import React from "react";
import {
  FaBook,
  FaPencilAlt,
  FaLightbulb,
  FaGlobeAfrica,
  FaRegChartBar
} from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

export default [
  {
    title: "Broad Coding Experience",
    description:
      "I have used a wide array of technologies, primarily in the javascript ecosystem. Having a birds-eye view of the architecture allows quick adoption of codebases and workflows.",
    icon: FaBook
  },
  {
    title: "Business First Mentality",
    description:
      "The art of code is essential. But how computing can solve complex business problems to improve functionality, communication and profitability is much more interesting and important.",
    icon: FaRegChartBar
  },
  {
    title: "High Social Intelligence",
    description:
      "Always being conscious of communication and the level of detail I need to use when explaining concepts to members of any department. This allow me to fit firmly between developers and stakeholders.",
    icon: TiGroup
  },
  {
    title: "100% Self Taught",
    description:
      "After doing a degree in an unrelated field I changed career, taught myself to code and gained experience. Coming from a psychology background rather than computer science grants me an extra perspective.",
    icon: FaPencilAlt
  },
  {
    title: "Innovative",
    description:
      "I prototyped an app in my own time which was so well received that I was allocated resources to complete it. I worked closely with the directors to facilitate new features while incorporating my ideas.",
    icon: FaLightbulb
  },
  {
    title: "Socially Responsible",
    description: (
      <span>
        I attend meetups that use mapping tools to manually draw and label
        satellite images of areas in humanitarian crisis to improve logistics of
        aid. More info about the project{" "}
        <a
          href="https://www.missingmaps.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </span>
    ),
    icon: FaGlobeAfrica
  }
];
