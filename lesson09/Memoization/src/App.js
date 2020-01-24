import React, { useState, useCallback } from "react";
import "./styles.css";
import Button from "./Button";

export default function App() {
  const [value, setValue] = useState("");
  const [sum, setSum] = useState("");

  const handleClick = useCallback(() => {
    alert(`the value`);
  }, [value]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        value={value}
        placeholder="Value"
        onChange={e => setValue(e.target.value)}
      />
      <input
        value={sum}
        placeholder="Sum"
        onChange={e => setSum(e.target.value)}
      />
      <Button handleClick={handleClick} lable="My Button" />
    </div>
  );
}
