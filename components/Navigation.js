import { useState, useEffect } from "react";
import Link from "next/link";

import colors from "../styles/colors";
import styled from "styled-components";

function Navigation() {
  const [manuScrolled, setMenuScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setMenuScrolled(true);
      console.log(manuScrolled);
    }
    if (window.scrollY <= 50) {
      setMenuScrolled(false);
      console.log(manuScrolled);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Root scrolled={manuScrolled ? "scrolled" : ""}>
      <NavbarContainer></NavbarContainer>
      <Test color="red"></Test>
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
  height: "73px",
}));
const NavbarContainer = styled.div`
  display: flex;
  margin: auto;
  background-color: black;
  height: 73px;
  width: 80%;
`;
const Test = styled.div(({ color }) => ({
  color: color,
}));
