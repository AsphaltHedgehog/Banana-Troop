import sprite from "../../images/icons/sprite.svg";
import Svg from "../svg/Svg";

const QuizListItem = () => {
  return (
    <div>
      <div>
        <div>
          <Svg sprite={sprite} id={`icon-users`} width={32} height={32}></Svg>
          <p>485</p>
        </div>
        <svg></svg>
      </div>
      <p>Themes</p>
      <p>Genera Science</p>
      <div>4</div>
      <button>Start</button>
    </div>
  );
};

export default QuizListItem;
