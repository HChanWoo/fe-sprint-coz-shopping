import tw from "tailwind-styled-components";
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
export { MainContainer, LogoContainer };
