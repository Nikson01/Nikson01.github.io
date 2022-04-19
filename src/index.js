import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import store from './store/store'
import * as actions from "./store/actions";

store.dispatch(actions.fetchPosts());

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
