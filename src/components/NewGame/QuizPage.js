/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import currentWeekNumber from "current-week-number";
import currentDayNumber from "current-day-number";
import { BsArrowRepeat } from "react-icons/bs";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "bootstrap/dist/css/bootstrap.min.css";
import correctAnswer from "../../assets/correctAnswer1.mp3";
import wrongAnswer from "../../assets/wrongAnswer.mp3";
import suspense from "../../assets/backGround.mp3";
import "./quizPage.css";
import { Answers } from "./Answers";
import Levelpoints from "./Levelpoints";

export const QuizPage = function ss(props) {
  // _______________________________________ SoundsEffects

  // _____HeartBeat Sound
  const [suspenseSoundVar, setSuspenseSoundVar] = useState(new Audio(suspense));
  // _____HeartBeat Sound

  // _____CorrectAnswer Sound
  const [correctAnswerVar, setCorrectAnswerVar] = useState(
    new Audio(correctAnswer)
  );
  // _____CorrectAnswer Sound

  // _____WrongAnswer Sound
  const [wrongAnswerVar, setWrongAnswerVar] = useState(new Audio(wrongAnswer));
  // _____WrongAnswer Sound

  // _______________________________________ SoundsEffects

  // entries
  const [answers, setAnswers] = useState([]);
  const [msg, setMsg] = useState("");
  const [helpCrowd, setHelpCrowd] = useState(false);
  const [helpFifty, setHelpFifty] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [key, setKey] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [isBlock, setIsBlock] = useState(false);

  const [mute, setIsMute] = useState(false);
  const level = props.recentLevel;
  let indexRandom;
  // START__Timer
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        <div
          style={{
            fontFamily: "var(--font-family-Graphik)",
            color: "white",
          }}
          className="timer"
        />
      );
    }

    return (
      <div className="timer">
        <div
          style={{
            fontSize: "110%",
            fontFamily: "var(--font-family-Graphik)",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div>{remainingTime}</div>
            <div style={{ fontSize: "70%" }}>
              {remainingTime > 1 && <>secondes</>}
              {remainingTime == 1 && <>seconde</>}
            </div>
          </div>
        </div>
      </div>
    );
  };
  // END__Timer

  //  START__Levels
  let levelList = <h3>NAN</h3>;
  if (props.level.length > 0) {
    levelList = props.level.map((x) => (
      <Levelpoints
        key={x.id}
        level={x.level}
        points={x.points}
        recentLevelToLevelpoints={props.recentLevel}
      />
    ));
  }
  // END__Levels

  // START__Function to add to the localStorage the current question
  const localStorageSetQuestionAlreadyChosen = (questionComposedId) => {
    const entryModified = questionComposedId + "/";
    if (localStorage.getItem("QuestionAlreadyChosen") != null) {
      localStorage.setItem(
        "QuestionAlreadyChosen",
        localStorage.getItem("QuestionAlreadyChosen") + entryModified
      );
    } else {
      localStorage.setItem("QuestionAlreadyChosen", entryModified);
    }
  };
  // END__Function to add to the localStorage the current question

  // START__Function to check whether a subQuestion for a single main question has already been presented and suggest a new one
  const localStorageCheckForQuestionIfItWasAlreadyChosen = (levelEntry) => {
    let i;

    const unViewedQuestionsArray = [];
    if (localStorage.getItem("QuestionAlreadyChosen") != null) {
      const questionsStored = localStorage
        .getItem("QuestionAlreadyChosen")
        .split("/");
      for (i = 0; i < 4; i += 1) {
        let j;
        for (j = 0; j < questionsStored.length; j += 1) {
          if (questionsStored[j] == levelEntry + "" + i) {
            break;
          }
        }
        if (j >= questionsStored.length) {
          unViewedQuestionsArray.push(levelEntry + "" + i);
        }
      }
      let newVal = "";
      if (unViewedQuestionsArray.length == 0) {
        for (let w = 0; w < 4; w += 1) {
          newVal = localStorage
            .getItem("QuestionAlreadyChosen")
            .replace(levelEntry + "" + w + "/", "");
          localStorage.setItem("QuestionAlreadyChosen", newVal);
          indexRandom = Math.floor(Math.random() * 4);
        }
        localStorageSetQuestionAlreadyChosen(levelEntry + "" + indexRandom);
        setAnswers(props.suggestedQuestions[indexRandom].content);
        setQuestion(props.suggestedQuestions[indexRandom].question);
        setAnswer(props.suggestedQuestions[indexRandom].correct);
      } else {
        indexRandom = Math.floor(Math.random() * unViewedQuestionsArray.length);
        localStorageSetQuestionAlreadyChosen(
          unViewedQuestionsArray[indexRandom]
        );
        setAnswers(
          props.suggestedQuestions[
            parseInt(unViewedQuestionsArray[indexRandom], 10) % 10
          ].content
        );
        setQuestion(
          props.suggestedQuestions[
            parseInt(unViewedQuestionsArray[indexRandom] % 10, 10)
          ].question
        );
        setAnswer(
          props.suggestedQuestions[
            parseInt(unViewedQuestionsArray[indexRandom] % 10, 10)
          ].correct
        );
      }
    } else {
      indexRandom = Math.floor(Math.random() * 4);
      localStorageSetQuestionAlreadyChosen(levelEntry + "" + indexRandom);
      setAnswers(props.suggestedQuestions[indexRandom].content);
      setQuestion(props.suggestedQuestions[indexRandom].question);
      setAnswer(props.suggestedQuestions[indexRandom].correct);
    }
  };
  // END__Function to check whether a subQuestion for a single main question has already been presented and suggest a new one

  // START__Function to check whether a specific track is playing
  function isPlaying(audelem) {
    return !audelem.paused;
  }
  // END__Function to check whether a specific track is playing

  // START__Hook to pause the heartbeat soundEffect
  useEffect(() => {
    if (!isPlaying(correctAnswerVar) && !isPlaying(wrongAnswerVar)) {
      suspenseSoundVar.play();
    } else {
      suspenseSoundVar.pause();
    }
  }, [key, level]);
  // END__Hook to pause the heartbeat soundEffect
  useEffect(() => {
    if (localStorage.getItem("Crowd") == "true")
      document.getElementById("crowd").disabled = true;
    if (localStorage.getItem("FiftyUsed") == "true")
      document.getElementById("fifty").disabled = true;
    const firstDayWePlayTheLevel = localStorage.getItem("actualDay");
    const DayWeGainCheckPoint = localStorage.getItem("actualWeek");

    const hasPlayed = localStorage.getItem("recentLevel");
    if (hasPlayed) {
      if (
        firstDayWePlayTheLevel &&
        (localStorage.getItem("hasEnterTheGame") === "true" || hasPlayed != 0)
      ) {
        if (
          level == "4" ||
          level == "8" ||
          level == "8" ||
          level == "12" ||
          level == "12"
        )
          if (
            parseInt(new Date().getTime(), 10) -
              parseInt(DayWeGainCheckPoint, 10) <=
            120000
          ) {
            setIsBlock(true);
            setMsg(
              "لقد وصلت إلى الحد الأقصى لعدد نقاط التفتيش لديك وهو نقطة تفتيش واحدة في الأسبوع"
            );
          } else {
            setIsBlock(false);
          }
        else if (
          parseInt(new Date().getTime(), 10) -
            parseInt(firstDayWePlayTheLevel, 10) <=
          60000
        ) {
          setIsBlock(true);
          setMsg(
            "لقد وصلت إلى الحد الأقصى لعدد الأسئلة للإجابة وهو سؤال واحد في اليوم يرجى العودة غدًا"
          );
          correctAnswerVar.volume = 0.0;
          wrongAnswerVar.volume = 0.0;
          suspenseSoundVar.volume = 0.0;
        } else {
          setIsBlock(false);
        }
      }
    }
    localStorageCheckForQuestionIfItWasAlreadyChosen(props.recentLevel);
  }, [level]);

  const onSubmitAnswerHandler = (submitedAnswer) => {
    correctAnswerVar.volume = 0.0;
    wrongAnswerVar.volume = 0.0;
    suspenseSoundVar.volume = 0.0;
    if (submitedAnswer == answer) {
      setIsWrong(false);
      correctAnswerVar.currentTime = 0;
      correctAnswerVar.play();
      setHelpCrowd(false);
      setHelpFifty(false);
      props.onSubmitLevel(props.recentLevel);
      document.getElementById("0").style.backgroundColor = "";
      document.getElementById("1").style.backgroundColor = "";
      document.getElementById("2").style.backgroundColor = "";
      document.getElementById("3").style.backgroundColor = "";
      document.getElementById("0").disabled = false;
      document.getElementById("1").disabled = false;
      document.getElementById("2").disabled = false;
      document.getElementById("3").disabled = false;
      setKey((prevKey) => prevKey + 1);
    } else {
      wrongAnswerVar.play();
      setIsWrong(true);
      setHelpCrowd(false);
      setHelpFifty(false);
      setKey((prevKey) => prevKey + 1);
      correctAnswerVar.volume = 0;
      document.getElementById("0").style.backgroundColor = "";
      document.getElementById("1").style.backgroundColor = "";
      document.getElementById("2").style.backgroundColor = "";
      document.getElementById("3").style.backgroundColor = "";
      document.getElementById("0").disabled = false;
      document.getElementById("1").disabled = false;
      document.getElementById("2").disabled = false;
      document.getElementById("3").disabled = false;
    }
  };

  const onResetHandler = () => {
    setIsWrong(false);
    setKey((prevKey) => prevKey + 1);
    setHelpCrowd(false);
    setHelpFifty(false);
    props.onReset(props.recentLevel);
  };
  const goCrowdHandler = () => {
    localStorage.setItem("Crowd", true);
    setHelpCrowd(true);
    document.getElementById("crowd").disabled = true;
  };
  const goFiftyHandler = () => {
    localStorage.setItem("FiftyUsed", true);
    setHelpFifty(true);
    document.getElementById("fifty").disabled = true;
  };
  const timeout = () => {
    setIsWrong(true);
    wrongAnswerVar.play();
  };
  const volumeHandler = () => {
    if (mute == false) {
      setIsMute(true);
      correctAnswerVar.volume = 0.0;
      wrongAnswerVar.volume = 0.0;
      suspenseSoundVar.volume = 0.0;
    } else {
      setIsMute(false);
      correctAnswerVar.volume = 1.0;
      wrongAnswerVar.volume = 1.0;
      suspenseSoundVar.volume = 1.0;
    }
  };
  return (
    <div className="container-fluid" style={{ height: "100%" }}>
      <div className="row " style={{ height: "100%" }}>
        <div className="col-2 d-flex justify-content-start">
          <div
            className="container nopadding d-flex flex-column animate__animated animate__slideInLeft"
            style={{ height: "90%" }}
          >
            <div
              className="d-flex flex-column flex-grow-1 glow"
              style={{
                fontSize: "80%",
                position: "relative",
                left: "12%",
                top: "5%",
              }}
            >
              {levelList}
            </div>{" "}
          </div>
        </div>
        <div className="col-8 d-flex justify-content-center">
          {" "}
          <div
            className="d-flex flex-column "
            style={{ height: "100%", width: "100%" }}
          >
            <div
              className="d-flex "
              style={{
                backgroundImage: "url(assets/back3.png)",
                backgroundSize: "cover",

                width: "100%",
                height: "42%",
                textAlign: "center",
                backgroundPosition: "0 0",
              }}
            />
            <div
              className="d-flex flex-column flex-fill align-items-start justify-content-start"
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              {!isWrong && !isBlock && (
                <div
                  className="d-flex btnAnsw flex-row align-items-center  justify-content-center"
                  style={{
                    width: "100%",
                    background: "#16ad85",
                    borderRadius: "19px",
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  <strong> {question}</strong>
                </div>
              )}
              {isWrong && !isBlock && (
                <div
                  className="d-flex btnAnsw flex-row align-items-center  justify-content-center"
                  style={{
                    width: "100%",
                    height: "50%",
                    background: "#16ad85",
                    borderRadius: "19px",
                    color: "white",
                    borderColor: "white",
                    lineHeight: "300%",
                  }}
                >
                  انتهت اللعبة
                </div>
              )}
              {isBlock && (
                <div
                  className="d-flex btnAnsw flex-row align-items-center  justify-content-center  animate__animated animate__shakeX"
                  style={{
                    width: "100%",
                    height: "50%",
                    background: "#16ad85",
                    borderRadius: "19px",
                    color: "white",
                    borderColor: "white",
                    lineHeight: "300%",
                  }}
                >
                  {msg}
                </div>
              )}
            </div>
            <div
              className="d-flex flex-column justify-content-start align-items-center flex-fill animate__animated animate__backInUp"
              style={{ width: "100%" }}
            >
              {!isWrong && !isBlock && (
                <Answers
                  answers={answers}
                  onSubmitAnswer={onSubmitAnswerHandler}
                  helpCrowd={helpCrowd}
                  helpFifty={helpFifty}
                  correctAnswr={answer}
                />
              )}
              {isWrong && !isBlock && (
                <div
                  className="d-flex flex-row align-items-center justify-content-center"
                  style={{ width: "100%" }}
                >
                  <button
                    className="retryButton d-flex align-items-center justify-content-center "
                    style={{
                      marginLeft: "3%",
                      marginRight: "1.5%",
                      width: "15%",
                      paddingBottom: "2%",
                      paddingTop: "2%",
                      alignItems: "center",
                      color: "#16ad85",
                      fontSize: "2em",
                      borderRadius: "7px",
                      background: "#fde31d",
                      border: "solid #16ad85 5px",
                    }}
                    type="button"
                    onClick={onResetHandler}
                  >
                    <BsArrowRepeat />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {!isWrong && !isBlock && (
          <div className="col-2">
            {" "}
            <div
              className="d-flex flex-column justify-content-center align-items-items"
              style={{ height: "100%" }}
            >
              <div
                className="d-flex flex-column align-items-center flex-column animate__animated animate__slideInRight"
                style={{ height: "50%" }}
              >
                <div
                  className="mb-auto align-items-center justify-content-center "
                  style={{ marginTop: "10%" }}
                >
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
                    onClick={volumeHandler}
                  >
                    {mute && <FaVolumeMute />}
                    {!mute && <FaVolumeUp />}
                  </button>
                </div>
                <div className="p-2">
                  <CountdownCircleTimer
                    key={key}
                    size="100"
                    strokeWidth="8"
                    isPlaying
                    duration={60}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    onComplete={timeout}
                  >
                    {renderTime}
                  </CountdownCircleTimer>
                </div>
              </div>
              <div
                className="d-flex flex-column  justify-content-center align-items-items"
                style={{ height: "50%" }}
              >
                <button
                  type="button"
                  className="btn a btn-warning animate__animated animate__slideInRight btn-circle btn-md"
                  id="crowd"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "10%",
                  }}
                  onClick={goCrowdHandler}
                >
                  <img src="assets/crowd.png" alt="crowd " width="60%" />
                </button>
                <button
                  id="fifty"
                  type="button"
                  className="btn btn-warning animate__animated animate__slideInRight btn-circle btn-md"
                  style={{
                    color: "#540e66",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  onClick={goFiftyHandler}
                >
                  50:50
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default QuizPage;
