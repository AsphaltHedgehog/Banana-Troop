import {
  StyledButton,
  StyledContainer,
  StyledP,
  StyledSvg,
} from "./CreateQuizCard.styled";
import sprite from "../../images/icons/sprite.svg";
import { useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateQuizCard = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event && isLoggedIn) {
      return navigate("/createQuiz");
    }
    return toast.error("You have to be logged in to do that!");
  };

  return (
    // Add toastify if user is not authenticated
    <li>
      <StyledButton type="button" onClick={handleClick}>
        <StyledContainer>
          <StyledSvg sprite={sprite} id="icon-plus" width={24} height={24} />
          <StyledP>Create quiz</StyledP>
        </StyledContainer>
      </StyledButton>
    </li>
  );
};

export default CreateQuizCard;
