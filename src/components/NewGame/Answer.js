/* eslint-disable eqeqeq */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";
import "./answers.css";

export const Answer = (props) => {
  const onSubmitAnswerHandler = (e) => {
    props.onSubmitAnswer(e.target.id);
  };
  let back = "";
  if (props.help == true && props.identifier == props.correct) {
    back = "rgb(255, 193, 7)";
  }
  if (props.flash && props.identifier == props.correct) {
    back = "correct";
  }
  if (props.flash && props.identifier == props.idChosen) {
    back = "wrong";
  }
  if (props.flash && props.identifier == props.correct) {
    back = "correct";
  }
  return (
    <button
      id={props.identifier}
      type="button"
      className={`btnAnsw ${back} answers`}
      style={{
        backgroundColor: back,
      }}
      value={props.answer}
      onClick={onSubmitAnswerHandler}
    >
      {props.answer}
    </button>
  );
};
