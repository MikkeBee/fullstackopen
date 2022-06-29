import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);

  const voteCopy = [...votes];

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const clickHandler = () => {
    setSelected(randomNumber(0, 6));
  };

  const voteHandler = () => {
    setVotes(
      votes.map((item, index) => (index === selected ? item + 1 : item))
    );
  };

  const greatestVotes = () => {
    const highVote = Math.max(...voteCopy);
    const location = voteCopy.indexOf(highVote);
    return location;
  };

  return (
    <div>
      <h2>{anecdotes[selected]}</h2>
      <p>This anectdote has {voteCopy[selected]} votes</p>
      <button onClick={voteHandler}>Vote</button>
      <button onClick={clickHandler}>Next Anecdote</button>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[greatestVotes()]}</p>
      <p>
        This anecdote is the most popular with {voteCopy[greatestVotes()]}{" "}
        votes.
      </p>
    </div>
  );
};

export default App;
