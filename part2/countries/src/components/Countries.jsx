import React from "react";
import Country from "./Country";
import { useState } from "react";

const Countries = ({ searchResults }) => {
  const [showCountry, setShowCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState();

  return (
    <div>
      {searchResults.map((country) => (
        <div key={country.name.common}>
          {!showCountry && (
            <p>
              {country.name.common}{" "}
              <button
                onClick={() => {
                  setShowCountry(true);
                  setSelectedCountry(country.name.common);
                }}
              >
                Show more
              </button>
            </p>
          )}
          {showCountry && selectedCountry === country.name.common && (
            <Country searchResults={[country]} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Countries;
