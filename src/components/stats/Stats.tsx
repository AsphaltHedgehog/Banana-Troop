import { useSelector } from "react-redux";
import {
  StyledContainer,
  StyledCopyright,
  StyledDescr,
  StyledLink,
  StyledNumber,
  StyledSection,
  StyledUl,
  StyledWrapper,
} from "./Stats.styled";
import { getTotalPassedQuizzes } from "../../redux/quiz/selectors";

const Stats = () => {
  const total = useSelector(getTotalPassedQuizzes);

  return (
    <StyledSection>
      <StyledContainer>
        <StyledNumber>{total}</StyledNumber>
        <StyledDescr>People passed the quiz</StyledDescr>
      </StyledContainer>
      <StyledWrapper>
        <StyledCopyright>© QuizMaster 2024 All rights reserved</StyledCopyright>
        <StyledUl>
          <li>
            <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
          </li>
          <li>
            <StyledLink to="/terms-of-service">Terms of Service</StyledLink>
          </li>
        </StyledUl>
      </StyledWrapper>
    </StyledSection>
  );
};

export default Stats;
