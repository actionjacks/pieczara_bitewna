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
  width: 100%;
  display: none;
  padding: 1rem;

  @media ${sizes.sm} {
    display: block;
    z-index: 99;
  }
`;

const BurgerMenu = styled.div`
  font-size: 3rem;
  padding-left: 2rem;
  padding-top: 2rem;

  & svg {
    z-index: 98;
    position: fixed;
    cursor: pointer;
    color: #fcd144;
  }
`;

const NavContainer = styled.div(({ menuOpen }) => ({
  "&": {
    zIndex: "99",
    position: "fixed",
    backgroundColor: "black",
    fontSize: "3.5rem",
    height: "100%",
    width: "100%",
    top: "0",
    left: !menuOpen ? "-100%" : "0",
    transition: "all 0.3s ease-out 0.2s",
    backgroundImage: `url("./assets/mobile-nav-bg-2.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  "& svg": {
    cursor: "pointer",
    margin: "2.5rem",
    color: "#fcd144",
  },

  "@media (orientation: landscape)": {
    height: "100%",
  },
}));
const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 20%;
  padding: 1rem;
`;
