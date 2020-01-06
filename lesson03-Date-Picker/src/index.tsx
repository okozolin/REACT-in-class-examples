import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

const days: number[] =[];
for(let i=0; i<31; i++) {
  days.push(i+1)
}

const months: string[] = ['Jan', 'Feb', 'Mar']
const years: number[] = [];
for(let i=1999; i<2100; i++) {
  years.push(i+1)
}

function DatePicker() {
  return (
  <div>
      <select onChange={(e) => console.log(e.target)}>
        <option disabled>Day</option>
        {days.map(d => (
            <option key={d}>{d}</option>
          ))}
      </select>
      <select>
        <option disabled>Month</option>
        {months.map(m => (
            <option key={m}>{m}</option>
          ))}
        </select>
      <select>
        <option disabled>Year</option>
        {years.map(y => (
            <option key={y}>{y}</option>
          ))}
        </select>
        <button onClick={(e)=> console.log('button clicked', e.target)}>pick</button>
  </div>
  )
}

function App() {
  const handlePick = () => {

  }
  return (
    <div className="App">
      <DatePicker handlePick/>
      </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
