import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import {
  MainContainer,
  Container,
  CategoryContainer,
  Category,
  SelectedP,
} from "../styles/BookMarkStyles";

export default function BookMark() {
  const [bookmark, setBookmark] = useState([]);
  const [category, setCategory] = useState("All");

  const categoryList = [
    { title: "전체", type: "All", img_url: "/product_all.svg" },
    { title: "상품", type: "Product", img_url: "/product_product.svg" },
    { title: "카테고리", type: "Category", img_url: "/product_category.svg" },
    { title: "기획전", type: "Exhibition", img_url: "/product_exhibition.svg" },
    { title: "브랜드", type: "Brand", img_url: "/product_brand.svg" },
  ];

  const CategoryContiner = () => {
    return (
      <CategoryContainer>
        {categoryList.map((ele) => {
          return (
            <Category onClick={() => setCategory(ele.type)}>
              <img src={ele.img_url} alt="logo" />
              {ele.type === category ? (
                <SelectedP>{ele.title}</SelectedP>
              ) : (
                <p>{ele.title}</p>
              )}
            </Category>
          );
        })}
      </CategoryContainer>
    );
  };

  const getBookmark = () => {
    let local = localStorage.getItem("bookmark");
    if (local !== null) setBookmark((prevBookmark) => JSON.parse(local));
  };

  useEffect(() => {
    getBookmark();
  }, [category]);

  return (
    <MainContainer>
      <CategoryContiner />
      <Container>
        {category === "All" ? (
          <Card cards={bookmark.splice(0, 10)} />
        ) : (
          <Card
            cards={bookmark.filter((x) => x.type === category).splice(0, 10)}
          />
        )}
      </Container>
    </MainContainer>
  );
}
