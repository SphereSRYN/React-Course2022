import React, { useEffect, useState } from "react";

export default function SideEffect1() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);

  //   console.log("Component rendered");
  //Side Effect : 데이터를 받거나, 구독하기, 혹은 DOM을 직접 조작하는 행위
  /**
   * Quiz:
   * 1. What will happen if I put back our Star Wars API call
   *    into the effect function?
   * 2. How will the useEffect be different if I use
   *    setStarWarsData() instead of console.log()
   * 3. What SHOULD be in our dependencies array in this case?
   */
  React.useEffect(
    function () {
      console.log("Effect ran");
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
