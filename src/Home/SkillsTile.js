import React from "react";
import styled from "styled-components";

import { ReactComponent as MindMap } from "../assets/my-skills-mindmap.svg";
import { ReactComponent as MindMapVertical } from "../assets/my-skills-mindmap-vertical.svg";
import Tile from "../components/Tile";
import { colours, screenBreakpoints } from "../theme";

const StyledMindMap = styled(MindMap)`
  display: flex;
  align-items: center;
  fill: ${colours.primary};
  stroke: ${colours.secondary};
  margin: 0 auto;
  padding-left: 50px;
  width: 100%;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    display: none;
  }

  @media (min-width: ${screenBreakpoints.tablet}px) {
    width: 90%;
    max-width: 1200px;
  }
`;

const StyledMindMapVertical = styled(MindMapVertical)`
  display: flex;
  align-items: center;
  fill: ${colours.primary};
  stroke: ${colours.secondary};
  margin: 0 auto;

  width: 100%;

  @media (min-width: ${screenBreakpoints.tablet}px) {
    display: none;
  }
`;

export default function SummaryTile() {
  return (
    <Tile
      colour="white"
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <StyledMindMap />
      <StyledMindMapVertical />
    </Tile>
  );
}
