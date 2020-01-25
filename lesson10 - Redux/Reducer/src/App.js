import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import "./styles.css";
import CountDispaly from "./CountDispaly";
import CounterButtons from "./CounterButtons";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <CountDispaly />
        <CounterButtons />
      </div>
    </Provider>
  );
}
