import tw from "tailwind-styled-components";
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
export { MainContainer, TextContiner, Text };
