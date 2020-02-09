import React, { useState, useRef } from "react";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { animated, useSpring } from "react-spring";

import { colours, screenBreakpoints } from "./theme";

const NavigationBar = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colours.secondary};
  color: ${colours.primary};
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  z-index: 1;
  padding: 0.2em;
  padding-left: 2em;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    justify-content: end;
  }
`;

const Icon = styled(GoThreeBars)`
  cursor: pointer;
  font-size: 2em;
  @media (min-width: ${screenBreakpoints.tablet}px) {
    display: none;
  }
`;

const Button = styled.div`
  ${({ isLast }) => !isLast && "border-right: 1px solid " + colours.primary};
  padding: 5px 1em;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  overflow-y: scroll;
  @media (max-width: ${screenBreakpoints.tablet}px) {
    display: none;
  }
`;

export default function Name({ sections }) {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const navigationRef = useRef(null);

  const animation = useSpring({
    maxHeight: isNavbarExpanded ? "1000px" : "0px" // @Cleanup - 1000 is arbitary, does it need to be calculated?
  });

  const handleClickNavItem = (ref, isMobile) => () => {
    if (isMobile) {
      setIsNavbarExpanded(false);
    }

    window.scrollTo({
      top: ref.current.offsetTop - navigationRef.current.offsetHeight + 1,
      behavior: "smooth"
    });
  };

  return (
    <NavigationBar ref={navigationRef}>
      <ButtonContainer>
        {sections.map((section, i) => (
          <Button
            key={i}
            onClick={handleClickNavItem(section.ref)}
            isLast={i === sections.length - 1}
          >
            {section.title}
          </Button>
        ))}
      </ButtonContainer>
      <Icon onClick={() => setIsNavbarExpanded(!isNavbarExpanded)} />
      {isNavbarExpanded && (
        <animated.div style={animation}>
          {sections.map((section, i) => (
            <Button
              key={i}
              onClick={handleClickNavItem(section.ref, true)}
              isLast={false} // @Cleanup - isLast is bad naming
            >
              {section.title}
            </Button>
          ))}
        </animated.div>
      )}
    </NavigationBar>
  );
}
