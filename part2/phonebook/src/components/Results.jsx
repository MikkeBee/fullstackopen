import React from "react";

const Results = ({ searchResults }) => {
  return (
    <div>
      <ul>
        {searchResults().map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
