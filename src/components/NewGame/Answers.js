/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
import React from "react";

export const Answers = function ff(props) {
  const [ans0, ans1, ans2, ans3] = props.answers;
  const onSubmitAnswerHandler = (e) => {
    props.onSubmitAnswer(e.target.id);
  };
  return (
    <>
      <div className="d-flex flex-row" style={{ width: "100%" }}>
        <button
          id="0"
          type="button"
          className="btnAnsw"
          style={{
            marginLeft: "3%",
            marginRight: "1.5%",
            width: "100%",
          }}
          value={ans0}
          onClick={onSubmitAnswerHandler}
        >
          {ans0}
        </button>
        <button
          id="1"
          type="button"
          className="btnAnsw"
          style={{
            marginRight: "3%",
            marginLeft: "1.5%",
            width: "100%",
          }}
          onClick={onSubmitAnswerHandler}
          value={ans1}
        >
          {ans1}
        </button>
      </div>
      <div className="d-flex flex-row" style={{ width: "100%" }}>
        <button
          id="2"
          type="button"
          className="btnAnsw"
          style={{
            marginLeft: "3%",
            marginRight: "1.5%",
            marginTop: "2%",
            width: "100%",
          }}
          onClick={onSubmitAnswerHandler}
          value={ans2}
        >
          {ans2}
        </button>
        <button
          id="3"
          type="button"
          className="btnAnsw"
          style={{
            marginRight: "3%",
            marginLeft: "1.5%",
            marginTop: "2%",
            width: "100%",
          }}
          onClick={onSubmitAnswerHandler}
          value={ans3}
        >
          {ans3}
        </button>
      </div>
    </>
  );
};
