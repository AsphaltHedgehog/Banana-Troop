import React from "react";
import { StyledWriteRevieweBtn } from "./WriteReviewButton.styled";

const WriteReviewButton: React.FC = (setReviewes) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setReviewes(true);
  };
  return (
    <StyledWriteRevieweBtn type="button" onClick={handleClick}>
      Write a review
    </StyledWriteRevieweBtn>
  );
};
export default WriteReviewButton;
