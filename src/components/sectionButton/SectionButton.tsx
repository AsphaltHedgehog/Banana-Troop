import React from "react";
import {
  StyledList,
  StyledListItem,
  StyledSection,
} from "./SectionButton.styled";

const SectionButton: React.FC = () => {
  return (
    <StyledSection>
      <StyledList>
        <StyledListItem>Own platform</StyledListItem>
        <StyledListItem>Create exclusive quests</StyledListItem>
        <StyledListItem>Large assortment of quizzes</StyledListItem>
      </StyledList>
    </StyledSection>
  );
};

export default SectionButton;
