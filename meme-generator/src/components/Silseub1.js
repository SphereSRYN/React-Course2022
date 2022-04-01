import React from "react";
// import styled from "styled-component";

export default function Silseub() {
  const thingsArray = ["Thing 1", "Thing 2"];

  const result = thingsArray.map((elem) => `<p>${elem}</p>`);

  function addElement(e) {
    // thingsArray.push();
    thingsArray.push(`Thing ${thingsArray.length + 1}`);
    console.log(thingsArray);
  }
  /**
   * Challenge: Add an event listener to the button so when
   * it is clicked, it adds another thing to our array
   *
   * Hint: use the array length + 1 to determine the number
   * of the "Thing" being added. Also, have you event listener
   * console.log(thingsArray) after adding the new item to the
   * array
   *
   * Spoiler: the page won't update when new things get added
   * to the array!
   */

  return (
    <div>
      <button onClick={addElement}>Add items</button>
      <div>{result}</div>
    </div>
  );
}
