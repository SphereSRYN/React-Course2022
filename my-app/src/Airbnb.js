import "./Airbnb.css";
import Main from "./components/airbnb/Main";
import Navbar from "./components/airbnb/Navbar";
import Bottom from "./components/airbnb/Bottom";
import dataArray from "./data.js";
import styled from "styled-components";

function Airbnb() {
  let count = 1;
  const makingCard = dataArray.map((data) => {
    count++;
    return (
      <Bottom
        key={count}
        id={data.id}
        title={data.title}
        descrpition={data.descrpition}
        price={data.price}
        coverImg={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        openSpots={data.openSpots}
      />
    );
  });
  count = null;
  return (
    <>
      <Navbar />
      <Main />
      <Wrapper> {makingCard}</Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

export default Airbnb;
