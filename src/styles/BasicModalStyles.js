import tw from "tailwind-styled-components";
const ImgContiner = tw.div`
    absolute
    top-[50%]
    left-[50%]
    translate-x-[-50%]
    translate-y-[-50%]
    w-[744px]
    max-h-[80vh]
    bg-[rgba(0,0,0,0.5)]
    rounded-3xl
    overflow-hidden
  `;

const CloseButton = tw.button`
    absolute
    top-6 right-6
    text-white
    hover:text-gray-100
  `;

const Bookmark = tw.button`
    absolute
    flex
    bottom-6 left-6
    text-[#DFDFDF]
    items-center
  `;
const Title = tw.p`
    ml-4
    text-white
    text-xl
    font-black
  `;

export { ImgContiner, CloseButton, Bookmark, Title };
