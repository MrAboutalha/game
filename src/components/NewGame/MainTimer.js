/* eslint-disable react/prop-types */
import React, { useState } from "react";
// !!COMPONENTS
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { ProgressBarLine } from "react-progressbar-line";

// !!STYLES

function MainTimer(props) {
  // !!HOOKS
  const { timeout, key } = props;
  const [sLeft, setSLeft] = useState("");
  // !! FUNCTIONS
  // RENDER TIME FORMATTER
  const renderTime = ({ remainingTime }) => {
    setSLeft(remainingTime);
    if (remainingTime === 0) {
      return <div />;
    }
    return (
      <div
        style={{
          fontSize: "var(--fontSize-medium)",
          fontWeight: "bolder",
          color: "var(--light-color)",
        }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center bigDevices">
          <div>{remainingTime}</div>
          <div style={{ fontSize: "var(--fontSize-small)" }}>
            {remainingTime > 1 && <>secondes</>}
            {remainingTime === 1 && <>seconde</>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="p-2 counterPosition bigDevices">
        <CountdownCircleTimer
          key={key}
          size="100"
          strokeWidth="8"
          isPlaying
          duration={60}
          colors={[["#682481"]]}
          onComplete={timeout}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div
        className="col-12 col-sm-2 col-md-2 smallDevices timerLine"
        style={{ padding: "0px" }}
      >
        <div
          style={{
            height: "fit-content",
            boxShadow:
              "rgb(125 214 84) 0px 0px 10px 15px, rgb(111 210 66) 0px 10px 100px 5px, rgb(206 227 60) 0px 0px 110px 15px",
          }}
        >
          <ProgressBarLine
            value={(sLeft * 100) / 60}
            min={0}
            max={100}
            strokeWidth={2}
            trailWidth={5}
            styles={{
              path: {
                stroke: "#42235c",
              },
              trail: {
                stroke: "#a7ff83",
              },
            }}
            text=" "
          />
        </div>
      </div>
    </>
  );
}

export default MainTimer;
