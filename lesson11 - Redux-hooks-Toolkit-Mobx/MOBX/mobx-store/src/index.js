import { observable, action, computed, configure } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider, inject } from "mobx-react";

configure({ enforceActions: "observed" });

class PersonStore {
  @observable firstName = "Matt";
  @observable lastName = "Ruby";
  @observable age = 0;

  @computed
  get fullName() {
    console.count("fullName");
    return this.firstName + " " + this.lastName;
  }

  @action
  setAge(age) {
    this.age = age;
  }

  @action
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  @action
  setLastName(lastName) {
    this.lastName = lastName;
  }
}

const personStore = new PersonStore();

@inject("store")
@observer
class PersonDetails extends React.Component {
  render() {
    const personStore = this.props.store;
    return (
      <div>
        {personStore.fullName}, {personStore.age}
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={personStore}>
    <PersonDetails />
  </Provider>,
  document.body
);
