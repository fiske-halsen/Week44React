import { v4 as uuid } from "uuid";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import PersonList from "./PersonList";
import NewPerson from "./NewPerson";

function App() {
  const initialData = [
    { id: uuid(), name: "Peter" },
    { id: uuid(), name: "Ole" },
    { id: uuid(), name: "Jan" },
  ];

  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });

  const addPerson = (person) => {
    if (person.id === "") {
      person.id = uuid();
      persons.push(person);
    } else {
      let personToEdit = persons.find((t) => t.id === person.id);
      personToEdit.name = person.name;
    }

    setPersons([...persons]);
    setNewPerson({ id: "", name: "" });
  };

  const deletePerson = (person) => {
    const newArray = persons.filter((element) => element.id !== person.id);
    setPersons(newArray);
  };

  const editPerson = (person) => {
    setNewPerson({ id: person.id, name: person.name });
  };

  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        All Persons - Complete me
      </h2>

      <div className="row">
        <div className="col-6 allPersons">
          <PersonList
            persons={persons}
            deletePerson={deletePerson}
            editPerson={editPerson}
          />
        </div>
        <div className="col-5 newPerson">
          <NewPerson addPerson={addPerson} newPerson={newPerson} />
        </div>
      </div>
    </div>
  );
}

export default App;
