import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import tw from "tailwind-styled-components";

export default function Main() {
  const MainContainer = tw.div`
    w-full
    ml-auto
    flex
    flex-wrap
    px-16
    justify-center
  `;

  const Continer = tw.div`
    w-full
    mt-12 
  `;

  const TitleP = tw.p`
    text-2xl
    font-black
    mb-4
  `;

  const [cards, setCards] = useState([]);
  const [bookmark, setBookmark] = React.useState([]);

  const getPopular = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
      .then((res) => res.json())
      .then((res) => {
        setCards(res);
      });
  };

  useEffect(() => {
    getPopular();
    getBookmark();
  }, []);

  const getBookmark = () => {
    let local = localStorage.getItem("bookmark");
    if (local !== null) setBookmark(JSON.parse(local));
  };

  return (
    <MainContainer>
      <Continer>
        <TitleP>상품 리스트</TitleP>
        <Card cards={cards} />
      </Continer>
      <Continer>
        <TitleP>북마크 리스트</TitleP>
        <Card cards={bookmark.slice(0, 4)} />
      </Continer>
    </MainContainer>
  );
}
