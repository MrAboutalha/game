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
  let rr = "#50bb6b";
  let checkPoint = "";
  let font = "white";
  if (props.level - 1 == props.recentLevelToLevelpoints) {
    back = "#ffc107";
    font = "black";
    rr = back;
  }

  if (props.recentLevelToLevelpoints > 3) {
    if (props.level == 4) {
      checkPoint = "#682481";
      rr = "";
    }
  }
  if (props.recentLevelToLevelpoints > 7) {
    if (props.level == 8) {
      checkPoint = "#682481";
      rr = "";
    }
  }

  if (props.recentLevelToLevelpoints > 11)
    if (props.level == 12) {
      checkPoint = "#682481";
      rr = "";
    }
  return (
    <div
      className="flex-fill d-flex flex-row"
      style={{ backgroundColor: back, color: font }}
    >
      <div
        className="flex-fill d-flex flex-row"
        style={{ backgroundColor: checkPoint, color: font }}
      >
        <div
          style={{
            fontFamily: "var(--font-family-Graphik)",
            width: "15%",
            display: "flex",
            backgroundColor: checkPoint,
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bolder",
            height: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-family-Graphik)",
              width: "100%",
              display: "flex",
              backgroundColor: rr,
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bolder",
              height: "100%",
            }}
          >
            {props.level}
          </div>{" "}
        </div>
        &nbsp; &nbsp;
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: checkPoint,
            fontWeight: "bolder",
            fontFamily: "var(--font-family-Graphik)",
          }}
        >
          {" "}
          {props.points}
          <sup>pts</sup>
        </div>
      </div>
    </div>
  );
};
export default Levelpoints;
