import React from "react";
import "../css/Counter.css";
export default function Silseub4() {
  let initCount = 0;
  const [count, setCount] = React.useState(initCount);
  //console.log(setCount.arguments);
  function plusCount() {
    /*
        newCount = count + 1;
        setCount(count + 1);
        callback func
        setCount(function (prevCount) {
        return prevCount + 1;
        });
       */
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     *
     * you should pass a callback function
     * to your state setter function
     * instead of using state directly.
     *
     * This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     * 이미 알다시피 현재값에 다이렉트로 접근해서 값을 변경하는 거는 안됨
     * setState사용할때 현재값을 새값에 사용하고 싶으면 콜백함수로 ㄱㄱ
     * 콜백함수의 기본 파라미터로 현재값을 제공해줌
     */
    setCount((prevCount) => prevCount + 1);
    // setCount(newCount);
  }
  function minusCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="mainBody">
      <div className="counter">
        <button className="counter--minus" onClick={minusCount}>
          –
        </button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={plusCount}>
          +
        </button>
      </div>
    </div>
  );
}
