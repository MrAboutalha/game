import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./quizPage.css";

export const QuizPage = (props) => {
  useEffect(() => {
    // startTimer();
  }, []);
  let scoreContent = <div>NAN</div>;
  let scoreContent1 = <div>NAN</div>;

  if (props.level.length > 0) {
    scoreContent = props.level.map((x) => (
      <div
        style={{
          fontSize: "14px",
          color: "white",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {x.level}
      </div>
    ));

    scoreContent1 = props.level.map((x) => (
      <div style={{ fontSize: "14px", marginLeft: "0", marginRight: "auto" }}>
        {x.points}
        <sup>pts</sup>
      </div>
    ));
  }
  return (
    <div
      className="d-xxl-flex"
      style={{
        background: "radial-gradient(rgb(202 239 0) 10%, rgb(0 147 99) 100%)",
      }}
    >
      <div className="container">
        <div className="row" style={{ margin: "-207px -12px Opx" }}>
          <div
            className="col-md-4 d-flex flex-sm-row flex-md-column"
            style={{ minHeight: "97vh" }}
          >
            <div className="d-flex flex-md-column">
              <img
                src="/Assets/Logo.png"
                style={{ width: "150px" }}
                alt="logo"
              />
            </div>
            <div className="d-flex flex-row flex-sm-row">
              <div
                className="d-flex d-lg-flex justify-content-lg-start align-items-lg-start"
                style={{
                  flexDirection: "column",
                  background: "#50bb6b",
                }}
              >
                {scoreContent}
              </div>
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {scoreContent1}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" d-md-flex d-xxl-flex flex-grow-1 flex-shrink-0 justify-content-md-center align-items-md-start align-items-lg-start justify-content-xxl-center align-items-xxl-start">
              <img
                className="animate__animated animate__pulse animate__slow		 animate__infinite"
                src="/Assets/LeftSide.png"
                style={{
                  zIndex: "1",
                  width: "77px",
                  position: "relative",
                  left: "94px",
                }}
              />
              <img
                className="animate__animated animate__pulse animate__slow		 animate__infinite"
                src="/Assets/LL.png"
                style={{
                  top: "-54px",
                  width: "300px",
                  position: "relative",
                  zIndex: "2",
                }}
              />
              <img
                className="animate__animated animate__pulse animate__slow		 animate__infinite"
                src="/Assets/rightSide.png"
                style={{
                  width: "120px",
                  position: "relative",
                  zIndex: "1",
                  left: "-150px",
                }}
              />
            </div>
            <div className="d-xxl-flex flex-column flex-fill justify-content-end align-content-end justify-content-ccl-center align-items-xxl-center">
              <div
                className="d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center"
                style={{ margin: "-252px -78px -4px" }}
              >
                <img
                  src="/Assets/man.png"
                  style={{
                    left: "-45px",
                    width: "150px",
                    position: "relative",
                    zIndex: "3",
                  }}
                />
                <img
                  src="/Assets/woman.png"
                  style={{
                    width: "150px",
                    marginTop: "0",
                    marginRight: "0",
                    marginBottom: "0",
                    marginLeft: "10px",
                    position: "relative",
                    zIndex: "3",
                    left: "51px",
                  }}
                />
              </div>
              <div
                className="drop-shadow d-flex justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"
                style={{
                  marginTop: "-28px",
                  marginLeft: "-100px",
                  borderRadius: "11px",
                  background: "#16ad85",
                  position: "relative",
                  zIndex: "1999",
                  padding: "2px",
                  paddingLeft: "200px",
                  paddingRight: "200px",
                  border: "3px solid",
                  borderColor: "rgb(235,242,248)",
                }}
              >
                <span style={{ color: "white", whiteSpace: "nowrap" }}>
                  {" "}
                  شنو هي الرتبة لي حتل المنتخب في مونديال 98 ؟
                </span>
              </div>
            </div>
            <div
              style={{ whiteSpace: "nowrap" }}
              className="d-flex d-lg-flex d-xxl-flex justify-content-md-center justify-content-lg-center justify-content-xxl-center align-items-xxl-center"
            >
              <button
                className=" drop-shadow btn btn-primary d-flex d-xxl-flex flex-row justify-content-xxl-center align-items-xxl-center"
                type="button"
                style={{
                  margin: "17px",
                  marginRight: "28px",
                  padding:
                    "0px 60px 0px 60px" /*padding-left: 30px;*/ /*padding-right: 30px;*/,
                  borderRadius: "14px",
                  background: "#662483",
                  borderWidth: "3px",
                  borderColor: "#16ad85",
                }}
              >
                الرتبة 2
              </button>
              <button
                className=" drop-shadow btn btn-primary d-flex d-xxl-flex flex-row justify-content-xxl-center align-items-xxl-center"
                type="button"
                style={{
                  margin: "17px",
                  marginRight: "28px",
                  padding:
                    "0px 60px 0px 60px" /*padding-left: 30px;*/ /*padding-right: 30px;*/,
                  borderRadius: "14px",
                  background: "#662483",
                  borderWidth: "3px",
                  borderColor: "#16ad85",
                }}
              >
                الرتبة 2
              </button>
            </div>
            <div
              className="d-flex d-lg-flex d-xxl-flex justify-content-md-center justify-content-lg-center justify-content-xxl-center align-items-xxl-center"
              style={{ whiteSpace: "nowrap" }}
            >
              <button
                className="btn btn-primary d-flex d-xxl-flex flex-row justify-content-xxl-center align-items-xxl-center"
                type="button"
                style={{
                  margin: "17px",
                  marginRight: "28px",
                  padding:
                    "0px 60px 0px 60px" /*padding-left: 30px;*/ /*padding-right: 30px;*/,
                  borderRadius: "14px",
                  background: "#662483",
                  borderWidth: "3px",
                  borderColor: "#16ad85",
                }}
              >
                الرتبة 2
              </button>
              <button
                className="btn btn-primary d-flex d-xxl-flex flex-row justify-content-xxl-center align-items-xxl-center"
                type="button"
                style={{
                  margin: "17px",
                  marginRight: "28px",
                  padding:
                    "0px 60px 0px 60px" /*padding-left: 30px;*/ /*padding-right: 30px;*/,
                  borderRadius: "14px",
                  background: "#662483",
                  borderWidth: "3px",
                  borderColor: "#16ad85",
                }}
              >
                الرتبة 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
