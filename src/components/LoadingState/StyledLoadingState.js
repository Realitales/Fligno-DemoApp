import styled from "styled-components";

export default styled.div`
  position: relative;
  padding-top: 100px;
  width: 40px;
  margin: auto;

  .loading-text {
    font-family: var(--mfont);
    color: var(--lblue);
    text-transform: uppercase;
    position: absolute;
    font-weight: 800;
    font-size: 1.5rem;
    top: 7em;
    left: 70%;
    transform: translate(-50%, -50%);
    animation: fadeoutin 2500ms ease-in-out infinite;
  }
  .circle {
    position: absolute;
    width: 38px;
    height: 38px;
    opacity: 0;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: orbit;
    animation-duration: 5.5s;
  }
  .circle:after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background: var(--lblue);
  }
  .circle:nth-child(2) {
    animation-delay: 240ms;
  }
  .circle:nth-child(3) {
    animation-delay: 480ms;
  }
  .circle:nth-child(4) {
    animation-delay: 720ms;
  }
  .circle:nth-child(5) {
    animation-delay: 960ms;
  }
`;
