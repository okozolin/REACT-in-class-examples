import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state = 10, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(reducer);

///----- Actions -----
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});
