import React, { useState } from "react";

interface props {
  name: string;
  age: number;
  friends: string[];
}
export const Person: React.FC<props> = ({ name, age, friends }) => {
  const [Name, setName] = useState<string>("");
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>My age is {age}</h1>
      <h1>
        My friends are
        {friends.map((item: string) => (
          <span key={item}> {item} </span>
        ))}
      </h1>
    </div>
  );
};
