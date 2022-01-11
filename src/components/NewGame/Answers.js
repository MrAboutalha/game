/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
import React from "react";

export const Answers = function ff(props) {
  const [ans1, ans2, ans3, ans4] = props.answers;

  return (
    <>
      <div className="d-flex flex-row" style={{ width: "100%" }}>
        <button
          id="button1"
          type="button"
          className="btnAnsw"
          style={{
            marginLeft: "3%",
            marginRight: "1.5%",
            width: "100%",
          }}
          value={ans1}
        >
          {ans1}
        </button>
        <button
          type="button"
          className="btnAnsw"
          style={{
            marginRight: "3%",
            marginLeft: "1.5%",
            width: "100%",
          }}
          value={ans2}
        >
          {ans2}
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
          value={ans3}
        >
          {ans3}
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
          value={ans4}
        >
          {ans4}
        </button>
      </div>
    </>
  );
};
