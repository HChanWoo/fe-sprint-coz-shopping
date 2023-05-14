import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

export default function ProductList() {
  const MainContainer = tw.div`
    w-[calc(100%-14rem)]
    ml-auto
    flex
    flex-wrap
  `;
  return <MainContainer></MainContainer>;
}
