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

  const categoryType = {
    ALL: { id: 1, title: "전체", type: "All", img_url: "/product_all.svg" },
    PRODUCT: {
      id: 2,
      title: "상품",
      type: "Product",
      img_url: "/product_product.svg",
    },
    CATEGORY: {
      id: 3,
      title: "카테고리",
      type: "Category",
      img_url: "/product_category.svg",
    },
    EXHIBITION: {
      id: 4,
      title: "기획전",
      type: "Exhibition",
      img_url: "/product_exhibition.svg",
    },
    BRAND: {
      id: 5,
      title: "브랜드",
      type: "Brand",
      img_url: "/product_brand.svg",
    },
  };
  const categoryKeys = Object.keys(categoryType);

  const CategoryContiner = () => {
    return (
      <CategoryContainer>
        {categoryKeys.map((key) => {
          const value = categoryType[key];
          return (
            <Category onClick={() => setCategory(value.type)}>
              <img src={value.img_url} alt="logo" />
              {value.type === category ? (
                <SelectedP>{value.title}</SelectedP>
              ) : (
                <p>{value.title}</p>
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
