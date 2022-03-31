import React from "react";
import styled from "styled-components";

function Bottom(/*{ data }*/ data) {
  console.log("props🎈, ", data);
  let badgeText;
  if (data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (data.location === "Online") {
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
      <img src={`../images/${data.coverImg}`} alt="" className="cover" />
      <div className="stats">
        <img src="../images/star.png" alt="" className="star" />
        <span>{parseFloat(data["stats"].rating).toFixed(1)}</span>
        <span className="gray">({data["stats"].reviewCount}) • </span>
        <span className="gray">{data.location}</span>
      </div>
      <p className="title">{data.title}</p>
      <p className="price">
        <span className="bold">From ${data.price}</span> / person
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 32px;
  font-size: 12px;
  width: 175px;
  position: relative;
  .cover {
    width: 176px;
    height: 235px;
    border-radius: 9px;
    align-self: center;
  }
  .stats {
    margin-top: 4px;
    display: flex;
    align-items: center;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .star {
    height: 14px;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .price {
    margin-top: 4px;
  }

  .badge {
    margin: 6px 6px;
    padding: 5px 5px;
    position: absolute;
    width: 61px;
    height: 20px;
    background-color: white;
    font-weight: 400;
    font-size: 10.24px;
    line-height: 110%;
    text-align: center;
    border-radius: 2px;
  }

  .gray {
    color: gray;
  }
`;

export default Bottom;
