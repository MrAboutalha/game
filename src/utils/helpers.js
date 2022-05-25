/* eslint-disable react/forbid-prop-types */
import { PropTypes } from "prop-types";
import currentDayNumber from "current-day-number";
import currentWeekNumber from "current-week-number";

export const accessControllerCurrentDayDev = (firstDayWePlayTheLevel) =>
  parseInt(new Date().getTime(), 10) - parseInt(firstDayWePlayTheLevel, 10) <=
  10000;
export const accessControllerCurrentDayProd = (firstDayWePlayTheLevel) =>
  parseInt(currentDayNumber, 10) - parseInt(firstDayWePlayTheLevel, 10) <=
  10000;
export const accessControllerCurrentWeekDev = (DayWeGainCheckPoint) =>
  parseInt(new Date().getTime(), 10) - parseInt(DayWeGainCheckPoint, 10) <=
  10000;
export const accessControllerCurrentWeekProd = (DayWeGainCheckPoint) =>
  parseInt(currentWeekNumber, 10) - parseInt(DayWeGainCheckPoint, 10) <= 10000;

accessControllerCurrentDayDev.propTypes = {
  firstDayWePlayTheLevel: PropTypes.any.isRequired,
};
accessControllerCurrentDayProd.propTypes = {
  firstDayWePlayTheLevel: PropTypes.any.isRequired,
};
accessControllerCurrentWeekDev.propTypes = {
  DayWeGainCheckPoint: PropTypes.any.isRequired,
};
accessControllerCurrentWeekProd.propTypes = {
  DayWeGainCheckPoint: PropTypes.any.isRequired,
};
