import React from "react";
import "./greenRectangle.css";

export const GreenRectangle = () => {
  return (
    <>
      <div className="rectangle"></div>
      <img
        className="coin1 floating"
        style={{ top: "100px", left: "100px" }}
        src="/Assets/coin11.png"
      ></img>
      <img
        className="coin1 floating"
        style={{ top: "-40px", left: "100px" }}
        src="/Assets/coinDown.png"
      ></img>
      <img
        className="coin1 floating"
        style={{ width: "50px", left: "-50px" }}
        src="/Assets/coin11.png"
      ></img>
      <img
        className="coin1 floating"
        style={{ top: "-100px", left: "250px" }}
        src="/Assets/coin11.png"
      ></img>
    </>
  );
};
