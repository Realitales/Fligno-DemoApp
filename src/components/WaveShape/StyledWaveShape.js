import styled from "styled-components";

export default styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10em;
  overflow: hidden;
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(./icons/wave.svg);
    background-size: 1000px 200px;
  }
  #wave1 {
    opacity: 0.8;
    animation: animateWave 3s linear infinite;
  }
  #wave2 {
    opacity: 0.6;
    animation: animateWave02 3s linear infinite;
  }
  #wave3 {
    opacity: 0.4;
    animation: animateWave 4s linear infinite;
  }
  #wave4 {
    opacity: 0.2;
    animation: animateWave02 4s linear infinite;
  }
`;
