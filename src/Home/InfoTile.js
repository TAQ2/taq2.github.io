import React from "react";
import Tile from "../components/Tile";

export default function InfoTile({ infoSectionRef }) {
  return (
    <Tile ref={infoSectionRef}>
      <div>hello</div>
    </Tile>
  );
}
