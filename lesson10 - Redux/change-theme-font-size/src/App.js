import React from "react";
import { Provider, connect } from "react-redux";
import { store } from "./store";

import "./styles.css";
import CountDispaly from "./CountDispaly";
import CounterButtons from "./CounterButtons";
import ThemePicker from "./ThemePicker";

const Container = connect(state => ({
  colorClass: state.theme.color,
  fontClass: state.theme.fontSize
}))(({ colorClass, fontClass }) => (
  <div className={`${colorClass} ${fontClass}`}>
    <h1>Hello CodeSandbox</h1>
    <CountDispaly />
    <CounterButtons />
    <ThemePicker />
  </div>
));

export default function App() {
  return (
    <Provider store={store}>
      <Container className={store.getState().theme.color} />
    </Provider>
  );
}
