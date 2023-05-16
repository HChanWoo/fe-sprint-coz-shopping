import * as React from "react";
import tw from "tailwind-styled-components";
import Modal from "@mui/material/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

export default function BasicModal(props) {
  const { open, handleClose, imgUrl, title, openObj } = props;

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

  const [bookmark, setBookmark] = React.useState([]);

  React.useEffect(() => {
    getBookmark();
  }, []);

  const getBookmark = () => {
    let local = localStorage.getItem("bookmark");
    if (local !== null) setBookmark(JSON.parse(local));
  };

  const saveBookmark = (obj) => {
    const itemIndex = bookmark.findIndex((item) => item.id === obj.id);
    let updatedBookmark;
    if (itemIndex === -1) {
      updatedBookmark = [...bookmark, obj];
    } else {
      updatedBookmark = bookmark.filter((item) => item.id !== obj.id);
    }
    setBookmark(updatedBookmark);
    localStorage.setItem("bookmark", JSON.stringify(updatedBookmark));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ImgContiner>
          <CloseButton onClick={handleClose}>
            <CloseOutlinedIcon />
          </CloseButton>
          <Bookmark
            onClick={(e) => {
              e.stopPropagation();
              saveBookmark(openObj);
            }}
          >
            {bookmark.findIndex((item) => item.id === openObj.id) !== -1 ? (
              <StarOutlinedIcon sx={{ fontSize: "24px", color: "yellow" }} />
            ) : (
              <StarOutlinedIcon sx={{ fontSize: "24px" }} />
            )}
            <Title>{title}</Title>
          </Bookmark>
          <img src={imgUrl} alt="img" />
        </ImgContiner>
      </Modal>
    </div>
  );
}
