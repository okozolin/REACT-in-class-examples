import React from "react";
import { connect } from "react-redux";
import { changeColor as _changeColor } from "./store";
import { changeFontSize as _changeFontSize } from "./store";

const ThemePicker = props => {
  console.log(props);
  return (
    <div>
      Select Theme Color:
      <select
        onChange={e => {
          props.changeColor1(e.target.value);
        }}
      >
        <option>light</option>
        <option>dark</option>
      </select>
      Select Theme Font Size:
      <select
        onChange={e => {
          props.changeFontSize1(e.target.value);
        }}
      >
        <option>small</option>
        <option>medium</option>
        <option>large</option>
        <option>huge</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  changeColor1: color => {
    console.log(color);
    dispatch(_changeColor(color));
  },
  changeFontSize1: size => {
    console.log(size);
    dispatch(_changeFontSize(size));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemePicker);
