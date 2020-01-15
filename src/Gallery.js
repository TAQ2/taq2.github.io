import React from "react";

import Title from "./components/Title";
import { colours } from "./theme";

export default function Gallery() {
  return (
    <div
      style={{
        color: colours.secondary,
        // backgroundColor: colours.primary,
        padding: "1em"
      }}
    >
      <Title
        style={{
          textAlign: "center",
          marginBottom: "1em"
        }}
      >
        Gallery
      </Title>
    </div>
  );
}
