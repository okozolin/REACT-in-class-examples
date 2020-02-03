import { observable, action, autorun } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";

var timerData = observable({
  secondsPassed: 0
});

setInterval(() => {
  timerData.secondsPassed++;
}, 1000);

// A hooks based component wrapped with `timerData` will react to changes automatically
// const Timer = observer(({ timerData }) => <span>Seconds passed: {timerData.secondsPassed} </span>)

// Alternatively, a class based component:
@observer
class Timer extends React.Component {
  render() {
    return <span>Seconds passed: {this.props.timerData.secondsPassed} </span>;
  }
}

ReactDOM.render(<Timer timerData={timerData} />, document.body);
