import React, { useRef } from "react";

import Labs from "./Labs";
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
  const labsRef = useRef(null);
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
        labsRef={labsRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <SummaryTile summaryRef={summaryRef} />
      <SkillsTile skillsRef={skillsRef} />
      <ExperienceTile experienceRef={experienceRef} />
      <Labs labsRef={labsRef} />
      <Gallery galleryRef={galleryRef} />
      <ContactTile contactRef={contactRef} />
    </>
  );
}
