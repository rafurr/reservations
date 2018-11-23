import { combineReducers } from "redux";

import view from "./view";
import counter from "./counter";

const rootReducer = () =>
  combineReducers({
    view,
    counter
  });

export default rootReducer;
