import * as React from "react";
import tw from "tailwind-styled-components";
import Modal from "@mui/material/Modal";

export default function BasicModal(props) {
  const { open, handleClose, imgUrl } = props;

  const ImgContiner = tw.div`
    absolute
    top-[50%]
    left-[50%]
    translate-x-[-50%]
    translate-y-[-50%]
    w-[744px]
    bg-[rgba(0,0,0,0.5)]
    rounded-3xl
    overflow-hidden
  `;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ImgContiner>
          <img src={imgUrl} alt="img" />
        </ImgContiner>
      </Modal>
    </div>
  );
}
