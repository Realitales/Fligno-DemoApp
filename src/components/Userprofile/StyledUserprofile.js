import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 9px;
  width: 20em;
  height: clamp(10em, 70vh, 27em);
  background-color: white;
  box-shadow: 10px 11px 101px -25px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: 10px 11px 101px -25px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 10px 11px 101px -25px rgba(0, 0, 0, 0.63);
  .userprofile-content {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    padding: 1em;

    font-family: var(--mfont);
    p {
      font-weight: 700;
      text-align: center;
    }
    #username {
      font-size: 1rem;
    }

    h1 {
      text-transform: uppercase;
      opacity: 60%;
      font-size: 1rem;
      font-weight: 800;
    }
    #user-profile-img {
      width: 100px;
      opacity: 100%;
      border-radius: 100px;
    }
  }

  .userprofile-basicInfo {
    margin-top: 1.5em;
    padding: 1em;
    border-radius: 10px;
    width: 250px;
    height: 200px;
    background-color: white;
    box-shadow: 2px 0px 28px 3px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: 2px 0px 28px 3px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 2px 0px 28px 3px rgba(0, 0, 0, 0.48);

    #userAddress-input {
      border-left: none;
      border-right: none;
      border-top: none;
      border-radius: 1px;
      font-family: var(--mfont);
      font-weight: 800;
      font-size: 0.95rem;
      margin: 1em 0;
      position: relative;
      left: 50%;
      transform: translate(-50%);
      text-align: center;
    }
    .details {
      font-size: 0.8rem;
      font-weight: 800;
    }
    #user-address {
      position: relative;
      top: -0.8em;
    }

    #setting-icon {
      width: 10%;
      position: absolute;
      right: 3.5em;
      transform: translateY(-0.5em);
      background: none;
      border: none;
      z-index: 1;
      img {
        width: 100%;
      }
    }
  }
  .settings-btn {
    margin-top: 0.5em;
    display: flex;
    gap: 0.5em;

    button {
      padding: 0.5em;
      border-radius: 1em;
      font-family: var(--mfont);
      text-transform: uppercase;
      font-weight: 800;
      cursor: pointer;
      background: none;
      border: none;
      background-color: yellow;
      color: rgba(0, 0, 0, 70%);
    }

    button[data="save"] {
      background: linear-gradient(
        90deg,
        rgba(161, 255, 100, 1) 0%,
        rgba(194, 255, 214, 1) 100%
      );
    }

    button[data="exit"] {
      color: white;
      padding: 0 1em;
      background-color: var(--lblue);
    }
  }
`;
