import "./Airbnb.css";
import Main from "./components/airbnb/Main";
import Navbar from "./components/airbnb/Navbar";
import Bottom from "./components/airbnb/Bottom";

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

function Airbnb() {
  return (
    <>
      <Navbar />
      <Main />
      <Bottom />
    </>
  );
}

export default Airbnb;
