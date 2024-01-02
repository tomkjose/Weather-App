import { FETCH_DATA_SUCCESS } from "./weatherAction";

const initialState = {
  current: {},
  forecast: {},
  airPollution: {},
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        current: action.payload.current,
        forecast: action.payload.forecast,
        airPollution: action.payload.airPollution,
      };
    default:
      return state;
  }
};

export default weatherReducer;
