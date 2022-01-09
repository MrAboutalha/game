/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";

import { FaUsers } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./quizPage.css";

export const QuizPage = function ss(props) {
  let levelList = <h3>NAN</h3>;
  if (props.level.length > 0) {
    levelList = props.level.map((x) => (
      <div className="flex-fill d-flex flex-row">
        <div
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
            className="container nopadding d-flex flex-column"
            style={{ height: "90%" }}
          >
            <div className="">
              <img
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
              style={{ position: "relative", left: "12%", top: "5%" }}
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
              className="d-flex flex-fill "
              style={{ width: "100%", textAlign: "center" }}
            >
              ddd
            </div>
            <div
              className="d-flex flex-fill align-items-end justify-content-center"
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                className="d-flex btnAnsw flex-row align-items-center justify-content-center"
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
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ height: "50%" }}
            >
              <div id="countdown">ss</div>
            </div>
            <div
              className="d-flex flex-column  justify-content-center align-items-items"
              style={{ height: "50%" }}
            >
              <button
                type="button"
                className="btn btn-warning btn-circle btn-md"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "2%",
                }}
              >
                <FaUsers style={{ width: "100%", color: "#682481" }} />
              </button>
              <button
                type="button"
                className="btn btn-warning btn-circle btn-md"
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
