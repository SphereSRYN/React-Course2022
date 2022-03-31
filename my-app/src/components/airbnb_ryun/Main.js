import React from "react";
import styled from "styled-components";
function Main() {
  return (
    <Wrapper>
      <img src="/images/photo-grid.png" alt="" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-top: 30px;
  /* margin-left: 36px; */
  max-width: 700px;
  margin-bottom: 0px;
  h1 {
    margin-bottom: 16px;
  }
  img {
    margin-left: 41px;
    width: 395.91px;
    height: 232px;
    border-radius: 9px;
  }
  p {
    margin-top: 0;
    max-width: 320px;
    height: 56px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 110%;
    /* border: 1px solid gray; */
  }
`;
export default Main;
