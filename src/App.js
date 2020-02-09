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
  const summaryRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <LandingTile
        onClick={() => {
          window.scrollTo({
            top: summaryRef.current.offsetTop,
            left: 0,
            behavior: "smooth"
          });
        }}
      />
      <NavigationBar
        summaryRef={summaryRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        portfolioRef={portfolioRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <SummaryTile summaryRef={summaryRef} />
      <SkillsTile skillsRef={skillsRef} />
      <ExperienceTile experienceRef={experienceRef} />
      <Portfolio portfolioRef={portfolioRef} />
      {process.env.NODE_ENV === "development" && (
        <Gallery galleryRef={galleryRef} />
      )}
      <ContactTile contactRef={contactRef} />
    </>
  );
}
