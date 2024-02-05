import React from "react";
import { StyledSection, StyledWrapper } from "./SectionButton.styled";

const SectionButton: React.FC = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <button>Own platform</button>
        <button>Create exclusive quests</button>
        <button>Large assortment of quizzes</button>
      </StyledWrapper>
    </StyledSection>
  );
};

export default SectionButton;
