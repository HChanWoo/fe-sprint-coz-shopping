import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

export default function BookMark() {
  const MainContainer = tw.div`
    w-[calc(100%-14rem)]
    ml-auto
    flex
    flex-wrap
  `;
  return <MainContainer></MainContainer>;
}
