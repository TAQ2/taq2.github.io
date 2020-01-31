import React, { useRef } from "react";

import LandingTile from "./LandingTile";
import SummaryTile from "./SummaryTile";
import ExperienceTile from "./ExperienceTile";
import SkillsTile from "./SkillsTile";

export default function Home() {
  const infoSectionRef = useRef(null);

  return (
    <>
      <LandingTile infoSectionRef={infoSectionRef} />
      <SummaryTile />
      <SkillsTile />
      <ExperienceTile infoSectionRef={infoSectionRef} />
    </>
  );
}
