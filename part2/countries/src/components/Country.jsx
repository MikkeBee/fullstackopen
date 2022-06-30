import React from "react";
import Weather from "./Weather";

const Country = ({ searchResults }) => {
  const languages = (country) => {
    return Object.values(country.languages);
  };

  return (
    <div>
      {searchResults.map((country) => (
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
          <p>
            Capital: {country.capital[0]} <br /> Area: {country.area}
          </p>
          <h3>Languages: </h3>
          <ul>
            {languages(country).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <p>
            <img src={country.flags[1]} />
          </p>
          <Weather country={country} />
        </div>
      ))}
    </div>
  );
};

export default Country;
