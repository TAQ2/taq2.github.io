import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components/macro";

import { colours } from "../theme";

// @Cleanup - do we even need this file?

const StyledLink = styled(animated.button)`
  background-color: ${colours.primary};
  color: ${colours.secondary};
  border: 3px solid ${colours.secondaryLight};
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 1em;
  outline: 0;
`;

function Link({ children, onClick, style }) {
  const [isHovered, setIsHovered] = useState(false);

  const animation = useSpring({
    transform: `scale(${isHovered ? 1.05 : 1})`,
  });

  return (
    <StyledLink
      style={{ ...animation, ...style }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  );
}

export default Link;
