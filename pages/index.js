import { useRef, useState } from "react";

import { TiMediaPlayOutline, TiMediaPauseOutline } from "react-icons/ti";
import { sizes } from "../styles/breakpoints";
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
      <video ref={vidRef} poster="/main_poster_vid.webp" muted loop>
        <source src="/main_vid.mp4" />
      </video>
      <PlayPauseBtn onClick={playPause}>
        {!btnPlay ? (
          <>
            <TiMediaPlayOutline />
            <h3>Play</h3>
          </>
        ) : (
          <>
            <TiMediaPauseOutline />
            <h3>Pause</h3>
          </>
        )}
      </PlayPauseBtn>
    </Root>
  );
}
const Root = styled.div`
  video {
    padding-top: 55px;
    position: absolute;
    background-color: black;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    width: 100%;
  }
`;
const PlayPauseBtn = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  font-size: 1.5rem;
  color: white;
  left: 55px;
  bottom: 55px;
`;
