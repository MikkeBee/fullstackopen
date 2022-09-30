import React from "react";

const Search = ({ searchHandler }) => {
  return (
    <div>
      Find countries <input onChange={searchHandler} />
    </div>
  );
};

export default Search;
