import React, { Dispatch, SetStateAction } from "react";
import { StyledWriteRevieweBtn } from "./WriteReviewButton.styled";

interface WriteReviewButtonProps {
  setReviews: Dispatch<SetStateAction<boolean>>;
}

const WriteReviewButton: React.FC<WriteReviewButtonProps> = ({setReviews}) => {
  const handleClick = () => {
    setReviews(true);
  }

  return (
    <StyledWriteRevieweBtn type="button" onClick={handleClick}>
      Write a review
    </StyledWriteRevieweBtn>
  );
};


export default WriteReviewButton;
