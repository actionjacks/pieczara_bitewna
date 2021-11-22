import Image from "next/image";

import colors from "../../styles/colors";
import styled from "styled-components";

function Footer() {
  return (
    <Root>
      <ContentWrapper>
        <Image
          data-aos="fade-up"
          src={"/assets/pieczara-logo-xs.webp"}
          width={100}
          height={100}
        />
      </ContentWrapper>
    </Root>
  );
}

export default Footer;

const Root = styled.header`
  background-color: #0b0d12;
  width: 100%;
  height: 24rem;
  box-shadow: rgba(111, 111, 111, 0.16) 0px 3px 6px,
    rgba(111, 111, 111, 0.23) 0px 3px 6px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  div {
    img {
      border-radius: 50%;
      box-shadow: rgba(111, 111, 111, 0.16) 0px 1px 1px,
        rgba(111, 111, 111, 0.23) 0px 1px 6px;
    }
  }
`;
