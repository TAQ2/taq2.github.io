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
      "I have extensive experience in a wide array of technologies, primarily in the javascript ecosystem. Working with a bird's-eye view of the architecture enables me to quickly adopt codebases and workflows.",
    icon: FaBook
  },
  {
    title: "Business First Mentality",
    description:
      "The art of code is essential. But how the web can solve complex business problems to improve functionality, communication and profitability is my focal point.",
    icon: FaRegChartBar
  },
  {
    title: "High Social Intelligence",
    description:
      "I understand and anticipate my client’s needs by simplifying complexity and communicating it in a way they understand. Meaning I can seamlessly work with developers and stakeholders.",
    icon: TiGroup
  },
  {
    title: "100% Self Taught",
    description:
      "Coming from a degree in a psychology background means that I have learned about human behaviour. Now that I have changed direction, taught myself to code and gained experience, I can apply all that I have learned into my work.",
    icon: FaPencilAlt
  },
  {
    title: "Innovative",
    description:
      "I prototyped an app in my own time which was so well received within the company that I was allocated resources to complete it. I worked closely with the directors to facilitate new features while incorporating my ideas.",
    icon: FaLightbulb
  },
  {
    title: "Socially Responsible",
    description: (
      <span>
        I regularly attend meetups that use mapping tools to manually draw and
        label satellite images of areas in humanitarian crisis to improve
        logistics of aid. More info about the project{" "}
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
