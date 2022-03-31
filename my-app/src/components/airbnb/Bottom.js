import React from "react";
import styled from "styled-components";

function Bottom(/*{ data }*/ data) {
  console.log("props🎈, ", data);
  let badgeText;
  if (data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (data["stats"].location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <Wrapper>
      {/*
      
      방법 1
      {!props.openSpots && <Badge>SOLDOUT</Badge>} */}
      {/* 
      
      방법 2
      {badgeText ? <div className="badge">{badgeText}</div> : ""} */}

      {/*
      
      방법 3 */}
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={`../images/${data.coverImg}`} alt="" className="hero" />
      <div className="card--stats">
        <img src="../images/star.png" alt="" className="star" />
        <span>{data.rating}</span>
        <span className="gray">({data["stats"].reviewCount}) • </span>
        <span className="gray">{data["stats"].location}</span>
      </div>
      <p>{data.title}</p>
      <p>
        <span className="bold">From ${data.price}</span> / person
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
