import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrap>
      <img src="/images/airbnb-logo.png" alt="" />
    </Wrap>
  );
};

const Wrap = styled.nav`
  height: 70px;
  display: flex;
  background-color: #ffffff;
  /* border-radius: 2px; */
  box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
  margin-left: 0;
  margin-top: 0;
  padding: 0 0;
  img {
    width: 82.02px;
    height: 25.35px;
    margin-left: 30px;
    margin-top: 22px;
  }
`;
export default Navbar;
