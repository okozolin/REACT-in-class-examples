import { createStore, combineReducers } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const CHANGE_COLOR = "CHANGE_COLOR";
const CHANGE_FONT_SIZE = "CHANGE_FONT_SIZE";

const countReducer = (state = 10, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
/*
store = {
  count: 10,
  theme: 'light'
}
*/

const themeReducer = (
  state = { color: "light", fontSize: "medium" },
  action
) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return { ...state, color: action.payload };
    case CHANGE_FONT_SIZE:
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({
    count: countReducer,
    theme: themeReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

///----- Actions -----
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const changeColor = newColor => ({
  type: CHANGE_COLOR,
  payload: newColor
});

export const changeFontSize = newFontSize => ({
  type: CHANGE_FONT_SIZE,
  payload: newFontSize
});
