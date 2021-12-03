import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composeEnhancer);
