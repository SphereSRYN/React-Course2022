import React from "react";

export default function Silseub2() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
  }

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add items</button>
      <div>{thingsElements}</div>
    </div>
  );
}
