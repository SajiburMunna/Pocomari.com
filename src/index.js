import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./scrollToTop";
import { Provider } from "react-redux";

import { store } from "./store/index.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
