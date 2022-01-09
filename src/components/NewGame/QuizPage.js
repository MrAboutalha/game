/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { FaUsers } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./quizPage.css";

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
        >
          أنت متأخر جدا
        </div>
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
          key={x.points}
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
            className="container nopadding d-flex flex-column"
            style={{ height: "90%" }}
          >
            <div className="">
              <img
                className="animate__animated animate__wobble animate__infinite"
                src="/Assets/Logo.png"
                style={{
                  position: "relative",
                  top: "25%",
                  width: "90%",
                }}
                alt="coinSideLeftUp"
              />{" "}
            </div>
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
                backgroundImage: "url(/Assets/back.png)",
                backgroundSize: "cover",
                filter: "blur(0.5px)",
                width: "100%",
                height: "40%",
                textAlign: "center",
              }}
            />
            <div
              className="d-flex flex-fill align-items-end justify-content-center"
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                className="d-flex btnAnsw flex-row align-items-center animate__animated animate__pulse animate__infinite justify-content-center"
                style={{
                  width: "100%",
                  height: "50%",
                  background: "#16ad85",
                  borderRadius: "19px",
                  color: "white",
                  fontFamily: " var(--font-family-GESSTwoBold)",
                  borderColor: "white",
                }}
              >
                شنو هي الرتبة لي حتل المنتخب في مونديال 98 ؟
              </div>
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center flex-fill "
              style={{ width: "100%" }}
            >
              <div className="d-flex flex-row" style={{ width: "100%" }}>
                <button
                  type="button"
                  className="btnAnsw"
                  style={{
                    marginLeft: "3%",
                    marginRight: "1.5%",
                    width: "100%",
                  }}
                >
                  الرتبة 5
                </button>
                <button
                  type="button"
                  className="btnAnsw"
                  style={{
                    marginRight: "3%",
                    marginLeft: "1.5%",
                    width: "100%",
                  }}
                >
                  الرتبة 2
                </button>
              </div>
              <div className="d-flex flex-row" style={{ width: "100%" }}>
                <button
                  type="button"
                  className="btnAnsw"
                  style={{
                    marginLeft: "3%",
                    marginRight: "1.5%",
                    marginTop: "2%",
                    width: "100%",
                  }}
                >
                  الرتبة 5
                </button>
                <button
                  type="button"
                  className="btnAnsw"
                  style={{
                    marginRight: "3%",
                    marginLeft: "1.5%",
                    marginTop: "2%",
                    width: "100%",
                  }}
                >
                  الرتبة 1
                </button>
              </div>
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
                <FaUsers style={{ width: "100%", color: "#682481" }} />
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
