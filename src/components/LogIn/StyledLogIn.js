import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 9px;
  width: 20em;
  height: clamp(10em, 60vh, 25em);
  background-color: white;
  box-shadow: 10px 11px 101px -25px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: 10px 11px 101px -25px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 10px 11px 101px -25px rgba(0, 0, 0, 0.63);

  .Login-Content {
    padding: 3em 2em;
    font-family: var(--mfont);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .error-text {
      margin-top: 0;
      color: var(--errorcolor);
    }
    h1 {
      opacity: 0.7;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1.3rem;
      width: 80%;
    }
    hr {
      width: 90%;

      background-color: rgba(0, 0, 0, 20%);
      height: 0.1em;
      color: black;
      border: 1px rgba(0, 0, 0, 10%) solid;
      border-radius: 6px;
    }
    form {
      margin-top: 1.7em;
      input {
        margin-bottom: 2.3em;
        width: 90%;
        height: 3em;
        font-family: var(--mfont);
        font-weight: 800;
        font-size: 0.8rem;
        border: 1px rgba(0, 0, 0, 40%) solid;
        border-radius: 10px;
        padding-top: 1em;
        padding-bottom: 1em;
        padding-left: 3em;
        outline: none;
        -moz-box-shadow: inset 0 0 5px #000000;
        -webkit-box-shadow: inset 0 0 5px #000000;
        box-shadow: inset 0 0 5px #000000;
      }
      input::-webkit-input-placeholder {
        font-size: 0.7rem;
      }
      input::-moz-placeholder {
        font-size: 0.7rem;
      }
      input:-ms-input-placeholder {
        font-size: 0.7rem;
      }
      input:-moz-placeholder {
        font-size: 0.7rem;
      }

      input[type="Username"] {
        background: url(./icons/userLogin.svg) no-repeat left;
        background-size: 20px;
        background-position-x: 10px;
      }
      input[type="Password"] {
        background: url(./icons/padlock.svg) no-repeat left;
        background-size: 20px;

        background-position-x: 10px;
      }
    }
    #login-btn {
      font-family: var(--mfont);
      font-weight: 800;
      font-size: 1rem;
      width: 90%;
      border-radius: 50px;
      padding: 0.2em 0;
      outline: none;
      border: none;
      color: rgba(0, 0, 0, 60%);
      background: rgb(161, 255, 100);
      cursor: pointer;
      margin-top: 1.5em;
      background: linear-gradient(
        90deg,
        rgba(161, 255, 100, 1) 0%,
        rgba(194, 255, 214, 1) 100%
      );
    }
    span {
      margin-top: 1.3em;
      font-weight: 800;
      color: rgba(0, 0, 0, 60%);
      font-size: 0.85rem;
    }
  }
`;
