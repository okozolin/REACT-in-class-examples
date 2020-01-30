import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Counter } from "./components/counter/Counter";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React + Redux Starter</h1>
        <Counter />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
