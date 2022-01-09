import React, { useState } from "react";
import "./App.css";
import { QuizPage } from "./components/NewGame/QuizPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

export function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const startPlayingHandler = () => {
    setIsPlaying(true);
  };

  let array = [
    { id: "l1", level: "1", points: "100" },
    { id: "l2", level: "2", points: "200" },
    { id: "l3", level: "3", points: "100" },
    { id: "l4", level: "4", points: "200" },
    { id: "l5", level: "5", points: "500" },
    { id: "l6", level: "6", points: "600" },
    { id: "l7", level: "7", points: "700" },
    { id: "l8", level: "8", points: "800" },
    { id: "l9", level: "9", points: "900" },
    { id: "l10", level: "10", points: "1000" },
    { id: "l11", level: "11", points: "1100" },
    { id: "l12", level: "12", points: "1200" },
    { id: "l13", level: "13", points: "1300" },
    { id: "l14", level: "14", points: "1400" },
    { id: "l15", level: "15", points: "1500" },
  ];
  array = array.reverse();
  return (
    <>
      {!isPlaying && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-1  col-sm-1 col-md-1 nopadding col-lg-1 d-flex justify-content-start">
                <div className="container nopadding d-flex flex-column">
                  {" "}
                  <div className="row mb-auto  nopadding">
                    <img
                      src="/Assets/coinDown.png"
                      style={{
                        position: "relative",
                        left: "100%",
                        zIndex: "2",
                        top: "100%",
                        transform: "rotate(35deg)",
                      }}
                      alt="coinSideLeftUp"
                    />{" "}
                    <img
                      src="/Assets/glow.png"
                      className="animate__animated animate__pulse animate__infinite"
                      style={{
                        position: "relative",
                        left: "100%",
                        top: "73%",
                        zIndex: "1",
                        filter: "blur(7px)",
                      }}
                      alt="coinSideLeftUp"
                    />
                  </div>
                  <div className="row nopadding">
                    <img
                      src="/Assets/glow.png"
                      className="animate__animated animate__pulse animate__infinite"
                      style={{
                        position: "relative",
                        left: "240%",
                        top: "-10%",
                        filter: "blur(5px)",
                      }}
                      alt="coinSideLeftUp"
                    />
                    <img
                      src="/Assets/coin11.png"
                      style={{
                        width: "70%",
                        position: "relative",
                        top: "-51%",
                        left: "240%",
                        transform: "rotate(35deg)",
                      }}
                      alt="coinSideLeftUp"
                    />
                  </div>
                </div>
              </div>
              <div className="col-2 col-sm-2 col-md-2 nopadding col-lg-2 d-flex justify-content-end">
                <img
                  src="/Assets/glow.png"
                  className="animate__animated animate__pulse animate__infinite"
                  style={{
                    position: "relative",
                    left: "170%",
                    width: "120%",
                    height: "68%",
                    top: "49px",
                    filter: "blur(10px)",
                  }}
                  alt="coinSideLeftUp"
                />
                <img
                  src="/Assets/leftSide.png"
                  className="animate__animated animate__pulse animate__infinite"
                  style={{
                    position: "relative",
                    left: "87%",
                    width: "88%",
                    height: "65%",
                    top: "16%",
                  }}
                  alt="leftSide"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-6 nopadding col-sm-4 col-lg-6 d-flex justify-content-center">
                <img
                  src="/Assets/shine.png"
                  className="animate__animated animate__rotateIn animate__infinite"
                  style={{
                    width: "15%",
                    height: "20%",
                    position: "relative",
                    zIndex: "3",
                    top: "29%",
                    left: "117%",
                    mixBlendMode: "lighten",
                  }}
                  alt="shineLogo
                  "
                />{" "}
                <img
                  src="/Assets/glow-bg.png"
                  className="animate__animated animate__fadeIn"
                  style={{
                    position: "relative",
                    width: "105%",
                    left: "27%",
                    height: "94%",
                  }}
                  alt="coinSideLeftUp"
                />
                <img
                  src="/Assets/logo1.png"
                  className="animate__animated animate__flip"
                  style={{
                    width: "70%",
                    height: "44%",
                    position: "relative",
                    top: "28%",
                    left: "-58%",
                  }}
                  alt="logo"
                />
              </div>
              <div className="col-2  col-sm-2 col-md-2 nopadding col-lg-2 d-flex justify-content-start">
                <img
                  src="/Assets/glow.png"
                  className="animate__animated animate__pulse animate__infinite"
                  style={{
                    position: "relative",
                    left: "-80%",
                    height: "70%",
                    width: "150%",
                    top: "10%",
                    filter: "blur(10px)",
                  }}
                  alt="coinSideLeftUp"
                />
                <img
                  src="/Assets/rightSide.png"
                  className="animate__animated animate__pulse animate__infinite"
                  style={{
                    position: "relative",
                    left: "-290%",
                    height: "75%",
                    top: "13%",
                    width: "150%",
                  }}
                  alt="rightSide"
                />
              </div>
              <div className="col-1  col-sm-1 col-md-1 nopadding col-lg-1 d-flex justify-content-start">
                <div className="container nopadding d-flex flex-column">
                  {" "}
                  <div className="row mb-auto  nopadding">
                    <img
                      src="/Assets/glow.png"
                      className="animate__animated animate__pulse animate__infinite"
                      style={{
                        position: "relative",
                        left: "-144%",
                        height: "150%",
                        width: "150%",
                        top: "100%",
                        filter: "blur(5px)",
                      }}
                      alt="coinSideLeftUp"
                    />
                    <img
                      src="/Assets/coin11.png"
                      style={{
                        width: "70%",
                        position: "relative",
                        left: "-130%",
                        transform: "rotate(35deg)",
                      }}
                      alt="coinSideLeftUp"
                    />
                  </div>
                  <div className="row nopadding">
                    <img
                      src="/Assets/glow.png"
                      className="animate__animated animate__pulse animate__infinite"
                      style={{
                        position: "relative",
                        left: "-80%",
                        top: "30%",
                        zIndex: "2",
                        filter: "blur(8px)",
                      }}
                      alt="coinSideLeftUp"
                    />
                    <img
                      src="/Assets/coin11.png"
                      style={{
                        top: "-24%",
                        position: "relative",
                        left: "-115%",
                        transform: "rotate(-15deg)",
                        zIndex: 1,
                      }}
                      alt="coinSideLeftUp"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 nopadding d-flex justify-content-center">
                <button
                  type="button"
                  onClick={startPlayingHandler}
                  className="btnStart animate__animated animate__fadeInDown"
                >
                  ابدأ اللعب
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
      {isPlaying && <QuizPage level={array} />}
    </>
  );
}

export default App;
