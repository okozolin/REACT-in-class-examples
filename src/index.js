import _ from "lodash";
import "./style.css";
function Component(text) {
  console.log("Rendering component");
  const element = document.createElement("div");

  const range = _.range(10);
  element.innerHTML = `<h1>${text} ${range}</h1>`;
  return element;
}

document.body.appendChild(Component("Hello world"));
