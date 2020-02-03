/* eslint-disable */
import React from "react";
import { observable, computed } from "mobx";

class User {
  @observable name;
}

class Profile extends React.Component {
  @computed get name() {
    // correct; computed property will track the `user.name` property
    return this.props.user.name;
  }

  render() {
    return <div>{this.name}</div>;
  }
}
