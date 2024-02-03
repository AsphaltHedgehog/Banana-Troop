import {
  StyledContainer,
  StyledCopyright,
  StyledDescr,
  StyledLink,
  StyledNumber,
  StyledSection,
  StyledUl,
} from "./Stats.styled";

const Stats = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledNumber>129865</StyledNumber>
        <StyledDescr>People passed the quiz</StyledDescr>
      </StyledContainer>
      <div>
        <StyledCopyright>© QuizMaster 2023 All rights reserved</StyledCopyright>
        <StyledUl>
          <li>
            <StyledLink to="/">Privacy Policy</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Terms of Service</StyledLink>
          </li>
        </StyledUl>
      </div>
    </StyledSection>
  );
};

export default Stats;
