import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { MainContainer, Container, TitleP } from "../styles/MainStyles";
import { Link } from "react-router-dom";

export default function Main() {
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
      <Container>
        <Link to="/products/list">
          <TitleP>상품 리스트</TitleP>
        </Link>
        <Card cards={cards} />
      </Container>
      <Container>
        <Link to="/bookmark">
          <TitleP>북마크 리스트</TitleP>
        </Link>
        <Card cards={bookmark.slice(0, 4)} />
      </Container>
    </MainContainer>
  );
}
