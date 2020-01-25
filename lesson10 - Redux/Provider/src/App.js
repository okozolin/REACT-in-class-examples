import React from "react";
import { Provider, connect } from "react-redux";
import { store } from "./store";

import "./styles.css";
import CountDispaly from "./CountDispaly";
import CounterButtons from "./CounterButtons";
import ThemePicker from "./ThemePicker";

const Container = connect(state => ({
  className: state.theme.color
}))(({ className }) => (
  <div className={className}>
    <h1>Hello CodeSandbox</h1>
    <CountDispaly />
    <CounterButtons />
    <ThemePicker />
  </div>
));

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
