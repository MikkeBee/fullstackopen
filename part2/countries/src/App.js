import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Countries from "./components/Countries";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountry] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3/all").then((res) => {
      console.log(res);
      setCountry(res.data);
    });
  }, []);

  // const searchResults = () => {
  //   console.log(search);
  //   if (search == "") {
  //     return "";
  //   } else {
  //     return countries.filter((country) => {
  //       return country.name.toLowerCase().includes(search.toLowerCase());
  //     });
  //   }
  // };

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
      return <Countries searchResults={results} />;
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
      <div>{countrySwitch()}</div>
    </div>
  );
};

export default App;
