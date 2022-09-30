import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Countries from "./components/Countries";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3/all").then((res) => {
      console.log(res);
      setCountries(res.data);
      console.log(countries);
    });
  }, []);

  const searchHandler = (e) => {
    setResults(
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  };

  const countrySwitch = () => {
    if (results.length > 10) {
      return <p>Too many countries to show, please refine your search.</p>;
    } else if (results.length < 10 && results.length > 1) {
      return (
        <Countries searchResults={results} searchHandler={searchHandler} />
      );
    } else if (results.length === 1) {
      return <Country searchResults={results} />;
    } else if (results.length < 1) {
      return (
        <p>Sorry, we couldn't find any countries that match your search.</p>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Search searchHandler={searchHandler} />
      {countrySwitch(results)}
    </div>
  );
};

export default App;
