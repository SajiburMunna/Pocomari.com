import { combineReducers } from "redux";
import addUserReducer from "./AddUserReducer/addUserReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./AuthReducer/authReducer";

const persistConfig = {
  key: "pocomari",
  storage: storage,
};
// const persistConfig2 = {
//   key: "pocomariCart",
//   storage: storage,
// };
const persistedStorage = persistReducer(persistConfig, authReducer);
// const PersistedCartStorage = persistReducer(persistConfig2);
const rootReducer = combineReducers({
  persistedStorage,
  // PersistedCartStorage,
  addUserReducer,
});
export default rootReducer;
