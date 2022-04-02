import React from "react";
import "./App.css";
import Box from "./components/Box";
import Card from "./components/Card";
import CardParent from "./components/Card";
import Count from "./components/Count";

import Header from "./components/Header";
import Meme from "./components/Meme";
import MemeNew from "./components/MemeNew";

import Silseub2 from "./components/Silseub2";
import Silseub3 from "./components/Silseub3";
import Silseub4 from "./components/Silseub4";
import Silseub5 from "./components/Silseub5";
import Silseub6 from "./components/Silseub6";
import Silseub7 from "./components/Silseub7";
import boxes from "./data/boxs";
function App() {
  // const [count, setCount] = React.useState(0);

  // function add() {
  //   setCount((prevCount) => prevCount + 1);
  // }

  // function subtract() {
  //   setCount((prevCount) => prevCount - 1);
  // }

  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    /**
     * Challenge: use setSquares to update the
     * correct square in the array.
     *
     * Make sure not to directly modify state!
     *
     * Hint: look back at the lesson on updating arrays
     * in state if you need a reminder on how to do this
     */
    setSquares((prevSquares) => {
      // const newSquares = [];
      // for (let i = 0; i < prevSquares.length; i++) {
      //   const currentSquare = prevSquares[i];
      //   if (currentSquare.id === id) {
      //     const updatedSquare = {
      //       ...currentSquare,
      //       on: !currentSquare.on,
      //     };
      //     newSquares.push(updatedSquare);
      //   } else {
      //     newSquares.push(currentSquare);
      //   }
      // }
      // return newSquares;
      const newSquares = prevSquares.map((elem) => {
        return elem.id === id ? { ...elem, on: !elem.on } : elem;
      });
      return newSquares;
    });
  }

  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ));

  return (
    <div className="App">
      {/* <Header />
      <MemeNew />
      {/*  */}
      {/* <Silseub2 />  */}
      {/* <Silseub3 /> */}
      {/* <Silseub4 /> */}
      {/* <Silseub5 /> */}
      {/* <Silseub6 /> */}
      {/* <Silseub7 /> */}
      {/* <Card /> */}
      {squareElements}
    </div>
  );
}

export default App;
