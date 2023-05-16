import React from "react";
import { MainContainer, TextContiner, Text } from "../styles/FooterStyles";

export default function Footer() {
  return (
    <MainContainer>
      <TextContiner>
        <Text>개인정보 처리방침 | 이용약관</Text>
        <Text>All rights reserved @ Codestates</Text>
      </TextContiner>
    </MainContainer>
  );
}
