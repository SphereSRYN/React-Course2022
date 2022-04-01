import React from "react";
import "./App.css";
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

function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }
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
      <Card />
    </div>
  );
}

export default App;
