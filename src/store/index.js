import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composeEnhancer);
export const persistor = persistStore(store);
