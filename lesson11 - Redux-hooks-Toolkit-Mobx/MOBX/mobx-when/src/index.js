import { observable, when } from "mobx";
import * as _ from "lodash";

const person = observable({
  firstName: "Matt",
  lastName: "Ruby",
  age: 0
});

// you can call the disposer() to kill off the when early.
const disposer = when(
  () => {
    console.log("Age: " + person.age);
    return person.age >= 35;
  },
  () => { 
    console.log("You're too old now.  I'm done watching.");
  }
);

// this will print 'Age: NN' until the age randomly is 20 or higher
_.times(100, function() {
  person.age = _.random(40);
});
