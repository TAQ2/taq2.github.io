import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Labs from "./Labs";
import Gallery from "./Gallery";
import Footer from "./Footer";

function useIsScrollZero() {
  const [scrollY, setScrollY] = useState(window.scrollY === 0);

  useEffect(() => {
    const handleScroll = () => {
      if (true) {
        setScrollY(window.scrollY === 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

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
