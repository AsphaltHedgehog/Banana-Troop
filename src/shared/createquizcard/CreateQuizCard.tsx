import {
  StyledContainer,
  StyledNavLink,
  StyledP,
  StyledSvg,
} from "./CreateQuizCard.styled";
import sprite from "../../images/icons/sprite.svg";

const CreateQuizCard = () => {
  return (
    // Add toastify if user is not authenticated
    <StyledNavLink to="/createQuiz">
      <StyledContainer>
        <StyledSvg sprite={sprite} id="icon-plus" width={24} height={24} />
        <StyledP>Create quiz</StyledP>
      </StyledContainer>
    </StyledNavLink>
  );
};

export default CreateQuizCard;
