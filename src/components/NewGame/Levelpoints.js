/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState, useRef } from "react";
import "./levelPoints.css";

// Attach listener function on state changes
const Levelpoints = (props) => {
  let back = "";
  let rr = "rgb(112 210 67)";
  let checkPoint = "";
  // eslint-disable-next-line no-unused-vars
  const [labelhiden, setLabelhiden] = useState(false);
  let font = "white";
  const [widtH, setWidtH] = useState("80px");
  const avancement = useRef();
  const a = window.matchMedia("(max-width: 575px)");

  if (props.level - 1 == props.recentLevelToLevelpoints) {
    back = "rgb(94, 29, 147)";
    font = "white";
    rr = back;
  }

  if (props.recentLevelToLevelpoints > 3) {
    if (props.level == 4) {
      checkPoint = "rgb(27 173 132)";
      rr = "";
    }
  }
  if (props.recentLevelToLevelpoints > 7) {
    if (props.level == 8) {
      checkPoint = "rgb(27 173 132)";
      rr = "";
    }
  }

  if (props.recentLevelToLevelpoints > 11)
    if (props.level == 12) {
      checkPoint = "rgb(27 173 132)";
      rr = "";
    }

  const myFunction = (x) => {
    if (x.matches && props.level - 1 == props.recentLevelToLevelpoints) {
      setWidtH("175px");
      setLabelhiden(true);
      setTimeout(() => {
        avancement.current.scrollIntoView({
          behavior: "instant",
          inline: "center",
        });
      }, 1000);
      checkPoint = "blue";
      // if (avancement) avancement.current.style.display = "flex";
    } else {
      setWidtH("80px");
      setLabelhiden(false);
      // if (avancement) avancement.current.style.display = "none";
    }
  };
  useEffect(() => {
    myFunction(a);
    // if (avancement !== undefined)
    a.addListener(myFunction);
  }, [props.level, props.recentLevelToLevelpoints]);

  // a.addListener(myFunction);
  return (
    <div
      className="flex-fill d-flex flex-row sizeBox"
      style={{ backgroundColor: back, color: font, width: widtH }}
    >
      <div
        className="flex-fill d-flex orderStyle"
        style={{ backgroundColor: checkPoint, color: font }}
      >
        <div
          style={{
            // fontFamily: "var(--font-family-Graphik)",
            // width: "15%",
            // display: "flex",
            backgroundColor: checkPoint,
            // alignItems: "center",
            // justifyContent: "center",
            // fontWeight: "bolder",
            // height: "100%",
          }}
          className="levelContainer"
        >
          <div
            className="hideLevel"
            style={{
              // fontFamily: "var(--font-family-Graphik)",
              // width: "100%",
              // display: "flex",
              backgroundColor: rr,
              // alignItems: "center",
              // justifyContent: "center",
              // fontWeight: "bolder",
              // height: "100%",
            }}
          >
            {/* <div ref={avancementTrophy}>
              <RiTrophyLine size={15} color="white" />
            </div> */}
            {props.level}
          </div>{" "}
        </div>
        <div className="hidebaby">&nbsp; &nbsp;</div>
        <div
          className="scoreLabel"
          style={{
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            backgroundColor: checkPoint,
            // fontWeight: "bolder",
            // fontFamily: "var(--font-family-Graphik)",
          }}
        >
          {" "}
          {props.points}
          <sup>pts</sup>
        </div>
        {labelhiden === true && (
          <div
            ref={avancement}
            className="scoreLabel"
            style={{
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",

              backgroundColor: "rgb(66 34 92)",
              // fontWeight: "bolder",
              color: "white",
              fontFamily: "Cairo",
            }}
          >
            المستوى الحالي{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default Levelpoints;
