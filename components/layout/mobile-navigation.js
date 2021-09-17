import { useState } from "react";

import NavigationItem from "./navigation-items";

import { TiThMenuOutline, TiTimesOutline } from "react-icons/ti";
import links from "./links";
import { sizes } from "../../styles/breakpoints";
import styled from "styled-components";

function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Root>
      <BurgerMenu>
        <TiThMenuOutline onClick={handleMenuOpen} />
      </BurgerMenu>
      <NavContainer menuOpen={menuOpen}>
        <TiTimesOutline onClick={handleMenuOpen} />
        <NavItems>
          {links.map(({ id, url, title }) => (
            <NavigationItem key={id} url={url} title={title} />
          ))}
        </NavItems>
      </NavContainer>
    </Root>
  );
}

export default MobileNavigation;

const Root = styled.div`
  z-index: 99;
  overflow: "hidden";
  width: 100%;
  display: none;
  padding: 1rem;

  @media ${sizes.sm} {
    display: block;
  }
`;
const BurgerMenu = styled.div`
  font-size: 3rem;
  cursor: pointer;
  & svg {
    position: fixed;
  }
`;
const NavContainer = styled.div(({ menuOpen }) => ({
  zIndex: "99",
  backgroundColor: "white",
  backgroundImage: `url("./assets/mobile-nav-bg.png")`,
  backgroundPosition: "top",
  position: "fixed",
  fontSize: "3.5rem",
  marginTop: "40px",
  height: "75%",
  width: "100%",
  top: "0",
  left: !menuOpen ? "-100%" : "0",
  transition: "all 0.3s ease-out 0.2s",

  "& svg": {
    cursor: "pointer",
  },

  "@media (orientation: landscape)": {
    height: "100%",
  },
}));
const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 1rem;
`;
