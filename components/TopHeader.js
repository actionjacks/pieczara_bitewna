import colors from "../styles/colors";
import styled from "styled-components";

function TopHeader() {
  return (
    <Root>
      <div>loredddm</div>
    </Root>
  );
}

export default TopHeader;

const Root = styled.header`
  z-index: 2;
  display: block;
  width: 100%;
  height: 40px;
  background-color: ${colors.mainDarkColor};
  color: ${colors.whiteFontColor};
  box-shadow: rgba(111, 111, 111, 0.16) 0px 3px 6px,
    rgba(111, 111, 111, 0.23) 0px 3px 6px;
`;
const HeaderTopContainer = styled.div``;
