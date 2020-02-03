/* eslint-disable */
import React from "react";
import { observable } from "mobx";

class User {
  @observable name;
}

class Profile extends React.Component {
  name;

  componentWillMount() {
    // Wrong
    // This dereferences user.name and just copies the value once!
    // Future updates will not be tracked, as lifecycle hooks are not reactive
    // assignments like these create redundant data
    this.name = this.props.user.name;
  }

  render() {
    return <div>{this.name}</div>;
  }
}
