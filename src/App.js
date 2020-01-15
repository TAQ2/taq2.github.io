import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";

export default function App() {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/labs">
        Labs how are we going to navigate back to other places
      </Route>
      <Route path="/gallery">Gallery</Route>
    </>
  );
}
