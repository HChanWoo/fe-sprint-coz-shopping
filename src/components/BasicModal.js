import * as React from "react";
import Modal from "@mui/material/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import {
  ImgContiner,
  CloseButton,
  Bookmark,
  Title,
} from "../styles/BasicModalStyles";

export default function BasicModal(props) {
  const { open, handleClose, imgUrl, title, openObj } = props;

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
