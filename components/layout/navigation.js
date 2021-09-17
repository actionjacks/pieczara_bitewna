import { useState, useEffect } from "react";
import NavigationItem from "./navigation-items";

import links from "./links";
import { sizes } from "../../styles/breakpoints";
import styled from "styled-components";

function Navigation() {
  const [manuScrolled, setMenuScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 120) {
      setMenuScrolled(true);
    }
    if (window.scrollY <= 100) {
      setMenuScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Root scrolled={manuScrolled ? "scrolled" : ""}>
      <NavContainer>
        <NavbarContainer scrolled={manuScrolled ? "scrolled" : ""}>
          <ItemContainer scrolled={manuScrolled ? "scrolled" : ""}>
            {links.map(({ id, url, title }) => (
              <NavigationItem key={id} url={url} title={title} />
            ))}
          </ItemContainer>
        </NavbarContainer>
      </NavContainer>
    </Root>
  );
}

export default Navigation;

const Root = styled.div`
  z-index: 90;
  margin-top: 100px;
  width: 100%;
  transition: all 0.35s ease-out 0.1s;
  position: sticky;
  top: 0;

  @media ${sizes.sm} {
    display: none;
  }
`;
const NavContainer = styled.div`
  z-index: 90;
  transition: all 0.35s ease-out 0.1s;
`;
const NavbarContainer = styled.div(({ scrolled }) => ({
  display: "flex",
  //backgroundImage: `url("./assets/texture10.webp")`,
  backgroundSize: "600px 75px",
  backgroundPosition: "top",
  backgroundRepeat: "repeat-x",
  height: scrolled ? "55px" : "75px",
  width: scrolled ? "100%" : "90%",
  margin: "auto",
  transition: "all 0.35s ease-out 0.1s",

  boxShadow:
    "inset rgba(111, 111, 111, 0.16) 0px 3px 6px, rgba(111, 111, 111, 0.23) 0px 3px 6px",
}));
const ItemContainer = styled.ul(({ scrolled }) => ({
  display: "flex",
  width: "80%",
  alignItems: "center",
  justifyContent: !scrolled ? "space-between" : "flex-start",
}));
