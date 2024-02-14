import React from "react";
import {
  StyledList,
  StyledListItem,
  StyledSection,
} from "./SectionButton.styled";
import Box from "../box/Box";

const SectionButton: React.FC = () => {
  return (
    <Box>
      <StyledSection>
        <StyledList>
          <StyledListItem>Own platform</StyledListItem>
          <StyledListItem>Create exclusive quests</StyledListItem>
          <StyledListItem>Large assortment of quizzes</StyledListItem>
        </StyledList>
      </StyledSection>
    </Box>
  );
};

export default SectionButton;
