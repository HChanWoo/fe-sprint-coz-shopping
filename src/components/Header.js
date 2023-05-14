import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import MenuListComposition from "./MenuListComposition";

export default function Header() {
  const MainContainer = tw.header`
    flex
    w-full
    h-20
    items-center
    justify-between
    px-16
    shadow-md
    sticky
    top-0
    bg-white
    z-50
  `;
  const LogoContainer = tw.span`
    w-100
  `;

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
