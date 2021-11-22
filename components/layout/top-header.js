import Image from "next/image";

import colors from "../../styles/colors";
import styled from "styled-components";

function TopHeader() {
  return (
    <Root>
      <Container>
        <Paragraph>patron</Paragraph>
        <Image
          data-aos="fade-up"
          src={"/assets/MOAK-logo.webp"}
          width={50}
          height={50}
        />
      </Container>
    </Root>
  );
}

export default TopHeader;

const Root = styled.header`
  z-index: 5;
  position: absolute;
  display: block;
  width: 100%;
  height: 55px;
  background-color: transparent;
  box-shadow: rgba(111, 111, 111, 0.16) 0px 3px 6px,
    rgba(111, 111, 111, 0.23) 0px 3px 6px;
`;

const Container = styled.div`
  display: flex;
`;

const Paragraph = styled.p`
  color: ${colors.mainFontColor};
`;
