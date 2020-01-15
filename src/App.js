import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Labs from "./Labs";
import Gallery from "./Gallery";

export default function App() {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/labs">
        <Labs />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
    </>
  );
}
