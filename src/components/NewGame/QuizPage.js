/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";

// !!ICONS
import { BsArrowRepeat } from "react-icons/bs";

// !!SOUNDS
import correctAnswer from "../../assets/audioFiles/correctAnswer.min.mp3";
import wrongAnswer from "../../assets/audioFiles/wrongAnswer.min.mp3";
import suspense from "../../assets/audioFiles/backGround.min.mp3";
import pause from "../../assets/audioFiles/pause.min.mp3";

// !!COMPONENTS
import { Answers } from "./Answers";
import Levelpoints from "./Levelpoints";
import MainTimer from "./MainTimer";
import SoundButton from "./SoundButton";

// !IMAGES
import manAndWoman from "../../assets/images/manAndWoman.png";
import crowd from "../../assets/images/crowd.png";
// !STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "./quizPage.css";

export const QuizPage = function ss(props) {
  // !HOOKS
  const { recentLevel, level, onSubmitLevel, onReset, suggestedQuestions } =
    props;
  const [suspenseSoundVar] = useState(new Audio(suspense));
  const [pauseSoundVar] = useState(new Audio(pause));
  const [correctAnswerVar] = useState(new Audio(correctAnswer));
  const [wrongAnswerVar] = useState(new Audio(wrongAnswer));
  const [answers, setAnswers] = useState([]);
  const [msg, setMsg] = useState("");
  const [helpCrowd, setHelpCrowd] = useState(false);
  const [helpFifty, setHelpFifty] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [key, setKey] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [flash, setFlash] = useState(false);
  const [submitedAnswer, setSubmitedAnswer] = useState();

  const a = window.matchMedia("(max-width: 575px)");
  let indexRandom;
  let levelList = <h3>NAN</h3>;
  if (level.length > 0) {
    levelList = level.map((x) => (
      <Levelpoints
        key={x.id}
        level={x.level}
        points={x.points}
        recentLevelToLevelpoints={recentLevel}
      />
    ));
  }

  const localStorageSetQuestionAlreadyChosen = (questionComposedId) => {
    const entryModified = `${questionComposedId}/`;
    if (localStorage.getItem("QuestionAlreadyChosen") != null) {
      localStorage.setItem(
        "QuestionAlreadyChosen",
        localStorage.getItem("QuestionAlreadyChosen") + entryModified
      );
    } else {
      localStorage.setItem("QuestionAlreadyChosen", entryModified);
    }
  };

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
          if (questionsStored[j] == `${levelEntry}${i}`) {
            break;
          }
        }
        if (j >= questionsStored.length) {
          unViewedQuestionsArray.push(`${levelEntry}${i}`);
        }
      }
      let newVal = "";
      if (unViewedQuestionsArray.length == 0) {
        for (let w = 0; w < 4; w += 1) {
          newVal = localStorage
            .getItem("QuestionAlreadyChosen")
            .replace(`${levelEntry}${w}/`, "");
          localStorage.setItem("QuestionAlreadyChosen", newVal);
          indexRandom = Math.floor(Math.random() * 4);
        }
        localStorageSetQuestionAlreadyChosen(`${levelEntry}${indexRandom}`);
        setAnswers(suggestedQuestions[indexRandom].content);
        setQuestion(suggestedQuestions[indexRandom].question);
        setAnswer(suggestedQuestions[indexRandom].correct);
      } else {
        indexRandom = Math.floor(Math.random() * unViewedQuestionsArray.length);
        localStorageSetQuestionAlreadyChosen(
          unViewedQuestionsArray[indexRandom]
        );
        setAnswers(
          suggestedQuestions[
            parseInt(unViewedQuestionsArray[indexRandom], 10) % 10
          ].content
        );
        setQuestion(
          suggestedQuestions[
            parseInt(unViewedQuestionsArray[indexRandom] % 10, 10)
          ].question
        );
        setAnswer(
          suggestedQuestions[
            parseInt(unViewedQuestionsArray[indexRandom] % 10, 10)
          ].correct
        );
      }
    } else {
      indexRandom = Math.floor(Math.random() * 4);
      localStorageSetQuestionAlreadyChosen(`${levelEntry}${indexRandom}`);
      setAnswers(suggestedQuestions[indexRandom].content);
      setQuestion(suggestedQuestions[indexRandom].question);
      setAnswer(suggestedQuestions[indexRandom].correct);
    }
  };
  function isPlaying(audelem) {
    return !audelem.paused;
  }
  useEffect(() => {
    if (!isPlaying(correctAnswerVar) && !isPlaying(wrongAnswerVar)) {
      suspenseSoundVar.play();
    } else {
      suspenseSoundVar.pause();
    }
  }, [key, recentLevel]);

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
          recentLevel == "4" ||
          recentLevel == "8" ||
          recentLevel == "8" ||
          recentLevel == "12" ||
          recentLevel == "15"
        )
          if (
            parseInt(new Date().getTime(), 10) -
              parseInt(DayWeGainCheckPoint, 10) <=
            200000
          ) {
            setIsBlock(true);
            console.log("im here 2000");
            setMsg(
              "لقد وصلت إلى الحد الأقصى لعدد نقاط التفتيش لديك وهو نقطة تفتيش واحدة في الأسبوع"
            );
            pauseSoundVar.play();
            suspenseSoundVar.volume = 0.0;
          } else {
            setIsBlock(false);
          }
        else if (
          parseInt(new Date().getTime(), 10) -
            parseInt(firstDayWePlayTheLevel, 10) <=
          10000
        ) {
          console.log("im here 1000");

          setIsBlock(true);
          setMsg(
            "لقد وصلت إلى الحد الأقصى لعدد الأسئلة للإجابة وهو سؤال واحد في اليوم يرجى العودة غدًا"
          );
          pauseSoundVar.play();
          suspenseSoundVar.volume = 0.0;
        } else {
          setIsBlock(false);
        }
      }
    }
    localStorageCheckForQuestionIfItWasAlreadyChosen(recentLevel);
  }, [recentLevel]);

  const onSubmitAnswerHandler = (submitedAnswer) => {
    setSubmitedAnswer(submitedAnswer);
    setFlash(true);
    correctAnswerVar.volume = 0.0;
    wrongAnswerVar.volume = 0.0;
    suspenseSoundVar.volume = 0.0;
    if (submitedAnswer == answer) {
      setIsWrong(false);
      correctAnswerVar.currentTime = 0;
      correctAnswerVar.volume = 1;
      correctAnswerVar.play();
      setTimeout(() => {
        correctAnswerVar.volume = 0;
      }, 4000);
      setHelpCrowd(false);
      setHelpFifty(false);
      setTimeout(() => {
        onSubmitLevel(recentLevel);
        document.getElementById("0").style.backgroundColor = "";
        document.getElementById("1").style.backgroundColor = "";
        document.getElementById("2").style.backgroundColor = "";
        document.getElementById("3").style.backgroundColor = "";
        document.getElementById("0").disabled = false;
        document.getElementById("1").disabled = false;
        document.getElementById("2").disabled = false;
        document.getElementById("3").disabled = false;
        setFlash(false);
        localStorage.setItem("actualWeek", new Date().getTime());
        localStorage.setItem("actualDay", new Date().getTime());
      }, 4000);
    } else {
      wrongAnswerVar.volume = 1;
      wrongAnswerVar.currentTime = 0;
      wrongAnswerVar.play();
      correctAnswerVar.volume = 0;
      setTimeout(() => {
        setIsWrong(true);
        setHelpCrowd(false);
        setHelpFifty(false);
        setKey((prevKey) => prevKey + 1);
        if (document.getElementById("0") != null)
          document.getElementById("0").style.backgroundColor = "";
        if (document.getElementById("1") != null)
          document.getElementById("1").style.backgroundColor = "";
        if (document.getElementById("2") != null)
          document.getElementById("2").style.backgroundColor = "";
        if (document.getElementById("3") != null)
          document.getElementById("3").style.backgroundColor = "";
        if (document.getElementById("0") != null)
          document.getElementById("0").disabled = false;
        if (document.getElementById("1") != null)
          document.getElementById("1").disabled = false;
        if (document.getElementById("2") != null)
          document.getElementById("2").disabled = false;
        if (document.getElementById("3") != null)
          document.getElementById("3").disabled = false;
        setFlash(false);
        localStorage.setItem("actualWeek", new Date().getTime());
        localStorage.setItem("actualDay", new Date().getTime());
      }, 4000);
    }
  };

  const onResetHandler = () => {
    setIsWrong(false);
    setKey((prevKey) => prevKey + 1);
    setHelpCrowd(false);
    setHelpFifty(false);
    onReset(recentLevel);
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
  const volumeHandler = (mute) => {
    if (mute == false) {
      correctAnswerVar.volume = 0.0;
      wrongAnswerVar.volume = 0.0;
      suspenseSoundVar.volume = 0.0;
    } else {
      correctAnswerVar.volume = 1.0;
      wrongAnswerVar.volume = 1.0;
      suspenseSoundVar.volume = 1.0;
    }
  };
  const myFunction = (x) => {
    if (x.matches) {
      setIsFullScreen(false);
    } else {
      setIsFullScreen(true);
    }
  };
  useEffect(() => {
    myFunction(a);
    a.addListener(myFunction);
  }, []);

  return (
    <div className="container-fluid height100">
      <div className="row height100">
        <div className="col-12 col-sm-2 d-flex justify-content-start toplevelContainer">
          <div className="container padding_0 d-flex flex-row flex-md-column flex-lg-column flex-xl-column flex-sm-column  animate__animated animate__slideInLeft scroreBoardContainer ">
            <div className="d-flex flex-row flex-sm-column flex-ms-column flex-lg-column flex-xl-column flex-grow-1 glow scroreBoard ">
              {levelList}
            </div>
          </div>
        </div>
        {!isWrong && !isBlock && !isFullScreen && (
          <MainTimer key={key} timeout={timeout} />
        )}
        <div className="w-100 breaker" />
        <div className="col-12 col-sm-8 d-flex justify-content-center">
          <div
            className="d-flex flex-column "
            style={{ height: "100%", width: "100%" }}
          >
            <div
              className="d-flex backGroundJti"
              style={{
                backgroundImage: `url(${manAndWoman})`,
              }}
            />
            <div
              className="d-flex flex-column flex-fill align-items-start justify-content-start questionMargin"
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              {!isWrong && !isBlock && (
                <div className="d-flex btnAnsw flex-row align-items-center  justify-content-center questionButt">
                  <strong> {question}</strong>
                </div>
              )}
              {isWrong && !isBlock && (
                <div className="d-flex btnAnsw flex-row align-items-center  justify-content-center gameEnded">
                  انتهت اللعبة
                </div>
              )}
              {isBlock && (
                <div
                  className="d-flex btnAnsw flex-row align-items-center  justify-content-center  animate__animated animate__jackInTheBox"
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
                  idChosen={submitedAnswer}
                  answers={answers}
                  flash={flash}
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
        <div className="w-100 breaker" />

        {!isWrong && !isBlock && (
          <div className="col-12 col-sm-2 col-md-2">
            <div
              className="d-flex flex-column justify-content-center align-items-items"
              style={{ height: "100%" }}
            >
              <div
                className="d-flex flex-row flex-sm-column  flex-md-column align-items-center animate__animated animate__slideInRight smallDevicesPosition"
                style={{ height: "50%" }}
              >
                <div
                  className="mb-auto align-items-center justify-content-center speaker bigDevices "
                  style={{ marginTop: "10%" }}
                >
                  <SoundButton
                    volumeHandler={volumeHandler}
                    correctAnswerVar={correctAnswerVar}
                    wrongAnswerVar={wrongAnswerVar}
                    suspenseSoundVar={suspenseSoundVar}
                  />
                </div>
                {isFullScreen && <MainTimer key={key} timeout={timeout} />}
              </div>
              <div
                className="d-flex flex-row  flex-sm-column  justify-content-center align-items-center containerControllers"
                style={{ height: "50%" }}
              >
                {" "}
                <div>
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
                    <img src={crowd} alt="crowd " width="60%" />
                  </button>
                </div>
                <div>
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
                <div className="smallDevices">
                  {" "}
                  <SoundButton
                    volumeHandler={volumeHandler}
                    correctAnswerVar={correctAnswerVar}
                    wrongAnswerVar={wrongAnswerVar}
                    suspenseSoundVar={suspenseSoundVar}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default QuizPage;
