/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { Answer } from "./Answer";

export const Answers = function ff(props) {
  const onSubmitAnswerHandler = (e) => {
    props.onSubmitAnswer(e);
  };
  const firstHalf = [...props.answers];
  const secondHalf = [...props.answers];
  firstHalf.pop();
  firstHalf.pop();
  secondHalf.shift();
  secondHalf.shift();

  const theTwoFirstAnswers = firstHalf.map((x) => (
    <Answer
      key={x.id}
      identifier={x.id}
      answer={x.value}
      correct={props.correctAnswr}
      onSubmitAnswer={onSubmitAnswerHandler}
      help={props.helpCrowd}
    />
  ));
  const theTwoLastAnswers = secondHalf.map((x) => (
    <Answer
      key={x.id}
      identifier={x.id}
      answer={x.value}
      correct={props.correctAnswr}
      onSubmitAnswer={onSubmitAnswerHandler}
      help={props.help}
    />
  ));

  if (props.helpFifty == true) {
    const indices = ["0", "1", "2", "3"];
    let filteredAry = indices.filter((e) => e != props.correctAnswr);
    console.log("FILTRED", filteredAry);
    const first = filteredAry[Math.floor(Math.random() * filteredAry.length)];
    filteredAry = filteredAry.filter((e) => e != first);
    const second = filteredAry[Math.floor(Math.random() * filteredAry.length)];
    document.getElementById(second).style.backgroundColor = "#AA0000";
    document.getElementById(first).style.backgroundColor = "#AA0000";
  }
  return (
    <>
      <div className="d-flex flex-row" style={{ width: "100%" }}>
        {theTwoFirstAnswers}
      </div>{" "}
      <div className="d-flex flex-row" style={{ width: "100%" }}>
        {theTwoLastAnswers}
      </div>
    </>
  );
};
