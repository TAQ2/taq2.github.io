import React from "react";
import { useSpring, animated } from "react-spring";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

import { colours } from "./theme";

export default function Footer({ isHomePage }) {
  const animation = useSpring({
    transform: "scaleY(1)",
    from: {
      transform: "scaleY(0)"
    },
    delay: 200
  });

  return (
    <animated.div
      style={{
        width: "100%",
        backgroundColor: colours.primary,
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 15px",
        transformOrigin: "bottom",
        ...(isHomePage ? animation : {})
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <a
          href="mailto:arjungupta2110@gmail.com"
          style={{
            marginRight: 10,
            marginTop: 5
          }}
        >
          <AiOutlineMail fill="black" size={25} />
        </a>
        <a
          href="https://www.github.com/taq2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 5
          }}
        >
          <AiFillGithub fill="black" size={25} />
        </a>
      </div>
      <div>Created By Arjun {"\u00A9" + new Date().getFullYear()}</div>
    </animated.div>
  );
}
