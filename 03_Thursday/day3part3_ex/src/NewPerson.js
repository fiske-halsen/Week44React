import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function NewPerson(props) {
  const [person, setPerson] = useState(props.newPerson);

  const onChange = (evt) => {
    const value = evt.target.value;
    person.name = value;
    setPerson({ ...person });
  };

  useEffect(() => setPerson({ ...props.newPerson }), [props.newPerson]);

  const handleSubmit = (evt) => {
    if (person.name === "") {
      return;
    }
    props.addPerson(person);
    evt.preventDefault();
  };

  const title = person.id === "" ? "Create new Person" : "Edit Person";

  return (
    <div>
      <form>
        <h4>{title}</h4>
        <input value={person.name} onChange={onChange} />
        <p>{person.name} </p>
        <br />
        <br />
        <button onClick={handleSubmit} className="btn btn-info">
          Save
        </button>
      </form>
      {person.id !== "" && <p>Editing todo with</p>}
    </div>
  );
}

export default NewPerson;
NewPerson.propTypes = {
  newPerson: PropTypes.object,
  addPerson: PropTypes.func,
};
