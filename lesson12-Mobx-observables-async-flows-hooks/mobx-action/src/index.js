import { observable, action, autorun, computed, configure } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import * as _ from "lodash";

configure({ enforceActions: "observed" });

class Person {
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

  @action
  setFirstAndLastName(firstName, lastName) {
    this.setFirstName(firstName);
    this.setLastName(lastName);
  }
}

const person = new Person();

autorun(function auto_fullNameAge() {
  console.log(person.fullName + " " + person.age);
});

// this will print Matt NN 1 times
person.setAge(_.random(40));

// Note how we're changing 2 fields without using transaction.
// action wraps everything inside a transaction automatically
person.setFirstAndLastName("Jon", "Smith");

// these will fire an error as we are in strict mode
person.firstName = "Mike";
person.firstName = "Lissy";
