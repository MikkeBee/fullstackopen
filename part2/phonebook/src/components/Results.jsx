import React from "react";
import NumberServices from "../services/NumberServices";

const Results = ({ searchResults }) => {
  const deleteHandler = (name, id) => {
    const popup = window.confirm(`Delete ${name}?`);
    if (popup) {
      NumberServices.deletePerson(id);
      window.location.reload();
    } else {
      return;
    }
  };

  return (
    <div>
      <ul>
        {searchResults().map((person) => (
          <li key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => deleteHandler(person.name, person.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
