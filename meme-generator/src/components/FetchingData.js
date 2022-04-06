import React, { useEffect, useState } from "react";

export default function FetchingData() {
  const [stData, setStData] = useState({});

  // 1. GET the data (fetch) 또는 axio
  // 2. Save it to the State

  console.log("Component rendered");
  //   fetch("https://swapi.dev/api/people/1")
  //     .then((res) => res.json())
  //     .then((data) => setStData(data)); //무한렌더링지옥
  // fetch가 top level에 있으니까 render할때마다 fetch중인거얌

  useEffect(function () {
    fetch("https://swapi.dev/api/people/1").then((res) => res.json());
    //   .then((data) => setStData(data));
  });
  return (
    <div>
      {" "}
      <pre>{JSON.stringify(stData, null, 2)}</pre>
    </div>
  );
}
