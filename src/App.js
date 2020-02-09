import React, { useRef } from "react";

import Portfolio from "./Portfolio";
import Gallery from "./Gallery";
import ContactTile from "./ContactTile";
import NavigationBar from "./NavigationBar";

import LandingTile from "./LandingTile";
import SummaryTile from "./SummaryTile";
import ExperienceTile from "./ExperienceTile";
import SkillsTile from "./SkillsTile";

export default function App() {
  const sections = [
    {
      component: SummaryTile,
      title: "Summary",
      ref: useRef(null)
    },
    {
      component: SkillsTile,
      title: "Skills",
      ref: useRef(null)
    },
    {
      component: ExperienceTile,
      title: "Experience",
      ref: useRef(null)
    },
    {
      component: Portfolio,
      title: "Portfolio",
      ref: useRef(null)
    },
    // {
    //   component: Gallery,
    //   title: "Gallery",
    //   ref: useRef(null)
    // },
    {
      component: ContactTile,
      title: "Contact",
      ref: useRef(null)
    }
  ];

  return (
    <>
      <LandingTile
        onClick={() => {
          window.scrollTo({
            top: sections[0].ref.current.offsetTop,
            left: 0,
            behavior: "smooth"
          });
        }}
      />
      <NavigationBar sections={sections} />
      {sections.map((section, i) => (
        <div ref={section.ref} key={i}>
          <section.component />
        </div>
      ))}
    </>
  );
}
