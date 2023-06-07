import React, { useState } from "react";

interface props {
  name: string;
  age: number;
  friends: string[];
  country: string;
}
export enum Country {
  Brazil = "Brazil",
  India = "India",
  London = "London",
}
export const Person: React.FC<props> = ({ name, age, friends, country }) => {
  const [Name, setName] = useState<string>("");
  const getAge = (name: string): string => {
    return "John";
  };
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
      <h1>My Country is {country}</h1>
    </div>
  );
};
