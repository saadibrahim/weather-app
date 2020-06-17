import { createSelector } from "reselect";
import {
  createDateWiseObjWithAvg,
  getTotalPagesCount,
  getSinglePageResults,
} from "../helpers/data";

const getForecast = (state) => state.forecast;

const getForecastData = (state) => getForecast(state).data;

const getForecastUnits = (state) => getForecast(state).units;

const getForecastPage = (state) => getForecast(state).page;

const getForecastList = (state) => getForecastData(state).list || [];

const getForecastCity = (state) => getForecastData(state).city || {};

const dateWiseList = createSelector(
  [getForecastList, getForecastCity, getForecastUnits, getForecastPage],
  (items, city, units, page) => {
    const dateWiseObjWithAvg = createDateWiseObjWithAvg(items, units);

    return {
      totalPages: getTotalPagesCount(dateWiseObjWithAvg),
      results: getSinglePageResults(dateWiseObjWithAvg, page),
      city,
    };
  }
);

const getForecastProcessed = (state) => {
  const forecastData = getForecast(state);
  return {
    fetching: forecastData.fetching,
    data: dateWiseList(state),
    error: forecastData.error,
    units: forecastData.units,
    page: forecastData.page,
  };
};

export default {
  getForecast,
  getForecastList,
  dateWiseList,
  getForecastProcessed,
};
