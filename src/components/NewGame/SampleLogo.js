import React from "react";
import "./sampleLogo.css";
import { FaCopyright } from "react-icons/fa";
export const SampleLogo = (props) => {
  const { spanText, spanText2 } = props;
  return (
    <div className="sample-logo">
      <div className="overlap-group">
        <img className="union" src="../../assets/logo.png"></img>
      </div>
      <div className="photo valigan-text-middle comfortaa-bold-black-18px">
        <span>
          <span className="span0 comfortaa-bold-black-18px">{spanText}</span>
          <span className="span1">
            {spanText2}
            <FaCopyright></FaCopyright>
          </span>
        </span>
      </div>
    </div>
  );
};
