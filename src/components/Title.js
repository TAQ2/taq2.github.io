import styled from "styled-components";

import { screenBreakpoints, colours } from "../theme";

const Title = styled.div`
  font-size: 4em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5em;
  padding: 0.2em 0;

  color: ${colours.secondary};
  @media (max-width: ${screenBreakpoints.small}px) {
    font-size: 3em;
  }
`;

export default Title;
