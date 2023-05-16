import React from "react";
import tw from "tailwind-styled-components";

export default function Footer() {
  const MainContainer = tw.div`
    w-full
    flex flex-col
    items-center
    my-4
    border-t border-gray-200
    py-5
  `;
  const TextContiner = tw.div`
    text-center
  `;
  const Text = tw.p`
    text-xs
    leading-5
  `;
  return (
    <MainContainer>
      <TextContiner>
        <Text>개인정보 처리방침 | 이용약관</Text>
        <Text>All rights reserved @ Codestates</Text>
      </TextContiner>
    </MainContainer>
  );
}
