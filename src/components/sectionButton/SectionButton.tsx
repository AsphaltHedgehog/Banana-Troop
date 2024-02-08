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
        <StyledListItem>
          <a href="">Own platform</a>
        </StyledListItem>
        <StyledListItem>
          <a href="">Create exclusive quests</a>
        </StyledListItem>
        <StyledListItem>
          <a href="">Create exclusive quests</a>
        </StyledListItem>
      </StyledList>
    </StyledSection>
  );
};

export default SectionButton;
