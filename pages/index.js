import { useRef, useState } from "react";
import Image from "next/image";
import MainTop from "../components/mainTop";
import MainBottom from "../components/mainBottom";
import logo from "../public/assets/pieczara-logo-xs.webp";

import { TiMediaPlayOutline, TiMediaPauseOutline } from "react-icons/ti";
import styled from "styled-components";

export default function Home() {
  const [btnPlay, setBtnPlay] = useState(null);
  const vidRef = useRef(null);

  const playPause = () => {
    if (vidRef.current.paused) {
      vidRef.current.play();
      setBtnPlay("played");
    } else {
      vidRef.current.pause();
      setBtnPlay(null);
    }
  };

  return (
    <Root>
      <MainContainer>
        <LogoContainer show={btnPlay}>
          <Image src={logo} alt="logo" width={120} height={120} />
          <h1 data-aos="fade-down">TITLE</h1>
          <p data-aos="fade-up">lorem</p>
        </LogoContainer>
        <video ref={vidRef} poster="/main_poster_vid.webp" muted loop>
          <source src="/assets/vid/Lord_of_the_Steel_Souls_Revealed.mp4" />
        </video>
        <PlayPauseBtn onClick={playPause}>
          {!btnPlay ? (
            <>
              <TiMediaPlayOutline />
              <h3 data-aos="fade-up" data-aos-once="false">
                Play
              </h3>
            </>
          ) : (
            <>
              <TiMediaPauseOutline />
              <h3 data-aos="fade-up" data-aos-once="false">
                Pause
              </h3>
            </>
          )}
        </PlayPauseBtn>

        <MainTop />
        <MainBottom />
      </MainContainer>
    </Root>
  );
}

const Root = styled.div`
  video {
    padding-top: 55px;
    position: absolute;
    background-color: black;
    object-fit: cover;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
    width: 100%;
    box-shadow: rgba(111, 111, 111, 0.16) 0px 3px 6px,
      rgba(111, 111, 111, 0.23) 0px 3px 6px;
  }
`;

const MainContainer = styled.main`
  z-index: 2;
  background-color: #0b0d12;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div(({ show }) => ({
  zIndex: "2",
  opacity: !show ? "1" : "0",
  padding: "0 1rem 2rem 1rem",
  textAlign: "center",
  transition: "1s",

  "& h1": {
    width: "fit-content",
    color: "#fcd144",
    backgroundColor: "#0b0d12",
    marginLeft: "auto",
    marginRight: "auto",
  },

  "& p": {
    width: "fit-content",
    color: "#fcd144",
    backgroundColor: "#0b0d12",
    marginLeft: "auto",
    marginRight: "auto",
  },

  "& div": {
    borderRadius: "50%",
    boxShadow:
      "rgba(111, 111, 111, 0.16) 0px 3px 6px, rgba(111, 111, 111, 0.23) 0px 3px 6px",
  },
}));

const PlayPauseBtn = styled.div`
  z-index: 2;
  display: flex;
  cursor: pointer;
  position: absolute;
  font-size: 1.5rem;
  color: white;
  left: 55px;
  bottom: 55px;
`;

//data-aos="fade-up" data-aos-once="false"
