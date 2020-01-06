import React from "react";

interface IListProps {
  items: string[];
}
export const List: React.FC<IListProps> = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};
