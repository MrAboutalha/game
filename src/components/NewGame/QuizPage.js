/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./quizPage.css";
import { Answers } from "./Answers";

export const QuizPage = function ss(props) {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        <div
          style={{
            fontFamily: "var(--font-family-Graphik)",
            color: "white",
          }}
          className="timer"
        />
      );
    }

    return (
      <div className="timer">
        <div
          style={{
            fontSize: "110%",
            fontFamily: "var(--font-family-Graphik)",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          {remainingTime}
        </div>
        <div
          style={{
            color: "white",
            fontWeight: "lighter",
            fontFamily: "var(--font-family-GESSTwoBold)",
          }}
        >
          seconds
        </div>
      </div>
    );
  };
  let levelList = <h3>NAN</h3>;
  if (props.level.length > 0) {
    levelList = props.level.map((x) => (
      <div className="flex-fill d-flex flex-row">
        <div
          key={x.level}
          style={{
            fontFamily: "var(--font-family-Graphik)",

            width: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#50bb6b",
            color: "white",
            fontWeight: "bolder",
            height: "100%",
          }}
        >
          {x.level}
        </div>
        &nbsp; &nbsp;
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bolder",
            fontFamily: "var(--font-family-Graphik)",
          }}
        >
          {" "}
          {x.points}
          <sup>pts</sup>
        </div>
      </div>
    ));
  }

  return (
    <div className="container-fluid" style={{ height: "100%" }}>
      <div className="row " style={{ height: "100%" }}>
        <div className="col-2 d-flex justify-content-start">
          <div
            className="container nopadding d-flex flex-column animate__animated animate__slideInLeft"
            style={{ height: "90%" }}
          >
            <div
              className="d-flex flex-column flex-grow-1 glow"
              style={{
                fontSize: "80%",
                position: "relative",
                left: "12%",
                top: "5%",
              }}
            >
              {levelList}
            </div>{" "}
          </div>
        </div>
        <div className="col-8 d-flex justify-content-center">
          {" "}
          <div
            className="d-flex flex-column "
            style={{ height: "100%", width: "100%" }}
          >
            <div
              className="d-flex "
              style={{
                backgroundImage: "url(/Assets/back3.png)",
                backgroundSize: "cover",

                width: "100%",
                height: "47%",
                textAlign: "center",
                backgroundPosition: "0 0",
              }}
            />
            <div
              className="d-flex flex-column flex-fill align-items-start justify-content-start"
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                className="d-flex btnAnsw flex-row align-items-center  justify-content-center"
                style={{
                  width: "100%",
                  height: "50%",
                  background: "#16ad85",
                  borderRadius: "19px",
                  color: "white",
                  fontFamily: " var(--font-family-GESSTwoBold)",
                  borderColor: "white",
                  lineHeight: "300%",
                }}
              >
                {props.questionFromApp}{" "}
              </div>
            </div>
            <div
              className="d-flex flex-column justify-content-start align-items-center flex-fill animate__animated animate__backInUp"
              style={{ width: "100%" }}
            >
              <Answers answers={props.answersFromApp} className="" />
            </div>
          </div>
        </div>
        <div className="col-2">
          {" "}
          <div
            className="d-flex flex-column justify-content-center align-items-items"
            style={{ height: "100%" }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center animate__animated animate__slideInRight"
              style={{ height: "50%" }}
            >
              <CountdownCircleTimer
                size="100"
                strokeWidth="8"
                isPlaying
                duration={60}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => [true, 1000]}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>
            <div
              className="d-flex flex-column  justify-content-center align-items-items"
              style={{ height: "50%" }}
            >
              <button
                type="button"
                className="btn a btn-warning animate__animated animate__slideInRight btn-circle btn-md"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "10%",
                }}
              >
                <img src="/Assets/crowd.png" alt="crowd " width="60%" />
              </button>
              <button
                type="button"
                className="btn btn-warning animate__animated animate__slideInRight btn-circle btn-md"
                style={{
                  color: "#540e66",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                50:50
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuizPage;
