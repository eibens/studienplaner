/** EXTERNALS **/

import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

/** LOCALS **/

import { store } from "./app/store.ts";
import { App } from "./app/app.tsx";

/** MAIN **/

if (globalThis.document) {
  new WebSocket("ws://localhost:8080/ws")
    .addEventListener("message", () => location.reload());

  const root = document.getElementById("root");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root,
  );
}
