import React from "react";
import { StyledWriteRevieweBtn } from "./WriteReviewButton.styled";
import { useNavigate } from "react-router-dom";

const WriteReviewButton: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      return navigate("/writeReview");
    }
  };
  return (
    <StyledWriteRevieweBtn type="button" onClick={handleClick}>
      Write a review
    </StyledWriteRevieweBtn>
  );
};
export default WriteReviewButton;
