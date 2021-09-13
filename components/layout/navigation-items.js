import Link from "next/link";

import { sizes } from "../../styles/breakpoints";
import colors from "../../styles/colors";
import styled from "styled-components";

function NavigationItems({ url, title }) {
  return (
    <LinkContainer>
      <Link href={url}>
        <Item>{title}</Item>
      </Link>
    </LinkContainer>
  );
}

export default NavigationItems;

const LinkContainer = styled.li`
  display: flex;
  height: 100%;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style: none;
`;
const Item = styled.a`
  cursor: pointer;
  color: ${colors.mainFontColor};
  background-color: ${colors.mainDarkColor};
  font-size: 16px;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgb(0 0 0 /30%);
  transition: 0.35s ease-out 0.1s;

  &:hover {
    color: ${colors.mainDarkColor};
    background-color: ${colors.mainFontColor};
  }
`;
