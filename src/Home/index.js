import React, { useRef } from "react";

import LandingTile from "./LandingTile";
import SummaryTile from "./SummaryTile";
import InfoTile from "./InfoTile";

export default function Home() {
  const infoSectionRef = useRef(null);

  return (
    <>
      <LandingTile infoSectionRef={infoSectionRef} />
      <SummaryTile />
      <InfoTile infoSectionRef={infoSectionRef} />
    </>
  );
}
