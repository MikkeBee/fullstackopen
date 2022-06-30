import React from "react";

const Countries = ({ searchResults }) => {
  return (
    <div>
      {searchResults.map((country) => (
        <p key={country.name.common}>{country.name.common}</p>
      ))}
    </div>
  );
};

export default Countries;
