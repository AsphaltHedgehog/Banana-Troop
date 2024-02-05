import sprite from "../../images/icons/sprite.svg";
import Svg from "../svg/Svg";
import {
  StyledButton,
  StyledContainer,
  StyledContainer2,
  StyledContainer3,
  StyledNumbers,
  StyledCategory,
  StyledName,
  StyledRatingSvg,
  StyledUl,
} from "./QuizListItem.styled";

const QuizListItem = () => {
  return (
    <StyledContainer>
      <StyledContainer2>
        <StyledContainer3>
          <Svg sprite={sprite} id={`icon-users`} width={20} height={20} />
          <StyledNumbers>485</StyledNumbers>
        </StyledContainer3>
        <Svg sprite={sprite} id={`icon-heart`} width={20} height={20} />
      </StyledContainer2>
      <StyledCategory>Themes</StyledCategory>
      <StyledName>General Science</StyledName>
      <StyledUl>
        <li>
          <StyledRatingSvg
            sprite={sprite}
            id={`icon-rating`}
            width={16}
            height={16}
          />
        </li>
        <li>
          <StyledRatingSvg
            sprite={sprite}
            id={`icon-rating`}
            width={16}
            height={16}
          />
        </li>
        <li>
          <StyledRatingSvg
            sprite={sprite}
            id={`icon-rating`}
            width={16}
            height={16}
          />
        </li>
        <li>
          <StyledRatingSvg
            sprite={sprite}
            id={`icon-rating`}
            width={16}
            height={16}
          />
        </li>
        <li>
          <StyledRatingSvg
            sprite={sprite}
            id={`icon-rating`}
            width={16}
            height={16}
          />
        </li>
      </StyledUl>
      <StyledButton to="/">Start</StyledButton>
    </StyledContainer>
  );
};

export default QuizListItem;
