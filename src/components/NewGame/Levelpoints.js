/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

const Levelpoints = (props) => {
  let back = "";
  let font = "white";

  if (props.level - 1 == props.recentLevelToLevelpoints) {
    back = "yellow";
    font = "black";
  }

  return (
    <div
      className="flex-fill d-flex flex-row"
      style={{ backgroundColor: back, color: font }}
    >
      <div
        style={{
          fontFamily: "var(--font-family-Graphik)",
          width: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bolder",
          height: "100%",
        }}
      >
        {props.level}
      </div>
      &nbsp; &nbsp;
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bolder",
          fontFamily: "var(--font-family-Graphik)",
        }}
      >
        {" "}
        {props.points}
        <sup>pts</sup>
      </div>
    </div>
  );
};
export default Levelpoints;
