import { combineReducers } from "redux";
import addUserReducer from "./AddUserReducer/addUserReducer";
const rootReducer = combineReducers({
  addUserReducer,
});
export default rootReducer;
