import React from "react";

const Country = ({ searchResults }) => {
  return (
    <div>
      {searchResults.map((country) => (
        <h2 key={country.name.common}>{country.name.common}</h2>
      ))}
    </div>
  );
};

export default Country;
