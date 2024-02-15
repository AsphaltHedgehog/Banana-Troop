import {
  StyledContainer,
  StyledP,
  StyledSvg,
  StyledLink,
} from "./CreateQuizLink.styled";
import sprite from "../../images/icons/sprite.svg";

const CreateQuizLink = () => {
  return (
    <StyledLink to="/createQuiz">
      <StyledContainer>
        <StyledSvg
          sprite={sprite}
          id="icon-plus"
          width={24}
          height={24}
          fill="#205bf1"
        />
        <StyledP>Create quiz</StyledP>
      </StyledContainer>
    </StyledLink>
  );
};

export default CreateQuizLink;
