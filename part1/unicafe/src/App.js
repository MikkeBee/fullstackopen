import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Buttons from "./components/Buttons";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const neutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const badClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  const average = () => {
    if (good === 0 && bad === 0) {
      return 0;
    } else {
      return (good - bad) / total;
    }
  };

  const positive = () => {
    if (good === 0 && bad === 0) {
      return 0;
    } else {
    }
    return (good / total) * 100 + " %";
  };

  return (
    <div>
      <Header />
      <Buttons
        goodClick={goodClick}
        neutralClick={neutralClick}
        badClick={badClick}
      />
      <h2>Statistics</h2>
      {good === 0 && bad === 0 && neutral === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Results
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          average={average()}
          positive={positive()}
        />
      )}
    </div>
  );
};

export default App;
