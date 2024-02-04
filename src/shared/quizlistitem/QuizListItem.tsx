import sprite from "../../images/icons/sprite.svg";
import { StyledCreateBtn } from "../buttons/styledButton";
import Svg from "../svg/Svg";

const QuizListItem = () => {
  return (
    <div>
      <div>
        <div>
          <Svg sprite={sprite} id={`icon-users`} width={20} height={20} />
          <p>485</p>
        </div>
        <Svg sprite={sprite} id={`icon-heart`} width={20} height={20} />
      </div>
      <p>Themes</p>
      <p>General Science</p>
      <div>4</div>
      <StyledCreateBtn to="/">Start</StyledCreateBtn>
    </div>
  );
};

export default QuizListItem;
