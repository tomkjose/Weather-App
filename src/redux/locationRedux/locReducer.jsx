import { SET_LOCATION } from "./locAction";

const initialState = {
  latitude: JSON.parse(localStorage.getItem("latitude")) ?? 51.5072,
  longitude: JSON.parse(localStorage.getItem("longitude")) ?? 0.1276,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    default:
      return state;
  }
};

export default locationReducer;
