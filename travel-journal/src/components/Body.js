import React from "react";
import Journals from "./Journals";
import Navbar from "./Navbar";
import data from "../data/data.js";
export default function Body() {
  console.log(data);
  let count = 1;
  const jounalsList = data.map((elem) => {
    return <Journals key={count} journals={elem} />;
    count++;
  });
  count = null;
  return (
    <>
      <Navbar />
      {jounalsList}
    </>
  );
}
