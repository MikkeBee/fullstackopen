import React from "react";

const Form = ({
  addPerson,
  newName,
  newNumber,
  personHandler,
  numberHandler,
}) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <h2>Add a new person</h2>
        <div>
          name: <input value={newName} onChange={personHandler} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
