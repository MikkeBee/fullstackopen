import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Search from "./components/Search";
import Results from "./components/Results";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchResults = () => {
    if (search == "") {
      return persons;
    } else {
      return persons.filter((person) => {
        return person.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const peep = {
      name: newName,
      number: newNumber,
    };

    const personExists = persons.find((element) => element.name === newName)
      ? true
      : false;

    if (personExists) {
      window.alert(`${newName} is already in the phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      setPersons(persons.concat(peep));
      setNewName("");
      setNewNumber("");
    }
  };

  const personHandler = (event) => {
    setNewName(event.target.value);
  };

  const numberHandler = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchHandler={searchHandler} />
      <Form
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        personHandler={personHandler}
        numberHandler={numberHandler}
      />
      <h2>Numbers</h2>
      <Results searchResults={searchResults} />
    </div>
  );
};

export default App;
