import React, { useState } from "react";
// !!CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
// !DUMMY_DATA
import questions from "./assets/dummyData/questions";
import array from "./assets/dummyData/levels";
// !COMPONENTS
import { QuizPage } from "./components/NewGame/QuizPage";
import LandingPage from "./components/LandingPage";
import {
  setCurrentDayNumberDev,
  setCurrentWeekNumberDev,
  setCurrentWeekNumberOnSubmitOrResetDev,
  setHasEnterTheGame,
} from "./localStorage/localStorageFunctions";

let recentLevel;
export function App() {
  const [level, setLevel] = useState(0);
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlayingHandler = () => {
    setCurrentDayNumberDev();
    setCurrentWeekNumberDev();
    setHasEnterTheGame();
    if (localStorage.getItem("recentLevel")) {
      recentLevel = localStorage.getItem("recentLevel");
      setLevel(parseInt(recentLevel, 10));
    } else {
      recentLevel = 0;
      localStorage.setItem("recentLevel", 0);
    }
    setIsPlaying(true);
  };
  const onSubmitLevelhandler = (previousLevel) => {
    setCurrentWeekNumberOnSubmitOrResetDev();
    setLevel(() => previousLevel + 1);
    localStorage.setItem("recentLevel", previousLevel + 1);
  };
  const onResetHandler = (previousLevel) => {
    setCurrentWeekNumberOnSubmitOrResetDev();
    setKey((value) => value + 1);
    setLevel(() => previousLevel);
    localStorage.setItem("recentLevel", previousLevel);
  };
  return (
    <>
      {!isPlaying && <LandingPage startPlayingHandler={startPlayingHandler} />}
      {isPlaying && (
        <QuizPage
          recentLevel={level}
          suggestedQuestions={questions[level]}
          level={array}
          onSubmitLevel={onSubmitLevelhandler}
          key={key}
          onReset={onResetHandler}
        />
      )}
    </>
  );
}

export default App;
