import React from "react";
import { useEffect, useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import BasicModal from "./BasicModal";
import {
  MainContainer,
  CardContainer,
  BgContainer,
  Bookmark,
  TextContainer,
  FirstCol,
  PPercent,
  SecondCol,
} from "../styles/CardStyles";

export default function Card({ cards, setBookmarkUpdate }) {
  const [open, setOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [openObj, setOpenObj] = useState({});
  const [bookmark, setBookmark] = useState([]);

  const handleClick = (url, title, obj) => {
    setOpen(true);
    setImgUrl(url);
    setTitle(title);
    setOpenObj(obj);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getBookmark();
  }, [open]);

  useEffect(() => {
    getBookmark();
  }, []);

  const getBookmark = () => {
    let local = localStorage.getItem("bookmark");
    if (local !== null) setBookmark(JSON.parse(local));
  };

  const updatedBookmark = (obj) => {
    const itemIndex = bookmark.findIndex((item) => item.id === obj.id);
    let updatedBookmark;
    if (itemIndex === -1) {
      updatedBookmark = [obj, ...bookmark];
      setBookmarkUpdate(true);
    } else {
      updatedBookmark = bookmark.filter((item) => item.id !== obj.id);
      setBookmarkUpdate(false);
    }
    setBookmark(updatedBookmark);
    localStorage.setItem("bookmark", JSON.stringify(updatedBookmark));
  };

  const makeCard = (card) => {
    const isSelected = bookmark.findIndex((item) => item.id === card.id) !== -1;
    switch (card.type) {
      case "Exhibition":
        return (
          <CardContainer key={card.id}>
            <BgContainer
              style={{
                backgroundImage: `url(${card.image_url})`,
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => handleClick(card.image_url, card.title, card)}
            >
              <Bookmark
                onClick={(e) => {
                  e.stopPropagation();
                  updatedBookmark(card);
                }}
              >
                {isSelected ? (
                  <StarOutlinedIcon
                    sx={{ fontSize: "24px", color: "yellow" }}
                  />
                ) : (
                  <StarOutlinedIcon sx={{ fontSize: "24px" }} />
                )}
              </Bookmark>
            </BgContainer>
            <TextContainer>
              <FirstCol>
                <p>{card.title}</p>
              </FirstCol>
              <SecondCol>
                <p>{card.sub_title}</p>
              </SecondCol>
            </TextContainer>
          </CardContainer>
        );
      case "Product":
        return (
          <CardContainer key={card.id}>
            <BgContainer
              style={{
                backgroundImage: `url(${card.image_url})`,
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => handleClick(card.image_url, card.title, card)}
            >
              <Bookmark
                onClick={(e) => {
                  e.stopPropagation();
                  updatedBookmark(card);
                }}
              >
                {isSelected ? (
                  <StarOutlinedIcon
                    sx={{ fontSize: "24px", color: "yellow" }}
                  />
                ) : (
                  <StarOutlinedIcon sx={{ fontSize: "24px" }} />
                )}
              </Bookmark>
            </BgContainer>
            <TextContainer>
              <FirstCol>
                <p>{card.title}</p>
                <PPercent>{card.discountPercentage}%</PPercent>
              </FirstCol>
              <SecondCol>
                <p></p>
                <p>
                  {card.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원
                </p>
              </SecondCol>
            </TextContainer>
          </CardContainer>
        );
      case "Brand":
        return (
          <CardContainer key={card.id}>
            <BgContainer
              style={{
                backgroundImage: `url(${card.brand_image_url})`,
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() =>
                handleClick(card.brand_image_url, card.brand_name, card)
              }
            >
              <Bookmark
                onClick={(e) => {
                  e.stopPropagation();
                  updatedBookmark(card);
                }}
              >
                {isSelected ? (
                  <StarOutlinedIcon
                    sx={{ fontSize: "24px", color: "yellow" }}
                  />
                ) : (
                  <StarOutlinedIcon sx={{ fontSize: "24px" }} />
                )}
              </Bookmark>
            </BgContainer>
            <TextContainer>
              <FirstCol>
                <p>{card.brand_name}</p>
                <p>관심고객수</p>
              </FirstCol>
              <SecondCol>
                <p></p>
                <p>{card.follower}</p>
              </SecondCol>
            </TextContainer>
          </CardContainer>
        );
      case "Category":
        return (
          <CardContainer key={card.id}>
            <BgContainer
              style={{
                backgroundImage: `url(${card.image_url})`,
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => handleClick(card.image_url, card.title, card)}
            >
              <Bookmark
                onClick={(e) => {
                  e.stopPropagation();
                  updatedBookmark(card);
                }}
              >
                {isSelected ? (
                  <StarOutlinedIcon
                    sx={{ fontSize: "24px", color: "yellow" }}
                  />
                ) : (
                  <StarOutlinedIcon sx={{ fontSize: "24px" }} />
                )}
              </Bookmark>
            </BgContainer>
            <TextContainer>
              <FirstCol>
                <p>{card.title}</p>
              </FirstCol>
            </TextContainer>
          </CardContainer>
        );
      default:
        return <></>;
    }
  };

  return (
    <MainContainer>
      {cards.map((x) => {
        return makeCard(x);
      })}
      <BasicModal
        open={open}
        handleClose={handleClose}
        imgUrl={imgUrl}
        title={title}
        openObj={openObj}
      />
    </MainContainer>
  );
}
