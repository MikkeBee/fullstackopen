import React from "react";

const Buttons = ({ goodClick, neutralClick, badClick }) => {
  return (
    <div>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>
    </div>
  );
};

export default Buttons;
