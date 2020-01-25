import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./store";

const CounterButtons = ({ inc, dec }) => {
  return (
    <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(increment()),
  dec: () => dispatch(decrement())
});

export default connect(
  undefined,
  mapDispatchToProps
)(CounterButtons);
