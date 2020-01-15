import styled from "styled-components";

import { screenBreakpoints } from "../theme";

const Title = styled.div`
  font-size: 4em;
  font-weight: bold;

  @media (max-width: ${screenBreakpoints.small}px) {
    font-size: 3em;
  }
`;

export default Title;
