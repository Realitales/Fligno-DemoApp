import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 20em;
  height: 30em;

  h1 {
    font-family: var(--mfont);
    color: var(--lgreen);
    font-size: 1.8rem;
    text-align: right;
  }
  hr {
    width: 62%;
    height: 0.4em;
    margin-left: 37.5%;
    border-radius: 100px;
    background: linear-gradient(
      90deg,
      rgba(161, 255, 100, 1) 0%,
      rgba(194, 255, 214, 1) 100%
    );
    border: none;
  }
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    justify-content: center;
    margin-top: 1em;
    font-family: var(--mfont);
    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .item {
      margin-bottom: 1em;

      p {
        text-transform: capitalize;
        font-size: 1rem;
        color: white;
      }
      img {
        width: 100%;
      }
      span {
        color: var(--lblue);
        font-size: 0.8rem;
        font-weight: 700;
        padding: 0em 0.5em;
        border-radius: 50px;
        text-align: center;
        width: 65%;
        background: linear-gradient(
          90deg,
          rgba(161, 255, 100, 1) 0%,
          rgba(194, 255, 214, 1) 100%
        );
      }
    }
  }
`;
