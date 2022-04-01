import React from "react";
// import styled from "styled-component";

export default function Silseub0() {
  function handleClick(event) {
    // console.log("I was clicked!");
    event.preventDefault();
    alert("I was clicked!");
  }
  function handleOnMouseOver() {
    alert("onMouseOver");
  }

  return (
    <div>
      <img
        src="https://picsum.photos/640/360"
        onMouseOver={handleOnMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
