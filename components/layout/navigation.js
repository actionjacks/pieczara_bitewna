import { useState, useEffect } from "react";
import NavigationItems from "./navigation-items";

import { sizes } from "../../styles/breakpoints";
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const DUMMY_LINKS = [
    {
      id: 1,
      url: "/1",
      title: "title1",
    },
    {
      id: 2,
      url: "/2",
      title: "title2",
    },
    {
      id: 3,
      url: "/3",
      title: "title3",
    },
    {
      id: 4,
      url: "/4",
      title: "title4",
    },
  ];

  return (
    <Root scrolled={manuScrolled ? "scrolled" : ""}>
      <NavContainer>
        <NavbarContainer scrolled={manuScrolled ? "scrolled" : ""}>
          <ItemContainer scrolled={manuScrolled ? "scrolled" : ""}>
            {DUMMY_LINKS.map(({ id, url, title }) => (
              <NavigationItems key={id} url={url} title={title} />
            ))}
          </ItemContainer>
        </NavbarContainer>
      </NavContainer>
    </Root>
  );
}

export default Navigation;

const Root = styled.div(({ scrolled }) => ({
  zIndex: "90",
  position: "fixed",
  top: scrolled ? "0" : "100px",
  left: "0",
  width: "100%",
  transition: "all 0.35s ease-out 0.1s",
}));
const NavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.35s ease-out 0.1s;

  @media ${sizes.sm} {
    display: none;
  }
`;
const NavbarContainer = styled.div(({ scrolled }) => ({
  display: "flex",
  backgroundImage: `url("./assets/texture10.webp")`,
  backgroundSize: "600px 75px",
  backgroundPosition: "top",
  backgroundRepeat: "repeat-x",
  height: scrolled ? "55px" : "75px",
  width: scrolled ? "100%" : "90%",
  margin: "auto",
  transition: "all 0.35s ease-out 0.1s",
}));
const ItemContainer = styled.ul(({ scrolled }) => ({
  display: "flex",
  width: "80%",
  alignItems: "center",
  justifyContent: !scrolled ? "space-between" : "flex-start",
}));
