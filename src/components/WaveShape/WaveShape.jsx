import React from "react";
import StyledWaveShape from "./StyledWaveShape";

export default function WaveShape() {
  return (
    <StyledWaveShape>
      <div className="waves-container">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
    </StyledWaveShape>
  );
}
