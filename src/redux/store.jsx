import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import locReducer from "./locationRedux/locReducer";
import weatherReducer from "./weatherRedux/weatherReducer";
const rootReducer = combineReducers({
  location: locReducer,
  weather: weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
