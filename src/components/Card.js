import React from "react";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import BasicModal from "./BasicModal";

export default function Card({ cards }) {
  const MainContainer = tw.div`
    flex
    flex-wrap
`;
  const CardContainer = tw.div`
    flex
    flex-col
    mr-6
  `;
  const BgContainer = tw.div`
    w-[16.5rem]
    h-[13.1rem]
    bg-cover bg-center
    rounded-xl
    relative
  `;
  const Bookmark = tw.div`
    absolute
    inline-block
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

  const handleClick = (url) => {
    setOpen(true);
    setImgUrl(url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const makeCard = (card) => {
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
              onClick={() => handleClick(card.image_url)}
            >
              <Bookmark>
                <StarOutlinedIcon sx={{ fontSize: "24px" }} />
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
              onClick={() => handleClick(card.image_url)}
            >
              <Bookmark>
                <StarOutlinedIcon sx={{ fontSize: "24px" }} />
              </Bookmark>
            </BgContainer>
            <TextContainer>
              <FirstCol>
                <p>{card.title}</p>
                <PPercent>{card.discountPercentage}%</PPercent>
              </FirstCol>
              <SecondCol>
                <p></p>
                <pNum>
                  {card.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원
                </pNum>
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
              onClick={() => handleClick(card.brand_image_url)}
            >
              <Bookmark>
                <StarOutlinedIcon sx={{ fontSize: "24px" }} />
              </Bookmark>
            </BgContainer>
            <TextContainer>
              <FirstCol>
                <p>{card.brand_name}</p>
                <p>관심고객수</p>
              </FirstCol>
              <SecondCol>
                <p></p>
                <pNum>{card.follower}</pNum>
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
              onClick={() => handleClick(card.image_url)}
            >
              <Bookmark>
                <StarOutlinedIcon sx={{ fontSize: "24px" }} />
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

  useEffect(() => {
    console.log(cards);
  }, []);

  return (
    <MainContainer>
      {cards.map((x) => {
        return makeCard(x);
      })}
      <BasicModal open={open} handleClose={handleClose} imgUrl={imgUrl} />
    </MainContainer>
  );
}
