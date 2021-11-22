import Image from "next/image";

import styled from "styled-components";
import { colors } from "../styles/colors";
import { sizes } from "../styles/breakpoints";

function MainTop() {
  return (
    <Root>
      <ContentWrapper>
        <Title data-aos="fade-down" data-aos-once="false">
          lorem
        </Title>
        <Image
          data-aos="fade-up"
          data-aos-once="false"
          src={"/assets/pic/main-pic.webp"}
          height={360}
          width={360}
        />
      </ContentWrapper>
    </Root>
  );
}

export default MainTop;

const Root = styled.div`
  background-color: #0b0d12;
  width: 100%;
  height: 80vh;
  background-image: url("./assets/pic/003.webp");
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 18.2rem;
  box-shadow: rgba(111, 111, 111, 0.16) 0px 3px 6px,
    rgba(111, 111, 111, 0.23) 0px 3px 6px;

  @media ${sizes.sm} {
    margin-top: 25.9rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  @media ${sizes.sm} {
    flex-direction: column;
    padding-top: 5rem;
  }
`;

const Title = styled.h2`
  color: white;
`;
