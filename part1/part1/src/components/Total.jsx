import React from "react";

const Total = ({ parts }) => {
  const sumValues = () => {
    let sum = parts.reduce(
      (accumulator, current) => accumulator + current.exercises,
      0
    );
    return sum;
  };

  return (
    <p>
      <b>Number of exercises {sumValues()}</b>
    </p>
  );
};

export default Total;
