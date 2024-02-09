import { useEffect, useState } from "react";
import {
  ColorfulSpans,
  RadioContainer,
  CategoryBtn,
} from "./QuizOptionsStyled";

import Svg from "../../shared/svg/Svg";
import sprite from "../../images/icons/sprite.svg";
import { QuizBody } from "../../redux/quiz/slice";
import { QuizCreate } from "../../pages/CreateQuizPage/CreateQuizPage";
interface QuizOptionsProps {
  editingQuiz?: QuizCreate | QuizBody;
}

const QuizOptions = ({ editingQuiz }: QuizOptionsProps) => {
  const [isChevronRotated, setIsChevronRotated] = useState<boolean>(false);
  //todo: I threw props the values that will come from the editing object when the editing quiz comes
  //todo: please make them appear in your inputs by default and use the value from editingQuiz.ageGroup by default

  const [selectedAudience, setSelectedAudience] = useState<string>("children");

  const [selectedColor, setSelectedColor] = useState<string>("none");

  const handleChooseBtnClick = () => {
    // setCreateListOpen(!isCreateListOpen);
    setIsChevronRotated(!isChevronRotated);
  };

  useEffect(() => {
    if (editingQuiz) {
      setSelectedAudience(editingQuiz.ageGroup || "children");
      setSelectedColor(editingQuiz.background || "none");
    }
  }, [editingQuiz]);

  const handleAudienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAudience(event.target.value);
  };

  const handleColorClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };
  return (
    <div>
      <div>
        <RadioContainer>
          <h3>Audience</h3>
          <label>
            <input
              type="radio"
              name="audience"
              value="children"
              checked={selectedAudience === "children"}
              onChange={handleAudienceChange}
            />
            For Children
          </label>

          <label>
            <input
              type="radio"
              name="audience"
              value="adults"
              checked={selectedAudience === "adults"}
              onChange={handleAudienceChange}
            />
            For Adults
          </label>
        </RadioContainer>
        <div>
          <h3>Categories</h3>
          <CategoryBtn onClick={handleChooseBtnClick}>
            Cinema{" "}
            <Svg
              sprite={sprite}
              id={`chevron-down`}
              width={16}
              height={16}
              style={{
                transform: isChevronRotated ? "rotate(180deg)" : "none",
              }}
            />
          </CategoryBtn>
        </div>
      </div>
      <div>
        <h3>Background</h3>
        <ColorfulSpans>
          <label>
            <input
              type="radio"
              name="color"
              value="#43a8d3"
              checked={selectedColor === "#43a8d3"}
              onChange={handleColorClick}
              aria-label="Sky-Blue"
            />
            <span style={{ backgroundColor: "#43a8d3" }}></span>
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="#6636c5"
              checked={selectedColor === "#6636c5"}
              onChange={handleColorClick}
              aria-label="Purple"
            />
            <span style={{ backgroundColor: "#6636c5" }}></span>
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="#e65368"
              checked={selectedColor === "#e65368"}
              onChange={handleColorClick}
              aria-label="Red"
            />
            <span style={{ backgroundColor: "#e65368" }}></span>
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="#000000"
              checked={selectedColor === "#000000"}
              onChange={handleColorClick}
              aria-label="Dark"
            />
            <span style={{ backgroundColor: "#000000" }}></span>
          </label>
        </ColorfulSpans>
      </div>
    </div>
  );
};

export default QuizOptions;
