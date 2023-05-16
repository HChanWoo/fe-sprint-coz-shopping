import tw from "tailwind-styled-components";
const MainContainer = tw.div`
    flex
    flex-wrap
    min-h-[18rem]
`;
const CardContainer = tw.div`
    flex
    flex-col
    mr-6
    mt-4
  `;
const BgContainer = tw.div`
    w-[16.5rem]
    h-[13.1rem]
    bg-cover bg-center
    rounded-xl
    relative
  `;
const Bookmark = tw.button`
    absolute
    bottom-3 right-3
    text-[#DFDFDF]
  `;

const TextContainer = tw.div`
    w-[16.5rem]
    mt-2
  `;
const FirstCol = tw.div`
    flex
    font-black
    justify-between
  `;
const PPercent = tw.p`
    text-mainColor
  `;

const SecondCol = tw.div`
    flex
    justify-between
    mt-1
  `;

export {
  MainContainer,
  CardContainer,
  BgContainer,
  Bookmark,
  TextContainer,
  FirstCol,
  PPercent,
  SecondCol,
};
