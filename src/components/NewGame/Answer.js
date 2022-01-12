/* eslint-disable eqeqeq */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

export const Answer = (props) => {
  // for every button component, we add "onSubmitAnswerHandler" function so we can lift the state up
  const onSubmitAnswerHandler = (e) => {
    props.onSubmitAnswer(e.target.id);
  };
  let back = "";
  if (props.help == true && props.identifier == props.correct)
    back = "rgb(255, 193, 7)";

  return (
    <button
      id={props.identifier}
      type="button"
      className="btnAnsw"
      style={{
        marginLeft: "3%",
        marginRight: "1.5%",
        width: "100%",
        backgroundColor: back,
      }}
      value={props.answer}
      onClick={onSubmitAnswerHandler}
    >
      {props.answer}
    </button>
  );
};
