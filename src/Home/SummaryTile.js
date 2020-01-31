import React from "react";
import styled from "styled-components";

import ContentContainer from "../components/ContentContainer";
import Tile from "../components/Tile";
import { colours, screenBreakpoints } from "../theme";
import data from "./summaryData";

const Item = styled.div`
  width: 30%;
  margin-top: 5em;
  text-align: center;

  @media (max-width: ${screenBreakpoints.maxContentWidth}px) {
    width: 45%;
  }

  @media (max-width: ${screenBreakpoints.small}px) {
    width: 90%;
  }
`;

const StyledTile = styled(Tile)`
  display: flex;
  align-items: center;
  @media (max-width: ${screenBreakpoints.small}px) {
    height: unset;
    padding: 2em 1em;
  }
`;

export default function SummaryTile() {
  return (
    <StyledTile
      colour={colours.primary}
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <ContentContainer>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "-5em" // nullify the margin of items on the top row of the flex wrap
          }}
        >
          {data.map((item, i) => {
            return (
              <Item key={i}>
                <div>
                  <item.icon size={80} color={colours.secondary} />
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    margin: "1em 0"
                  }}
                >
                  {item.title}
                </div>
                <div>{item.description}</div>
              </Item>
            );
          })}
        </div>
      </ContentContainer>
    </StyledTile>
  );
}
