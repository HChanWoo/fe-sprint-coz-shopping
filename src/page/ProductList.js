import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import {
  MainContainer,
  Container,
  CategoryContainer,
  Category,
  SelectedP,
} from "../styles/ProductListStyles";
import { useInView } from "react-intersection-observer";

export default function ProductList() {
  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const [showCards, setShowCards] = useState([]);

  const [ref, inView] = useInView();

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

  const getPopular = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
      .then((res) => res.json())
      .then((res) => {
        setCards(res);
        setShowCards(res.slice(0, 10));
      });
  };

  useEffect(() => {
    getPopular();
  }, []);

  useEffect(() => {
    setIndex(0);
    setShowCards(cards.filter((x) => x.type === category).slice(0, 10));
  }, [category]);

  useEffect(() => {
    if (inView) {
      category === "All"
        ? setIndex((previous) => (previous + 10) % 100)
        : setIndex((previous) => (previous + 10) % 25);
      setShowCards((previous) => [
        ...previous,
        ...getCards(index, index + 10, category),
      ]);
    }
  }, [inView]);

  const getCards = (start, end, category) => {
    if (category === "All") {
      return cards.slice(start, end);
    }
    return cards.filter((x) => x.type === category).slice(start, end);
  };

  return (
    <MainContainer>
      <CategoryContiner />
      <Container>
        <Card cards={showCards} />
      </Container>
      <div ref={ref} style={{ width: "100vw" }}></div>
    </MainContainer>
  );
}
