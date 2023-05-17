import React from "react";
import { Link } from "react-router-dom";
import MenuListComposition from "./MenuListComposition";
import { MainContainer, LogoContainer } from "../styles/HeaderStyles";

export default function Header() {
  return (
    <MainContainer>
      <Link to="/">
        <LogoContainer>
          <img src="/headerLogo.png" alt="logo" />
        </LogoContainer>
      </Link>
      <MenuListComposition />
    </MainContainer>
  );
}
