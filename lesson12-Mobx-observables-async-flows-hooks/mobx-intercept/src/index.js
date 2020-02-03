import { observable, intercept } from "mobx";

const theme = observable({
  backgroundColor: "#ffffff"
});

const disposer = intercept(theme, "backgroundColor", change => {
  if (!change.newValue) {
    // ignore attempts to unset the background color
    return null;
  }
  if (change.newValue.length === 6) {
    // correct missing '#' prefix
    change.newValue = "#" + change.newValue;
    return change;
  }
  if (change.newValue.length === 7) {
    // this must be a properly formatted color code!
    return change;
  }
  if (change.newValue.length > 10) {
    throw new Error("This doesn't like a color at all: " + change.newValue);
  }
});

// this prints #FFFFFF initial value
console.log(theme.backgroundColor);

// this prints #FFFFFF because setting to null is ignored
theme.backgroundColor = null;
console.log(theme.backgroundColor);

// this prints #AAAAAA, # is prepended
theme.backgroundColor = "aaaaaa";
console.log(theme.backgroundColor);

// this prints #BBBBBB
theme.backgroundColor = "#bbbbbb";
console.log(theme.backgroundColor);

// this throws an error and change is not applied
try {
  theme.backgroundColor = "#bbbbbbbbbb";
} catch (e) {
  console.log(e.message);
}
console.log(theme.backgroundColor);
