import tw from "tailwind-styled-components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./page/Main";
import BookMark from "./page/BookMark";
import ProductList from "./page/ProductList";
import "./App.css";

function App() {
  const Container = tw.div`
    w-full
    h-full
`;
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
