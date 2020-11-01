import React from "react";
import { persons } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
  const { person } = props;
  return (
    <h1>
      {" "}
      Firstname: {person.firstName} LastName: {person.lastName} Email:{" "}
      {person.lastName}{" "}
    </h1>
  );
}

function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />

      {persons.map((person, index) => (
        <WelcomePerson person={person} key={index} />
      ))}
    </div>
  );
}

export default MultiWelcome;
