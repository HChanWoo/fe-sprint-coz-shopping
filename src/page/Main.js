import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import tw from "tailwind-styled-components";

export default function Main() {
  const MainContainer = tw.div`
    w-full
    h-full
    ml-auto
    flex
    flex-wrap
    px-16
    justify-center
  `;
  const [cards, setCards] = useState([]);

  const getPopular = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
      .then((res) => res.json())
      .then((res) => {
        setCards(res);
      });
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <MainContainer>
      <Card cards={cards} />
    </MainContainer>
  );
}
