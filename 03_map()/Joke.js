import React from "react";

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"];

const capitalizedFunc = (array) => {
  const capitalized = array.map((elem) => {
    // console.log(elem[0]);
    let [a, ...rest] = elem;
    let result1 = a.toUpperCase().toString() + rest.join("");
    let result2 = elem[0] + elem.slice(0);
    return result1;
  });
  return capitalized;
};
console.log(capitalizedFunc(names));

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const addingPtagFung = (array) => {
  let result = array.map((elem) => `<p>${elem}</p>`);
  return result;
};
console.log(addingPtagFung(pokemon));

/*
Summary~~~~

1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.
*/

export default function Joke(props) {
  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p>Punchline: {props.punchline}</p>
      <hr />
    </div>
  );
}
