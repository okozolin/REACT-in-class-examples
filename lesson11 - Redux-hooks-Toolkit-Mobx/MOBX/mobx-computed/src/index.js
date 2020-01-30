import { observable, computed, autorun } from "mobx";
import * as _ from "lodash";

const person = observable({
  firstName: "Matt",
  lastName: "Ruby",
  age: 0
});

const fullName = computed(
  () => `${person.firstName} ${person.lastName}: ${person.age}`
);

// you can call the disposer() to kill off the when early.
const disposer = autorun((reaction) => {
  console.log("Age: " + fullName);
});

// this will print 'Age: NN' until the age randomly is 20 or higher
_.times(100, function() {
  person.age = _.random(40);
});
