import React from "react";
import "../css/GoOut.css";
export default function Silseub5() {
  //삼항연산자를 Ternary operator라고 부르는구낭

  //let answer; // Use ternary here
  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  const [isGoingOut, setIsGoingOut] = React.useState(true);

  //   function flips() {
  //     // setIsGoingOut((currentState) => {
  //     //    return currentState ? true : false;
  //     // });
  //     // setIsGoingOut((prevState) => (prevState ? false : true));
  //     setIsGoingOut((prevState) => !prevState);
  //     }
  function changeMind() {
    setIsGoingOut((prevState) => !prevState);
  }

  return (
    <div className="state-body">
      <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div className="state--value" onClick={changeMind}>
          <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
      </div>
    </div>
  );
}
