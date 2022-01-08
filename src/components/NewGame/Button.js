import React from "react";
import "./button.css";
import { FaArrowRight } from "react-icons/fa";

export const Button = (props) => {
  return (
    <div className="button">
      <div>
        <button type="button" className="button button-glow">
          {props.label}
        </button>
      </div>
    </div>
  );
};
