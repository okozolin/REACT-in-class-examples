import React, { memo } from "react";

const Button = ({ lable, handleClick }) => {
  console.log("Rendering button");
  return <button onClick={handleClick}>{lable}</button>;
};

export default memo(Button);
