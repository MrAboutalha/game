/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./quizPage.css";
import { Answers } from "./Answers";
import Levelpoints from "./Levelpoints";

export const QuizPage = function ss(props) {
  // entries
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const level = props.recentLevel;
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
          {remainingTime}
        </div>
        <div
          style={{
            color: "white",
            fontWeight: "lighter",
            fontFamily: "var(--font-family-GESSTwoBold)",
          }}
        >
          seconds
        </div>
      </div>
    );
  };
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
  // Add to the localStorage the current question
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
  // Check whether a subQuestion for a single main question has already been presented and suggest a new one
  const localStorageCheckForQuestionIfItWasAlreadyChosen = (levelEntry) => {
    console.log("i have checked for the main question", levelEntry);
    let indexRandom;
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
      } else {
        indexRandom = Math.floor(Math.random() * unViewedQuestionsArray.length);
        localStorageSetQuestionAlreadyChosen(
          unViewedQuestionsArray[indexRandom]
        );
      }
    } else {
      indexRandom = Math.floor(Math.random() * 4);
      localStorageSetQuestionAlreadyChosen(levelEntry + "" + indexRandom);
    }
    console.log("i found the free", indexRandom);

    setAnswers(props.suggestedQuestions[indexRandom].content);
    setQuestion(props.suggestedQuestions[indexRandom].question);
    setAnswer(props.suggestedQuestions[indexRandom].correct);
  };
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    localStorageCheckForQuestionIfItWasAlreadyChosen(props.recentLevel);
  }, [level]);
  const onSubmitAnswerHandler = (submitedAnswer) => {
    if (submitedAnswer == answer) {
      props.onSubmitLevel(props.recentLevel);
    } else {
      setIsWrong(true);
    }
  };
  const onResetHandler = () => {
    setIsWrong(false);
    props.onSubmitLevel(-1);
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
                backgroundImage: "url(/Assets/back3.png)",
                backgroundSize: "cover",

                width: "100%",
                height: "47%",
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
              {!isWrong && (
                <div
                  className="d-flex btnAnsw flex-row align-items-center  justify-content-center"
                  style={{
                    width: "100%",
                    height: "50%",
                    background: "#16ad85",
                    borderRadius: "19px",
                    color: "white",
                    fontFamily: " var(--font-family-GESSTwoBold)",
                    borderColor: "white",
                    lineHeight: "300%",
                  }}
                >
                  {question}{" "}
                </div>
              )}
              {isWrong && (
                <div
                  className="d-flex btnAnsw flex-row align-items-center  justify-content-center"
                  style={{
                    width: "100%",
                    height: "50%",
                    background: "#16ad85",
                    borderRadius: "19px",
                    color: "white",
                    fontFamily: " var(--font-family-GESSTwoBold)",
                    borderColor: "white",
                    lineHeight: "300%",
                  }}
                >
                  انتهت اللعبة
                </div>
              )}
            </div>
            <div
              className="d-flex flex-column justify-content-start align-items-center flex-fill animate__animated animate__backInUp"
              style={{ width: "100%" }}
            >
              {!isWrong && (
                <Answers
                  answers={answers}
                  onSubmitAnswer={onSubmitAnswerHandler}
                />
              )}
              {isWrong && (
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
        <div className="col-2">
          {" "}
          <div
            className="d-flex flex-column justify-content-center align-items-items"
            style={{ height: "100%" }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center animate__animated animate__slideInRight"
              style={{ height: "50%" }}
            >
              <CountdownCircleTimer
                size="100"
                strokeWidth="8"
                isPlaying
                duration={60}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => [true, 1000]}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>
            <div
              className="d-flex flex-column  justify-content-center align-items-items"
              style={{ height: "50%" }}
            >
              <button
                type="button"
                className="btn a btn-warning animate__animated animate__slideInRight btn-circle btn-md"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "10%",
                }}
              >
                <img src="/Assets/crowd.png" alt="crowd " width="60%" />
              </button>
              <button
                type="button"
                className="btn btn-warning animate__animated animate__slideInRight btn-circle btn-md"
                style={{
                  color: "#540e66",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                50:50
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuizPage;
