import React from "react";
import "./App.css";
import FetchingData from "./components/FetchingData";
import Form from "./components/Form";
import MemeNew from "./components/MemeNew";
import SideEffect1 from "./components/SideEffect1";
import SignUp from "./components/SignUp";
import WindowTracker from "./components/WindowTracker";

function App() {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  return (
    <div className="App">
      {/* <Form /> */}
      {/* <SignUp /> */}
      {/* <MemeNew /> */}
      {/* <FetchingData /> */}
      {/* <SideEffect1 /> */}
      <MemeNew />
    </div>
  );
}

export default App;
