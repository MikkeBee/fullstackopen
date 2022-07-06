import { useState, useEffect } from "react";
import Form from "./components/Form";
import Search from "./components/Search";
import Results from "./components/Results";
import NumberServices from "./services/NumberServices";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const getPersons = () => {
    NumberServices.getInfo().then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(() => {
    getPersons();
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

  const updater = (id) => {
    const person = persons.find((n) => n.id === id);
    const updatedPerson = { ...person, number: newNumber };
    NumberServices.updatePerson(id, updatedPerson).then(() => {
      const newPersons = persons.map((person) =>
        person.id === id ? updatedPerson : person
      );
      setPersons(newPersons);
      setNewName("");
      setNewNumber("");
    });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const peep = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const personExists = persons.find((element) => element.name === newName)
      ? true
      : false;

    if (personExists) {
      const person = persons.find((element) => element.name === newName);
      if (
        window.confirm(
          `${newName} is already in the phonebook. Would you like to replace the old number with a new one?`
        )
      ) {
        updater(person.id);
      } else {
        setNewName("");
        setNewNumber("");
      }
    } else {
      NumberServices.createPerson(peep).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      });
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
