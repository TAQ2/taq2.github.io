import React, { useState, useRef } from "react";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";

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

// @Cleanup - same as a div
const DrawerContainer = styled.div``;

export default function Name({
  summaryRef,
  skillsRef,
  experienceRef,
  portfolioRef,
  galleryRef,
  contactRef
}) {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const navigationRef = useRef(null);

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
        <Button onClick={handleClickNavItem(summaryRef)}>Summary</Button>
        <Button onClick={handleClickNavItem(skillsRef)}>Skills</Button>
        <Button onClick={handleClickNavItem(experienceRef)}>Experience</Button>
        <Button onClick={handleClickNavItem(portfolioRef)}>Portfolio</Button>
        {process.env.NODE_ENV === "development" && (
          <Button onClick={handleClickNavItem(galleryRef)}>Gallery</Button>
        )}
        <Button onClick={handleClickNavItem(contactRef)} isLast>
          Contact
        </Button>
      </ButtonContainer>
      <Icon onClick={() => setIsNavbarExpanded(!isNavbarExpanded)} />
      {isNavbarExpanded && (
        <DrawerContainer>
          <Button onClick={handleClickNavItem(summaryRef, true)}>
            Summary
          </Button>
          <Button onClick={handleClickNavItem(skillsRef, true)}>Skills</Button>
          <Button onClick={handleClickNavItem(experienceRef, true)}>
            Experience
          </Button>
          <Button onClick={handleClickNavItem(portfolioRef, true)}>
            Portfolio
          </Button>
          {process.env.NODE_ENV === "development" && (
            <Button onClick={handleClickNavItem(galleryRef, true)}>
              Gallery
            </Button>
          )}
          <Button onClick={handleClickNavItem(contactRef, true)}>
            Contact
          </Button>
        </DrawerContainer>
      )}
    </NavigationBar>
  );
}
