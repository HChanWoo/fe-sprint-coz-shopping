import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import "react-toastify/dist/ReactToastify.css";
import tw from "tailwind-styled-components";

export default function Toast({ bookmarkUpdate }) {
  const Continer = tw(ToastContainer)`
    w-[350px]
  `;

  useEffect(() => {
    if (bookmarkUpdate === "") {
      return;
    }
    if (bookmarkUpdate) {
      toast("상품이 북마크에 추가되었습니다.", {
        icon: <StarOutlinedIcon sx={{ fontSize: "24px", color: "yellow" }} />,
      });
    } else {
      toast("상품이 북마크에서 제거되었습니다.", {
        icon: <StarOutlinedIcon />,
      });
    }
  }, [bookmarkUpdate]);

  return (
    <Continer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={true}
      limit={10}
    />
  );
}
