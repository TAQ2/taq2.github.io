import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { colours } from "../theme";

// @Cleanup - is link the correct name?
// @Cleanup - move to components

const StyledLink = styled(animated.div)`
  background-color: ${colours.primary};
  color: ${colours.secondary};
  border: 5px solid ${colours.secondaryDark};
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
`;

function Link({ children, onClick, history, to, style }) {
  const [isHovered, setIsHovered] = useState(false);

  const animation = useSpring({
    transform: `scale(${isHovered ? 1.05 : 1})`
  });

  const updateHistory = () => history.push(to);

  return (
    <StyledLink
      style={{ ...animation, ...style }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={onClick || updateHistory}
    >
      {children}
    </StyledLink>
  );
}

// use with router so that we don't need to restyle the a tag that comes with the rr Link component
export default withRouter(Link);
