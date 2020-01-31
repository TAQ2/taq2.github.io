import styled from "styled-components";

import { screenBreakpoints } from "../theme";

// @Incomplete - should this be on the landing tile as well?
// @Incomplete - should this handle margin top or should that be done by nav bar thing

export default styled.div`
  margin: 0 auto;
  max-width: ${screenBreakpoints.maxContentWidth}px;

  margin-bottom: 2em; // @Incomplete - only needed if there is a footer undereath this

  @media (max-width: ${screenBreakpoints.maxContentWidth}px) {
    margin: 0 5%;
  }

  @media (max-width: ${screenBreakpoints.small}px) {
    margin: 0 2%;
  }
`;
