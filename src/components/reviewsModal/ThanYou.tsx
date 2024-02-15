import React from "react";
import {
  StyledThanYouButton,
  StyledThanYouSection,
  StyledThanYouTitle,
} from "./ThanYou.styled";
import { useNavigate } from "react-router-dom";

const ThanYou: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      return navigate("/");
    }
  };
  return (
    <StyledThanYouSection>
      <StyledThanYouTitle>ThanYou</StyledThanYouTitle>
      <p>for your feedback, feedback is very important to us.</p>
      <StyledThanYouButton type="button" onClick={handleClick}>
        To main page
      </StyledThanYouButton>
    </StyledThanYouSection>
  );
};
export default ThanYou;
