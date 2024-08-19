import toggleReducer from "./toggleReducer";
import { dashReducer } from "./dashboardReducer";
import { combineReducers } from "redux";
import { widgetReducer } from "./widgetReducer";

const allReducers = combineReducers({
  toggleReducer,
  dashReducer,
  widgetReducer,
});

export default allReducers;
