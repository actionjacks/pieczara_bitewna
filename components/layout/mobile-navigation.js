import { useState } from "react";

import NavigationItems from "./navigation-items";

import links from "./links";
import { sizes } from "../../styles/breakpoints";
import styled from "styled-components";

function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {links.map(({ id, url, title }) => (
        <NavigationItems key={id} url={url} title={title} />
      ))}
    </div>
  );
}

export default MobileNavigation;
