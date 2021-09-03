import { useState, useEffect } from "react";
import Link from "next/link";

import colors from "../styles/colors";
import styled from "styled-components";

function Navigation() {
  const [manuScrolled, setMenuScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setMenuScrolled(true);
    }
    if (window.scrollY <= 70) {
      setMenuScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Root scrolled={manuScrolled ? "scrolled" : ""}>
      <NavbarContainer
        scrolled={manuScrolled ? "scrolled" : ""}
      ></NavbarContainer>
    </Root>
  );
}

export default Navigation;

const Root = styled.div(({ scrolled }) => ({
  zIndex: "999",
  position: "fixed",
  top: scrolled ? "0" : "100px",
  left: "0",
  width: "100%",
  height: scrolled ? "45px" : "75px",
  transition: "all 0.25s ease-out 0s",
}));

const NavbarContainer = styled.div(({ scrolled }) => ({
  display: "flex",
  margin: "auto",
  backgroundImage: `url("./assets/texture8.webp")`,
  backgroundSize: scrolled ? "70px 50px" : "90px 75px",
  backgroundPosition: "top",
  backgroundRepeat: "repeat-x",
  height: scrolled ? "45px" : "75px",
  width: scrolled ? "100%" : "80%",
  transition: "all 0.5s ease-out 0.5s",
  borderRadius: "2px",
  boxShadow:
    "rgba(111, 111, 111, 0.16) 0px 3px 6px,rgba(111, 111, 111, 0.23) 0px 3px 6px",
}));
