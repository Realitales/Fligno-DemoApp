import React from "react";
import { Link } from "react-router-dom";
import StyledLandingPage from "./StyledLandingPage";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledLandingPage>
        <div className="LandingPage-desc">
          <h1>
            Game <br />
            Area
          </h1>
          <p>Get your Games, Get them Today.</p>
        </div>

        <Link to="/items">
          <button>
            <span>SHOP NOW </span>
            <img src="./icons/bag.svg" alt="" />
          </button>
        </Link>
      </StyledLandingPage>
    </motion.div>
  );
}
