import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Labs from "./Labs";
import Gallery from "./Gallery";
import Footer from "./Footer";
import useIsScrollZero from "./hooks/useIsScrollZero";

export default function App() {
  const isScrollZero = useIsScrollZero();

  return (
    <>
      <Route path="/" exact>
        <Home />
        {!isScrollZero && <Footer isHomePage />}
      </Route>
      <Route path="/labs">
        <Labs />
        <Footer />
      </Route>
      <Route path="/gallery">
        <Gallery />
        <Footer />
      </Route>
    </>
  );
}
