import React from "react";
import styled from "styled-components";
function Main() {
  return (
    <Wrapper>
      <img src="/images/photo-grid.png" alt="" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-top: 26px;
  padding-right: 77px;
  padding-left: 77px;
  align-items: center;
  max-width: 700px;
  img {
    width: 395.91px;
    height: 232px;
  }
  h1 {
    margin-top: 32px;
    width: 347px;
    height: 40px;
    left: 36px;
    line-height: 110%;
    color: #000000;
  }

  p {
    width: 320px;
    height: 56px;
    /* margin-left: 36px; */

    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 110%;
    /* or 18px */

    color: #222222;
  }
`;
export default Main;
