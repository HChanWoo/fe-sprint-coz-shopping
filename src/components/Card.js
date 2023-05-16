import React from "react";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import BasicModal from "./BasicModal";
import Snackbar from "./Snackbar";

export default function Card({ cards }) {
  const MainContainer = tw.div`
    flex
    flex-wrap
    min-h-[18rem]
`;
  const CardContainer = tw.div`
    flex
    flex-col
    mr-6
    mt-4
  `;
  const BgContainer = tw.div`
    w-[16.5rem]
    h-[13.1rem]
    bg-cover bg-center
    rounded-xl
    relative
  `;
  const Bookmark = tw.button`
    absolute
    bottom-3 right-3
    text-[#DFDFDF]
  `;

  const TextContainer = tw.div`
    w-[16.5rem]
    mt-2
  `;
  const FirstCol = tw.div`
    flex
    font-black
    justify-between
  `;
  const PPercent = tw.p`
    text-mainColor
  `;

  const SecondCol = tw.div`
    flex
    justify-between
    mt-1
  `;

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

  const getBookmark = () => {
    let local = localStorage.getItem("bookmark");
    if (local !== null) setBookmark(JSON.parse(local));
  };

  const saveBookmark = (obj) => {
    const itemIndex = bookmark.findIndex((item) => item.id === obj.id);
    let updatedBookmark;
    if (itemIndex === -1) {
      updatedBookmark = [obj, ...bookmark];
    } else {
      updatedBookmark = bookmark.filter((item) => item.id !== obj.id);
    }
    setBookmark(updatedBookmark);
    localStorage.setItem("bookmark", JSON.stringify(updatedBookmark));
  };

  const makeCard = (card) => {
    const isSelected = bookmark.findIndex((item) => item.id === card.id) !== -1;
    switch (card.type) {
      case "Exhibition":
        return (
          <CardContainer>
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
                  saveBookmark(card);
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
          <CardContainer>
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
                  saveBookmark(card);
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
          <CardContainer>
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
                  saveBookmark(card);
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
          <CardContainer>
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
                  saveBookmark(card);
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
      {/* <Snackbar isAdd={true} /> */}
    </MainContainer>
  );
}
