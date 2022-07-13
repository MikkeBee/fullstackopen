import React from "react";

const Results = ({ searchResults, deleteHandler }) => {
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
