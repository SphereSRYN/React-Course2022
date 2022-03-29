import React from "react";
import styled from "styled-components";

function Bottom() {
  return (
    <Wrapper>
      <img src="/images/katie-zaferes.png" alt="" className="hero" />
      <div className="card--stats">
        <img src="/images/star.png" alt="" className="star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 49px;
  margin-left: 37px;
  font-size: 12px;
  width: 175px;
  .hero {
    border-radius: 9px;
    width: 100%;
  }

  .star {
    width: 14px;
    border-radius: 0.5px;
    margin-top: 9px;
    margin-right: 2px;
  }
  .gray {
    color: gray;
  }
`;

export default Bottom;
