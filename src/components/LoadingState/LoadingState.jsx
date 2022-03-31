import React from "react";
import StyledLoadingState from "./StyledLoadingState";

export default function LoadingState() {
  return (
    <StyledLoadingState>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <h1 className="loading-text">Loading...</h1>
    </StyledLoadingState>
  );
}
