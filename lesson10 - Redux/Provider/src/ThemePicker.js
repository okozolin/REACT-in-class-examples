import React from "react";
import { connect } from "react-redux";
import { changeColor as _changeColor } from "./store";

const ThemePicker = props => {
  return (
    <div>
      Select Theme:
      <select
        onChange={e => {
          props.changeColor1(e.target.value);
        }}
      >
        <option>light</option>
        <option>dark</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  changeColor1: color => {
    dispatch(_changeColor(color));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemePicker);
