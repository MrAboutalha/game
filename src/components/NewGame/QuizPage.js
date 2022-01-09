/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const QuizPage = function ss(props) {
  let levelList = <h3>NAN</h3>;
  if (props.level.length > 0) {
    levelList = props.level.map((x) => (
      <div className="flex-fill">
        <div
          style={{
            width: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "green",
            height: "100%",
          }}
        >
          {x.level}
        </div>
      </div>
    ));
    // eslint-disable-next-line no-unused-vars
  }

  return (
    <div className="container-fluid" style={{ height: "100%" }}>
      <div className="row " style={{ height: "100%" }}>
        <div className="col-3 d-flex justify-content-start">
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
              className="d-flex flex-column flex-grow-1"
              style={{ marginTop: "10%" }}
            >
              {levelList}
            </div>{" "}
          </div>
        </div>
        <div className="col d-flex justify-content-center">ff</div>
        <div className="col-3 d-flex justify-content-center">
          {" "}
          <div className="container nopadding d-flex flex-column">
            <div className="row mb-auto  nopadding justify-content-center">
              ss
            </div>
            <div className="row nopadding justify-content-center">ss</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuizPage;
