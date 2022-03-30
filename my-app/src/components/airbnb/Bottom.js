import React from "react";
import styled from "styled-components";

function Bottom(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <Wrapper>
      {/* {!props.openSpots && <Badge>SOLDOUT</Badge>} */}
      {/* {badgeText ? <div className="badge">{badgeText}</div> : ""} */}
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} alt="" className="hero" />
      <div className="card--stats">
        <img src="../images/star.png" alt="" className="star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 49px;
  margin-left: 37px;
  font-size: 12px;
  width: 175px;
  .badge {
    position: absolute;
    top: 6px;
    left: 6px;
    background-color: white;
    padding: 5px 7px;
    border-radius: 2px;
    font-weight: bold;
  }
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
