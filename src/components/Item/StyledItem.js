import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 70%;
  font-family: var(--mfont);
  z-index: 1;
  .item-content {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    img[product="true"] {
      width: 90%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    h1 {
      color: white;
      font-weight: 500;
      font-size: 1.5rem;
      text-transform: capitalize;
    }
    p {
      width: fit-content;
      color: var(--lblue);
      font-weight: 700;
      padding: 0.2em;
      font-size: 1rem;
      border-radius: 20px;
      background: linear-gradient(
        90deg,
        rgba(161, 255, 100, 1) 0%,
        rgba(194, 255, 214, 1) 100%
      );
    }

    #quantity-container {
      color: white;

      input {
        width: 15%;
        font-family: var(--mfont);
        font-weight: 700;
        border-radius: 5px;
        text-align: center;
      }
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    .item-btn-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      button {
        color: var(--lblue);
        font-weight: 700;
        font-family: var(--mfont);
        margin: 0.4em 0;
        font-size: 1.2rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
      }
      #item-addtocart {
        position: relative;
        background: linear-gradient(
          90deg,
          rgba(161, 255, 100, 0.7) 0%,
          rgba(194, 255, 214, 1) 100%
        );
        span {
          position: relative;
          bottom: 0.2em;
        }
      }
      #item-buynow {
        background-color: var(--dlblue);

        a {
          text-decoration: none;
          color: white;
        }
      }
      img {
        width: 1.5em;
        position: relative;
        top: 0.2em;
      }
    }
  }
`;
