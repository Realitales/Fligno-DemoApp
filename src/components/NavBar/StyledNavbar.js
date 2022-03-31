import styled from "styled-components";

export default styled.div`
  /*navbar-hamburger-btn */
  .navbar-hamburger-btn {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 1em;
    left: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 3;
    transform: scale(0.8);
  }
  .active-state > span:nth-of-type(2) {
    transform: translateX(0px) translateY(15px) rotate(50deg);
  }
  .active-state > span:nth-of-type(1) {
    transform: translateX(14px) translateY(-7px) rotate(-48deg);
  }
  .active-state > span:nth-of-type(3) {
    transform: translateX(5px) translateY(-8px) rotate(-48deg);
  }

  span {
    background-color: white;
    transition: ease-in-out 200ms;
  }
  span:nth-of-type(1) {
    border-radius: 10px;
    position: absolute;
    width: 75%;
    height: 8px;
    left: 0;
  }

  span:nth-of-type(2) {
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 8px;

    top: 10px;
  }

  span:nth-of-type(3) {
    border-radius: 10px;
    position: absolute;
    width: 60%;
    height: 8px;

    left: 0;
    bottom: 10px;
  }

  /*navbar-content */
  .navbar-content {
    a {
      text-decoration: none;
    }
    position: absolute;
    height: 100vh;
    top: 0;
    left: -15em;
    background: linear-gradient(90deg, #010b40, #151c60);
    box-shadow: 5px 7px 68px -10px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: 5px 7px 68px -10px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 5px 7px 68px -10px rgba(0, 0, 0, 0.64);
    padding-left: 1em;
    padding-right: 1.8em;
    z-index: 2;
    transition: ease-in-out 200ms;
    ul {
      list-style-type: none;
      margin-top: 100%;
      li {
        font-family: var(--mfont);
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
        text-transform: uppercase;
        margin-left: 0.5em;
        margin-bottom: 1em;
        cursor: pointer;
        img {
          width: 25px;
          margin-right: 0.6em;
        }
        #game-icon {
          position: relative;
          top: 0.2em;
        }
      }
      .logout-btn-container {
        margin-bottom: 3em;
        button {
          background: none;
          border: none;
          font-family: var(--mfont);
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 1.2rem;
        }
      }
      .bottom-bar {
        position: absolute;

        bottom: 1.5em;
      }
      .bottom-bar > img {
        position: relative;
        bottom: -0.15em;
      }
    }
  }
  .active {
    transition: ease-in-out 200ms;
    left: 0;
  }
`;
