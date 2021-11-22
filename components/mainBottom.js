import Image from "next/image";

import styled from "styled-components";
import { colors } from "../styles/colors";
import { sizes } from "../styles/breakpoints";

function MainBottom() {
  return (
    <Root>
      <ContentWrapper>
        <Title data-aos="fade-down" data-aos-once="false">
          lorem
        </Title>
      </ContentWrapper>
    </Root>
  );
}

export default MainBottom;

const Root = styled.div`
  background-color: #0b0d12;
  width: 100%;
  height: 100vh;
  background-image: url("./assets/pic/001.webp");
  background-position: center;
  background-repeat: no-repeat;
  /* margin-top: 18.2rem; */
  box-shadow: rgba(111, 111, 111, 0.16) 0px 3px 6px,
    rgba(111, 111, 111, 0.23) 0px 3px 6px;

  @media ${sizes.sm} {
    /* margin-top: 25.9rem; */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Title = styled.h3`
  color: white;
`;
