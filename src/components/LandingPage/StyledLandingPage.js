import styled from "styled-components";

export default styled.div`
  .LandingPage-desc {
    position: absolute;
    top: 15%;
    left: 10%;
    h1 {
      font-family: var(--mfont);
      color: white;
      font-weight: 800;
      line-height: 0.85em;
      position: relative;
      font-size: 4rem;
      text-transform: uppercase;
    }
    p {
      font-family: var(--mfont);
      color: white;
    }
  }

  button {
    border-radius: 100px;
    background: linear-gradient(
      90deg,
      rgba(161, 255, 100, 1) 0%,
      rgba(194, 255, 214, 1) 100%
    );
    border: none;
    width: 15em;
    padding: 1em 1.5em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    cursor: pointer;
    span {
      font-family: var(--mfont);
      font-weight: 900;
      font-size: 1.2rem;
      position: relative;
      bottom: 0.3em;
      color: #1b1464;
    }
    img {
      width: 30px;
    }
  }
`;
