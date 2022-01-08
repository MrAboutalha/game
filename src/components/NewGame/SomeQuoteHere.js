import React from "react";
import "./someQuoteHere.css";
import { FaTrophy } from "react-icons/fa";
export const SomeQuoteHere = (props) => {
  return (
    <div className="the-largest-communit">
      <h1 style={{ fontSize: "15px" }} className="the-largest-communit-1">
        {props.quote} &nbsp;
        <FaTrophy />
      </h1>
    </div>
  );
};
