import apiHelper from "../helpers/api";
import {
  FORECAST_FETCH_START,
  FORECAST_FETCH_SUCCESS,
  FORECAST_FETCH_FAILURE,
  FORECAST_TOGGLE_DISPLAY_UNITS,
  FORECAST_CHANGE_PAGE,
} from "./types";

const getForecast = () => {
  return (dispatch) => {
    dispatch({ type: FORECAST_FETCH_START });
    apiHelper
      .get("forecast", {
        q: "Munich,de",
        units: "metric",
      })
      .then((response) => {
        const { data, ok, problem } = response;
        if (ok) {
          dispatch({ type: FORECAST_FETCH_SUCCESS, data });
        } else {
          let error = data ? data.message : problem;
          dispatch({ type: FORECAST_FETCH_FAILURE, error });
        }
      });
  };
};

const toggleDisplayUnits = () => {
  return (dispatch) => {
    dispatch({ type: FORECAST_TOGGLE_DISPLAY_UNITS });
  };
};

const changePage = (page) => {
  return (dispatch) => {
    dispatch({ type: FORECAST_CHANGE_PAGE, page });
  };
};

export default { getForecast, toggleDisplayUnits, changePage };
