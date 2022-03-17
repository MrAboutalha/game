/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

function SoundButton(props) {
  const [mute, setIsMute] = useState(false);
  const volumeHandler = () => {
    if (mute == false) {
      setIsMute(true);
      props.correctAnswerVar.volume = 0.0;
      props.wrongAnswerVar.volume = 0.0;
      props.suspenseSoundVar.volume = 0.0;
    } else {
      setIsMute(false);
      props.correctAnswerVar.volume = 1.0;
      props.wrongAnswerVar.volume = 1.0;
      props.suspenseSoundVar.volume = 1.0;
    }
  };
  return (
    <button
      type="button"
      className="btn  animate__animated animate__slideInRight btn-circle btn-md"
      id="volume"
      style={{
        backgroundColor: "#682481",
        color: "white",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10%",
      }}
      onClick={() => {
        volumeHandler();
        props.volumeHandler(mute);
      }}
    >
      {mute && <FaVolumeMute />}
      {!mute && <FaVolumeUp />}
    </button>
  );
}

export default SoundButton;
