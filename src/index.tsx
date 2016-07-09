import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { createStore } from "redux";

import reducer from "./reducers";
import routes from "./routes";

const store = createStore(reducer, (window as any).devToolsExtension && (window as any).devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById("app")
);
