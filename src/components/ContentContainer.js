import styled from "styled-components";

import { screenBreakpoints } from "../theme";

// @Cleanup - could this just be applied once, and then 100vh any titles

export default styled.div`
  margin: 0 auto;
  max-width: ${screenBreakpoints.maxContentWidth}px;

  padding-bottom: 1em;

  @media (max-width: ${screenBreakpoints.maxContentWidth}px) {
    margin: 0 5%;
  }

  @media (max-width: ${screenBreakpoints.small}px) {
    margin: 0 2%;
  }
`;
