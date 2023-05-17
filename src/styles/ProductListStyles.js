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
    my-12
  `;

const CategoryContainer = tw.div`
    flex
    mt-10
    text-center
  `;
const Category = tw.button`
    mx-5
    font-black
  `;
const SelectedP = tw.p`
    text-mainColor
    inline-block
    border-b-2 border-mainColor
  `;

export { MainContainer, Container, CategoryContainer, Category, SelectedP };
