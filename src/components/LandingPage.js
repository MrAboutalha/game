/* eslint-disable react/forbid-prop-types */
import React from "react";
import { PropTypes } from "prop-types";

// !!IMAGES
import fourCoinsLeft from "../assets/images/leftSide2.png";
import glowBg from "../assets/images/glow-bg2.png";
import coinDown from "../assets/images/coinDown.png";
import glow from "../assets/images/glow.png";
import coin11 from "../assets/images/coin11.png";
import shine from "../assets/images/shine.png";
import logo1 from "../assets/images/logo1.png";
import rightSide from "../assets/images/rightSide.png";

// !!ANIMATION_NAMES
import {
  pulseAnimation,
  flipAnimation,
  fadeInAnimation,
  wobbleAnimation,
  fadeInDownAnimation,
} from "../assets/dummyData/animationNames";

function LandingPage(props) {
  const { startPlayingHandler } = props;
  return (
    <div className="d-flex justify-content-center align-items-center height100">
      <div className="container-fluid">
        <div className="mainContainer row">
          <div className="col-1 col-md-1 p-0 m-0 col-lg-1 d-flex justify-content-start ">
            <div className="container p-0 m-0 d-none d-md-flex  flex-column ">
              <div className="row mb-auto p-0 m-0">
                <img
                  src={coinDown}
                  className={`${wobbleAnimation} delayed_8 beneath relative`}
                  style={{
                    left: "100%",
                    top: "30%",
                    transform: "rotate(35deg)",
                  }}
                  alt=""
                />
                <img
                  src={glow}
                  className={`${wobbleAnimation} delayed_8 onTop relative blur_10`}
                  style={{
                    left: "100%",
                  }}
                  alt=""
                />
              </div>
              <div className="row p-0 m-0">
                <img
                  src={glow}
                  className="beneath relative blur_10"
                  style={{
                    left: "150%",
                    top: "-10%",
                  }}
                  alt=""
                />
                <img
                  src={coin11}
                  className="onTop relative"
                  style={{
                    width: "70%",
                    top: "-51%",
                    left: "150%",
                    transform: "rotate(35deg)",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-2 col-sm-2 col-md-2 p-0 m-0 col-lg-2 d-flex justify-content-end ">
            <img
              src={glow}
              className={`${pulseAnimation} glowCoinsLeftSide relative`}
              alt=""
            />
            <img
              src={fourCoinsLeft}
              className={`${pulseAnimation} coinsLeftSide relative`}
              alt=""
            />
          </div>
          <div className="col-6 col-sm-6 col-md-6 p-0 m-0 col-sm-4 col-lg-6 d-flex justify-content-center">
            <img src={shine} className={`${flipAnimation} shine`} alt="" />
            <img
              src={glowBg}
              className={`${fadeInAnimation} glowLogo1 relative`}
              alt=""
            />
            <img
              src={logo1}
              className="animate__animated animate__backInDown logo1 relative"
              alt="logo"
            />
          </div>
          <div className="col-2  col-sm-2 col-md-2 p-0 m-0 col-lg-2 d-flex justify-content-start">
            <img
              src={glow}
              className={`${pulseAnimation} glowCoinsRightSide relative`}
              alt=""
            />
            <img
              src={rightSide}
              className={`${pulseAnimation} coinsRightSide relative`}
              alt=""
            />
          </div>
          <div className="col-1  col-sm-1 col-md-1 p-0 m-0 col-lg-1 d-flex justify-content-start">
            <div className="container p-0 m-0 d-none d-md-flex flex-column">
              <div className="row mb-auto  p-0 m-0">
                <img
                  src={glow}
                  className={`${wobbleAnimation} delayed_6 blur_10 relative`}
                  style={{
                    left: "-144%",
                    height: "150%",
                    width: "150%",
                    top: "100%",
                  }}
                  alt=""
                />
                <img
                  className={`${wobbleAnimation} delayed_6 relative`}
                  src={coin11}
                  style={{
                    width: "70%",
                    left: "-130%",
                    transform: "rotate(35deg)",
                  }}
                  alt=""
                />
              </div>
              <div className="row p-0 m-0s">
                <img
                  src={glow}
                  className="beneath blur_10 relative"
                  style={{
                    left: "-80%",
                    top: "30%",
                  }}
                  alt=""
                />
                <img
                  className="onTop relative"
                  src={coin11}
                  style={{
                    top: "-22%",
                    left: "-70%",
                    transform: "rotate(227deg)",
                    width: "60px",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={startPlayingHandler}
            className={`btnStart ${fadeInDownAnimation}`}
          >
            ابدأ اللعب
          </button>
        </div>
      </div>
    </div>
  );
}
LandingPage.propTypes = {
  startPlayingHandler: PropTypes.any.isRequired,
};
export default LandingPage;
