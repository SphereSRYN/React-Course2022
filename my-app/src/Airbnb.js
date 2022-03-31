import "./Airbnb.css";
import Main from "./components/airbnb_ryun/Main";
import Navbar from "./components/airbnb_ryun/Navbar";
import Bottom from "./components/airbnb_ryun/Bottom";
import dataArray from "./data.js";
import styled from "styled-components";

function Airbnb() {
  let count = 1;
  const makingCard = dataArray.map((data) => {
    count++;
    return (
      <Bottom
        /*
         key={count}
        //key={data.id}
        // id={data.id}
        // title={data.title}
        // descrpition={data.descrpition}
        // price={data.price}
        // coverImg={data.coverImg}
        // rating={data.stats.rating}
        // reviewCount={data.stats.reviewCount}
        // location={data.location}
        // openSpots={data.openSpots}
        data={data}
        */
        key={data.id}
        {...data}
      />
    );
  });
  count = null;
  return (
    <>
      <Navbar />
      <Content>
        <Main />
        <CardFlow> {makingCard}</CardFlow>
      </Content>
    </>
  );
}

const Content = styled.div`
  margin-left: 37px;
`;
const CardFlow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  flex-direction: row;
`;

export default Airbnb;
