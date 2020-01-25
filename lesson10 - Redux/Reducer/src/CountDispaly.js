import React from "react";
import { connect } from "react-redux";

const CountDispaly = ({ count }) => {
  return <div>Count: {count}</div>;
};

const mapStateToProps = state => {
  return {
    count: state
  };
};

export default connect(mapStateToProps)(CountDispaly);
