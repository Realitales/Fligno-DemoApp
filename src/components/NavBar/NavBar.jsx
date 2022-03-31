import React from "react";
import { Link } from "react-router-dom";
import { useAuth, logout } from "../../firebase";
import StyledNavbar from "./StyledNavbar";

export default function Navbar() {
  const [isNavbarVisible, setNavbarVisible] = React.useState(false);

  const currentUserFirebase = useAuth();

  const currentUser = currentUserFirebase?.email;

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <StyledNavbar>
      <div
        className={
          isNavbarVisible == true
            ? "navbar-hamburger-btn active-state"
            : "navbar-hamburger-btn"
        }
        onClick={() => {
          setNavbarVisible((prev) => !prev);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={
          isNavbarVisible == true ? "navbar-content active" : "navbar-content "
        }
      >
        <ul>
          <Link to="/">
            <li>
              <img src="./icons/home.svg" alt="" />
              Home
            </li>
          </Link>
          <Link to="/Items">
            <li>
              <img id="game-icon" src="./icons/games.svg" alt="" />
              Games
            </li>
          </Link>
          {currentUser === undefined ? (
            ""
          ) : (
            <li className="logout-btn-container bottom-bar">
              <Link to="/login">
                <button onClick={handleLogout}>
                  <img src="./icons/logout.svg" alt="" />
                  Logout
                </button>
              </Link>
            </li>
          )}

          <li className="about-btn bottom-bar">
            <img src="./icons/info-button.svg" alt="" />
            About
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
}
