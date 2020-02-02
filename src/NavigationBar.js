import React, { useState } from "react";
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

const DrawerContainer = styled.div``;

export default function Name({
  summaryRef,
  skillsRef,
  experienceRef,
  labsRef,
  galleryRef,
  contactRef
}) {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const scrollToSection = (ref, isHack) => {
    // @Incomplete - offsetting by 200 on mobile
    window.scrollTo({
      top: isHack ? ref.current.offsetTop - 200 : ref.current.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <NavigationBar>
      <ButtonContainer>
        <Button onClick={() => scrollToSection(summaryRef)}>Summary</Button>
        <Button onClick={() => scrollToSection(skillsRef)}>Skills</Button>
        <Button onClick={() => scrollToSection(experienceRef)}>
          Experience
        </Button>
        <Button onClick={() => scrollToSection(labsRef)}>Labs</Button>
        <Button onClick={() => scrollToSection(galleryRef)}>Gallery</Button>
        <Button onClick={() => scrollToSection(contactRef)} isLast>
          Contact
        </Button>
      </ButtonContainer>
      <Icon onClick={() => setIsNavbarExpanded(!isNavbarExpanded)} />

      {isNavbarExpanded && (
        <DrawerContainer>
          <Button
            onClick={() => {
              setIsNavbarExpanded(false);
              scrollToSection(summaryRef, true);
            }}
          >
            Summary
          </Button>
          <Button
            onClick={() => {
              setIsNavbarExpanded(false);
              scrollToSection(skillsRef, true);
            }}
          >
            Skills
          </Button>
          <Button
            onClick={() => {
              setIsNavbarExpanded(false);
              scrollToSection(experienceRef, true);
            }}
          >
            Experience
          </Button>
          <Button
            onClick={() => {
              setIsNavbarExpanded(false);
              scrollToSection(labsRef, true);
            }}
          >
            Labs
          </Button>
          <Button
            onClick={() => {
              setIsNavbarExpanded(false);
              scrollToSection(galleryRef, true);
            }}
          >
            Gallery
          </Button>
          <Button
            onClick={() => {
              setIsNavbarExpanded(false);
              scrollToSection(contactRef, true);
            }}
          >
            Contact
          </Button>
        </DrawerContainer>
      )}
    </NavigationBar>
  );
}
