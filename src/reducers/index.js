import { combineReducers } from "redux";
import hotspots from "./hotspots";
import creation from "./creation";

export default combineReducers({
  hotspots,
  creation
});
