import React from "react";
import ReactDOM from "react-dom";
import { spy } from "mobx";
import { useLocalStore, useObserver } from "mobx-react-lite";

spy(event => {
  console.log(event);
});

const createPersonStore = () => {
  return {
    firstName: "Matt",
    lastName: "Ruby",
    age: 10,
    setAge(age) {
      this.age = age;
    },
    setFirstName(firstName) {
      this.firstName = firstName;
    },
    setLastName(lastName) {
      this.lastName = lastName;
    },
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
};

const storeContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  const store = {
    personStore: useLocalStore(createPersonStore)
  };
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

function useStore() {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
}

const PersonDetails = () => {
  const { personStore } = useStore();

  const handleClick = () => {
    personStore.setAge(personStore.age + 1);
  };

  return useObserver(() => (
    <React.Fragment>
      <div>
        {personStore.fullName}, {personStore.age}
      </div>
      <button onClick={handleClick}>raise age</button>
    </React.Fragment>
  ));
};

ReactDOM.render(
  <StoreProvider>
    <PersonDetails />
  </StoreProvider>,
  document.body
);
