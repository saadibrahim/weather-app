import { produce } from "immer";
import {
  FORECAST_FETCH_START,
  FORECAST_FETCH_SUCCESS,
  FORECAST_FETCH_FAILURE,
  FORECAST_TOGGLE_DISPLAY_UNITS,
  FORECAST_CHANGE_PAGE,
} from "../actions/types";

const forecast = (
  state = {
    fetching: false,
    data: {},
    error: null,
    units: "metric",
    page: 1,
  },
  action
) => {
  switch (action.type) {
    case FORECAST_FETCH_START:
      return produce(state, (draft) => {
        draft.fetching = true;
      });
    case FORECAST_FETCH_SUCCESS:
      return produce(state, (draft) => {
        draft.fetching = false;
        draft.data = action.data;
      });
    case FORECAST_FETCH_FAILURE:
      return produce(state, (draft) => {
        draft.fetching = false;
        draft.error = action.error;
      });
    case FORECAST_TOGGLE_DISPLAY_UNITS:
      return produce(state, (draft) => {
        draft.units = state.units === "metric" ? "imperial" : "metric";
      });
    case FORECAST_CHANGE_PAGE:
      return produce(state, (draft) => {
        draft.page = action.page;
      });
    default:
      return state;
  }
};

export default forecast;
