import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./View/App";

import { Provider } from "react-redux";
import { store } from "./Business/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
