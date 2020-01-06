import React from "react";

interface Props {
  onSearch(q: any): void;
}
export const SearchButton: React.FC<Props> = ({ onSearch }) => {
  console.log("Rendering button");
  return <button onClick={onSearch}>Search</button>;
};
