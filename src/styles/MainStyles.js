import tw from "tailwind-styled-components";

const MainContainer = tw.div`
    w-full
    ml-auto
    flex
    flex-wrap
    px-16
    justify-center
  `;

const Container = tw.div`
    w-full
    mt-12 
  `;

const TitleP = tw.p`
    text-2xl
    font-black
    mb-4
  `;

export { MainContainer, Container, TitleP };
