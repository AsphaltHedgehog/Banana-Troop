import React from "react";
import { StyledWriteRevieweBtn } from "./WriteReviewButton.styled";
import Modal from "../modal/Modal";

const WriteReviewButton: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      return (
        <Modal closeModal={navigate("/")}>
          <div>WriteReviewModal</div>
        </Modal>
      );
    }
  };
  return (
    <StyledWriteRevieweBtn type="button" onClick={handleClick}>
      Write a review
    </StyledWriteRevieweBtn>
  );
};
export default WriteReviewButton;
