import React from "react";
import PropTypes from "prop-types";

const PersonList = (props) => {
  return (
    <React.Fragment>
      <ul>
        {props.persons.map((person) => (
          <li key={person.id}>
            {person.name}

            <button onClick={() => props.deletePerson(person)}>Delete</button>
            <button onClick={() => props.editPerson(person)}>Edit</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default PersonList;

PersonList.propTypes = {
  persons: PropTypes.array,
};
