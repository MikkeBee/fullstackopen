import React from "react";

const Search = ({ searchHandler }) => {
  return (
    <div>
      Filter entries <input onChange={searchHandler} />
    </div>
  );
};

export default Search;
