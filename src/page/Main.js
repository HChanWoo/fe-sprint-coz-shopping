import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { MainContainer, Container, TitleP } from "../styles/MainStyles";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";

export default function Main() {
  const [cards, setCards] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [bookmarkUpdate, setBookmarkUpdate] = useState("");

  const getPopular = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
      .then((res) => res.json())
      .then((res) => {
        setCards(res);
      });
  };

  const getBookmark = () => {
    let local = localStorage.getItem("bookmark");
    if (local !== null) setBookmark(JSON.parse(local));
  };

  useEffect(() => {
    getPopular();
    getBookmark();
  }, []);

  // useEffect(() => {
  //   getBookmark();
  // }, [bookmarkUpdate]);

  return (
    <MainContainer>
      <Container>
        <Link to="/products/list">
          <TitleP>상품 리스트</TitleP>
        </Link>
        <Card cards={cards} setBookmarkUpdate={setBookmarkUpdate} />
      </Container>
      <Container>
        <Link to="/bookmark">
          <TitleP>북마크 리스트</TitleP>
        </Link>
        <Card
          cards={bookmark.slice(0, 4)}
          setBookmarkUpdate={setBookmarkUpdate}
        />
      </Container>
      <Toast bookmarkUpdate={bookmarkUpdate} />
    </MainContainer>
  );
}
