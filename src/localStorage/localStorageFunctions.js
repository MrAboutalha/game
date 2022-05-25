import currentDayNumber from "current-day-number";
import currentWeekNumber from "current-week-number";
//----------------------------------------------------------------
// START_PLAYING
export const setCurrentDayNumberDev = () => {
  localStorage.setItem(
    "actualDay",
    localStorage.getItem("actualDay")
      ? localStorage.getItem("actualDay")
      : new Date().getTime()
  );
};
export const setCurrentWeekNumberDev = () => {
  localStorage.setItem(
    "actualWeek",
    localStorage.getItem("actualWeek")
      ? localStorage.getItem("actualWeek")
      : new Date().getTime()
  );
};
export const setCurrentDayNumberProd = () => {
  localStorage.setItem(
    "actualDay",
    localStorage.getItem("actualDay")
      ? localStorage.getItem("actualDay")
      : currentDayNumber()
  );
};
export const setCurrentWeekNumberProd = () => {
  localStorage.setItem(
    "actualWeek",
    localStorage.getItem("actualWeek")
      ? localStorage.getItem("actualWeek")
      : currentWeekNumber()
  );
};
//----------------------------------------------------------------
export const setHasEnterTheGame = () => {
  localStorage.setItem(
    "hasEnterTheGame",
    !!localStorage.getItem("hasEnterTheGame")
  );
};
//----------------------------------------------------------------
// SUBMITTING || RESET
export const setCurrentWeekNumberOnSubmitOrResetDev = () => {
  localStorage.setItem("actualWeek", new Date().getTime());
  localStorage.setItem("actualDay", new Date().getTime());
  localStorage.setItem("hasEnterTheGame", true);
};
export const setCurrentWeekNumberOnSubmitOrResetProd = () => {
  localStorage.setItem("actualWeek", currentWeekNumber());
  localStorage.setItem("actualDay", currentDayNumber());
  localStorage.setItem("hasEnterTheGame", true);
};
